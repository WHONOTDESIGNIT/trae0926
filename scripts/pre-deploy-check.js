#!/usr/bin/env node

/**
 * Next.js + Netlify 部署前检查脚本
 * 自动检测常见的配置和代码问题
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.projectRoot = process.cwd();
  }

  log(message, type = 'info') {
    const colors = {
      info: '\x1b[36m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    
    console.log(`${colors[type]}${message}${colors.reset}`);
  }

  checkFile(filePath) {
    return fs.existsSync(path.join(this.projectRoot, filePath));
  }

  readFile(filePath) {
    try {
      return fs.readFileSync(path.join(this.projectRoot, filePath), 'utf8');
    } catch (error) {
      return null;
    }
  }

  // 检查Next.js配置
  checkNextConfig() {
    this.log('🔍 检查 Next.js 配置...');
    
    if (!this.checkFile('next.config.js')) {
      this.warnings.push('缺少 next.config.js 文件');
      return;
    }

    const config = this.readFile('next.config.js');
    if (!config.includes('output:')) {
      this.warnings.push('建议在 next.config.js 中设置 output 配置');
    }

    if (!config.includes('images:')) {
      this.warnings.push('建议在 next.config.js 中配置图片优化设置');
    }

    this.log('✅ Next.js 配置检查完成');
  }

  // 检查Netlify配置
  checkNetlifyConfig() {
    this.log('🔍 检查 Netlify 配置...');
    
    if (!this.checkFile('netlify.toml')) {
      this.warnings.push('缺少 netlify.toml 文件，建议添加以优化部署');
      return;
    }

    const config = this.readFile('netlify.toml');
    if (!config.includes('[build]')) {
      this.errors.push('netlify.toml 缺少 [build] 配置');
    }

    if (!config.includes('publish')) {
      this.errors.push('netlify.toml 缺少 publish 目录配置');
    }

    this.log('✅ Netlify 配置检查完成');
  }

  // 检查环境变量
  checkEnvironmentVariables() {
    this.log('🔍 检查环境变量配置...');
    
    if (!this.checkFile('.env.example')) {
      this.warnings.push('建议添加 .env.example 文件作为环境变量模板');
    }

    // 检查是否有.env文件被意外提交
    if (this.checkFile('.env')) {
      this.errors.push('.env 文件不应该提交到版本控制中');
    }

    this.log('✅ 环境变量检查完成');
  }

  // 检查组件使用
  checkComponents() {
    this.log('🔍 检查组件使用...');
    
    const appDir = path.join(this.projectRoot, 'app');
    const componentsDir = path.join(this.projectRoot, 'components');
    
    if (fs.existsSync(appDir)) {
      this.checkDirectoryForIssues(appDir);
    }
    
    if (fs.existsSync(componentsDir)) {
      this.checkDirectoryForIssues(componentsDir);
    }

    this.log('✅ 组件检查完成');
  }

  checkDirectoryForIssues(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      if (file.isDirectory()) {
        this.checkDirectoryForIssues(path.join(dir, file.name));
      } else if (file.name.endsWith('.jsx') || file.name.endsWith('.tsx')) {
        this.checkComponentFile(path.join(dir, file.name));
      }
    });
  }

  checkComponentFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(this.projectRoot, filePath);
    
    // 检查是否使用了React hooks但没有'use client'
    const hasHooks = /use(State|Effect|Context|Reducer|Callback|Memo|Ref|ImperativeHandle|LayoutEffect|DebugValue)/.test(content);
    const hasUseClient = content.includes("'use client'") || content.includes('"use client"');
    
    if (hasHooks && !hasUseClient) {
      this.warnings.push(`${relativePath}: 使用了React hooks但缺少 'use client' 指令`);
    }

    // 检查是否使用了浏览器API但没有'use client'
    const hasBrowserAPI = /(window|document|localStorage|sessionStorage|navigator)/.test(content);
    if (hasBrowserAPI && !hasUseClient) {
      this.warnings.push(`${relativePath}: 使用了浏览器API但缺少 'use client' 指令`);
    }

    // 检查随机值或时间戳的使用
    if (/Math\.random\(\)|Date\.now\(\)|new Date\(\)/.test(content) && !hasUseClient) {
      this.warnings.push(`${relativePath}: 使用了随机值或时间戳，可能导致hydration错误`);
    }
  }

  // 检查依赖
  checkDependencies() {
    this.log('🔍 检查依赖配置...');
    
    if (!this.checkFile('package.json')) {
      this.errors.push('缺少 package.json 文件');
      return;
    }

    const packageJson = JSON.parse(this.readFile('package.json'));
    
    // 检查必要的脚本
    if (!packageJson.scripts || !packageJson.scripts.build) {
      this.errors.push('package.json 缺少 build 脚本');
    }

    // 检查Next.js版本
    const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
    if (!nextVersion) {
      this.errors.push('未找到 Next.js 依赖');
    } else {
      const version = nextVersion.replace(/[^\d.]/g, '');
      if (parseFloat(version) < 13) {
        this.warnings.push('建议升级到 Next.js 13+ 以获得更好的Netlify支持');
      }
    }

    this.log('✅ 依赖检查完成');
  }

  // 运行构建测试
  testBuild() {
    this.log('🔍 测试构建过程...');
    
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: this.projectRoot });
      this.log('✅ 构建测试通过');
    } catch (error) {
      this.errors.push('构建失败，请检查构建错误');
      this.log('❌ 构建测试失败');
    }
  }

  // 运行所有检查
  runAllChecks() {
    this.log('🚀 开始 Next.js + Netlify 部署前检查...\n');
    
    this.checkNextConfig();
    this.checkNetlifyConfig();
    this.checkEnvironmentVariables();
    this.checkComponents();
    this.checkDependencies();
    
    // 只有在没有错误时才运行构建测试
    if (this.errors.length === 0) {
      this.testBuild();
    }
    
    this.showResults();
  }

  // 显示检查结果
  showResults() {
    this.log('\n📊 检查结果:');
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      this.log('🎉 恭喜！没有发现问题，可以安全部署！', 'success');
    } else {
      if (this.errors.length > 0) {
        this.log(`\n❌ 发现 ${this.errors.length} 个错误:`, 'error');
        this.errors.forEach(error => {
          this.log(`  • ${error}`, 'error');
        });
      }
      
      if (this.warnings.length > 0) {
        this.log(`\n⚠️  发现 ${this.warnings.length} 个警告:`, 'warning');
        this.warnings.forEach(warning => {
          this.log(`  • ${warning}`, 'warning');
        });
      }
      
      if (this.errors.length > 0) {
        this.log('\n🛑 请修复所有错误后再进行部署！', 'error');
        process.exit(1);
      } else {
        this.log('\n✅ 可以部署，但建议修复警告以获得更好的体验', 'success');
      }
    }
  }
}

// 运行检查
if (require.main === module) {
  const checker = new DeploymentChecker();
  checker.runAllChecks();
}

module.exports = DeploymentChecker;