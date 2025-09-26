# IPL企业网站 - 联系表单与询盘系统设计

## 项目概述
为IPL家用脱毛仪制造企业设计的智能询盘和联系系统，通过多层次表单收集客户需求，提供个性化服务体验，并与CRM系统集成实现销售线索管理。

## 1. 表单系统架构

### 1.1 表单类型定义
```typescript
type FormType = 
  | 'general-inquiry'     // 一般咨询
  | 'quote-request'       // 报价询盘
  | 'custom-oem'          // OEM定制
  | 'custom-odm'          // ODM开发
  | 'technical-support'   // 技术支持
  | 'partnership'         // 合作伙伴
  | 'sample-request'      // 样品申请
  | 'whitepaper-download' // 资料下载
  | 'newsletter'          // 订阅通讯;

interface FormSubmission {
  id: string;
  type: FormType;
  timestamp: string;
  contact_info: {
    name: string;
    email: string;
    phone?: string;
    company: string;
    position?: string;
    country: string;
    website?: string;
  };
  business_info: {
    industry: string;
    company_size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    annual_revenue?: string;
    current_suppliers?: string[];
  };
  project_requirements?: {
    project_type: 'oem' | 'odm' | 'white-label' | 'private-label';
    product_category: string[];
    target_market: string[];
    budget_range: string;
    timeline: string;
    quantity_estimate: string;
    special_requirements: string;
  };
  technical_specs?: {
    power_requirements: string;
    size_constraints: string;
    color_preferences: string[];
    certification_needs: string[];
    packaging_requirements: string;
  };
  message: string;
  source: {
    page_url: string;
    referrer?: string;
    utm_params?: Record<string, string>;
  };
  status: 'new' | 'contacted' | 'qualified' | 'quoted' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to?: string;
  follow_up_date?: string;
}
```

### 1.2 智能表单路由
```typescript
const FormRoutes = {
  '/contact': 'general-inquiry',
  '/quote': 'quote-request',
  '/custom/oem': 'custom-oem',
  '/custom/odm': 'custom-odm',
  '/support': 'technical-support',
  '/partnership': 'partnership',
  '/samples': 'sample-request'
};

// 动态表单配置
const FormConfigs: Record<FormType, FormConfig> = {
  'quote-request': {
    steps: ['contact', 'business', 'requirements', 'technical', 'review'],
    required_fields: ['name', 'email', 'company', 'project_type', 'budget_range'],
    conditional_logic: {
      'project_type': {
        'oem': ['show_technical_specs', 'show_quantity_fields'],
        'odm': ['show_development_timeline', 'show_design_requirements']
      }
    },
    auto_response: true,
    lead_scoring: {
      budget_range: { 'high': 10, 'medium': 5, 'low': 2 },
      company_size: { 'enterprise': 10, 'large': 8, 'medium': 5 }
    }
  }
};
```

## 2. 多步骤询盘表单设计

### 2.1 报价询盘表单组件
```jsx
const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormSubmission>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const steps = [
    { id: 'contact', title: '联系信息', icon: User },
    { id: 'business', title: '企业信息', icon: Building },
    { id: 'requirements', title: '项目需求', icon: Settings },
    { id: 'technical', title: '技术规格', icon: Cpu },
    { id: 'review', title: '确认提交', icon: CheckCircle }
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 进度指示器 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border-2",
                  isActive && "border-blue-500 bg-blue-500 text-white",
                  isCompleted && "border-green-500 bg-green-500 text-white",
                  !isActive && !isCompleted && "border-gray-300 text-gray-400"
                )}>
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                
                <div className="ml-3">
                  <p className={cn(
                    "text-sm font-medium",
                    isActive && "text-blue-600",
                    isCompleted && "text-green-600",
                    !isActive && !isCompleted && "text-gray-400"
                  )}>
                    {step.title}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={cn(
                    "flex-1 h-0.5 mx-4",
                    isCompleted ? "bg-green-500" : "bg-gray-200"
                  )} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* 表单内容 */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
          <CardDescription>
            请填写以下信息，我们将为您提供专业的定制方案
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}>
            {currentStep === 0 && <ContactInfoStep />}
            {currentStep === 1 && <BusinessInfoStep />}
            {currentStep === 2 && <RequirementsStep />}
            {currentStep === 3 && <TechnicalSpecsStep />}
            {currentStep === 4 && <ReviewStep />}
            
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                上一步
              </Button>
              
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  下一步
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      提交中...
                    </>
                  ) : (
                    <>
                      提交询盘
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
```

### 2.2 联系信息步骤
```jsx
const ContactInfoStep = ({ formData, updateFormData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="name">姓名 *</Label>
        <Input
          id="name"
          value={formData.contact_info?.name || ''}
          onChange={(e) => updateFormData({
            contact_info: { ...formData.contact_info, name: e.target.value }
          })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">邮箱 *</Label>
        <Input
          id="email"
          type="email"
          value={formData.contact_info?.email || ''}
          onChange={(e) => updateFormData({
            contact_info: { ...formData.contact_info, email: e.target.value }
          })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone">电话</Label>
        <Input
          id="phone"
          value={formData.contact_info?.phone || ''}
          onChange={(e) => updateFormData({
            contact_info: { ...formData.contact_info, phone: e.target.value }
          })}
        />
      </div>
      
      <div>
        <Label htmlFor="company">公司名称 *</Label>
        <Input
          id="company"
          value={formData.contact_info?.company || ''}
          onChange={(e) => updateFormData({
            contact_info: { ...formData.contact_info, company: e.target.value }
          })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="position">职位</Label>
        <Input
          id="position"
          value={formData.contact_info?.position || ''}
          onChange={(e) => updateFormData({
            contact_info: { ...formData.contact_info, position: e.target.value }
          })}
        />
      </div>
      
      <div>
        <Label htmlFor="country">国家/地区 *</Label>
        <Select
          value={formData.contact_info?.country || ''}
          onValueChange={(value) => updateFormData({
            contact_info: { ...formData.contact_info, country: value }
          })}
        >
          <SelectTrigger>
            <SelectValue placeholder="选择国家/地区" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CN">中国</SelectItem>
            <SelectItem value="US">美国</SelectItem>
            <SelectItem value="DE">德国</SelectItem>
            <SelectItem value="JP">日本</SelectItem>
            <SelectItem value="KR">韩国</SelectItem>
            <SelectItem value="other">其他</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
```

### 2.3 项目需求步骤
```jsx
const RequirementsStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label>项目类型 *</Label>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          {[
            { value: 'oem', label: 'OEM代工', desc: '使用我们的设计和技术' },
            { value: 'odm', label: 'ODM定制', desc: '完全定制化开发' },
            { value: 'white-label', label: '白标产品', desc: '现有产品贴牌' },
            { value: 'private-label', label: '私人标签', desc: '专属品牌定制' }
          ].map((option) => (
            <Card
              key={option.value}
              className={cn(
                "cursor-pointer transition-all hover:shadow-md",
                formData.project_requirements?.project_type === option.value &&
                "border-blue-500 bg-blue-50"
              )}
              onClick={() => updateFormData({
                project_requirements: {
                  ...formData.project_requirements,
                  project_type: option.value
                }
              })}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2",
                    formData.project_requirements?.project_type === option.value
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  )} />
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="budget">预算范围 *</Label>
        <Select
          value={formData.project_requirements?.budget_range || ''}
          onValueChange={(value) => updateFormData({
            project_requirements: {
              ...formData.project_requirements,
              budget_range: value
            }
          })}
        >
          <SelectTrigger>
            <SelectValue placeholder="选择预算范围" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-10k">1万美元以下</SelectItem>
            <SelectItem value="10k-50k">1-5万美元</SelectItem>
            <SelectItem value="50k-100k">5-10万美元</SelectItem>
            <SelectItem value="100k-500k">10-50万美元</SelectItem>
            <SelectItem value="over-500k">50万美元以上</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="timeline">项目时间线 *</Label>
        <Select
          value={formData.project_requirements?.timeline || ''}
          onValueChange={(value) => updateFormData({
            project_requirements: {
              ...formData.project_requirements,
              timeline: value
            }
          })}
        >
          <SelectTrigger>
            <SelectValue placeholder="选择项目时间线" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="urgent">1个月内</SelectItem>
            <SelectItem value="short">1-3个月</SelectItem>
            <SelectItem value="medium">3-6个月</SelectItem>
            <SelectItem value="long">6个月以上</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="quantity">预估数量</Label>
        <Input
          id="quantity"
          placeholder="例如：1000台/月"
          value={formData.project_requirements?.quantity_estimate || ''}
          onChange={(e) => updateFormData({
            project_requirements: {
              ...formData.project_requirements,
              quantity_estimate: e.target.value
            }
          })}
        />
      </div>
      
      <div>
        <Label htmlFor="special-requirements">特殊要求</Label>
        <Textarea
          id="special-requirements"
          placeholder="请描述您的特殊要求或定制需求..."
          value={formData.project_requirements?.special_requirements || ''}
          onChange={(e) => updateFormData({
            project_requirements: {
              ...formData.project_requirements,
              special_requirements: e.target.value
            }
          })}
          rows={4}
        />
      </div>
    </div>
  );
};
```

## 3. 智能表单功能

### 3.1 条件逻辑系统
```typescript
const ConditionalLogic = {
  // 根据项目类型显示不同字段
  project_type: {
    'oem': {
      show: ['technical_specs', 'quantity_fields', 'timeline_detailed'],
      hide: ['design_requirements', 'development_budget']
    },
    'odm': {
      show: ['design_requirements', 'development_budget', 'ip_ownership'],
      hide: ['existing_specs']
    }
  },
  
  // 根据预算范围调整服务推荐
  budget_range: {
    'under-10k': {
      recommend: ['white-label', 'existing-products'],
      hide: ['custom-development']
    },
    'over-500k': {
      recommend: ['full-custom', 'dedicated-team'],
      show: ['premium-services']
    }
  },
  
  // 根据地区显示相关认证
  country: {
    'US': { show: ['fda-certification', 'fcc-compliance'] },
    'EU': { show: ['ce-marking', 'rohs-compliance'] },
    'CN': { show: ['ccc-certification', 'nmpa-approval'] }
  }
};

// 动态字段渲染
const DynamicFieldRenderer = ({ formData, fieldConfig }) => {
  const shouldShow = useMemo(() => {
    return evaluateConditions(fieldConfig.conditions, formData);
  }, [formData, fieldConfig]);
  
  if (!shouldShow) return null;
  
  return (
    <div className={fieldConfig.className}>
      {fieldConfig.fields.map(field => (
        <FormField key={field.name} {...field} />
      ))}
    </div>
  );
};
```

### 3.2 实时验证系统
```typescript
const FormValidation = {
  // 字段级验证
  validateField: (name: string, value: any, formData: FormSubmission) => {
    const errors: string[] = [];
    
    switch (name) {
      case 'email':
        if (!isValidEmail(value)) {
          errors.push('请输入有效的邮箱地址');
        }
        break;
        
      case 'phone':
        if (value && !isValidPhone(value)) {
          errors.push('请输入有效的电话号码');
        }
        break;
        
      case 'budget_range':
        if (!value && formData.type === 'quote-request') {
          errors.push('报价询盘需要提供预算范围');
        }
        break;
    }
    
    return errors;
  },
  
  // 表单级验证
  validateForm: (formData: FormSubmission) => {
    const errors: Record<string, string[]> = {};
    
    // 必填字段检查
    const requiredFields = getRequiredFields(formData.type);
    requiredFields.forEach(field => {
      if (!getFieldValue(formData, field)) {
        errors[field] = ['此字段为必填项'];
      }
    });
    
    // 业务逻辑验证
    if (formData.project_requirements?.budget_range === 'under-10k' &&
        formData.project_requirements?.project_type === 'odm') {
      errors.budget_range = ['ODM项目预算通常需要更高的投入'];
    }
    
    return errors;
  }
};
```

### 3.3 自动保存与恢复
```typescript
const useFormAutoSave = (formId: string) => {
  const [formData, setFormData] = useState<Partial<FormSubmission>>({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  // 自动保存到本地存储
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem(`form_${formId}`, JSON.stringify(formData));
      setLastSaved(new Date());
    }, 2000); // 2秒后保存
    
    return () => clearTimeout(saveTimer);
  }, [formData, formId]);
  
  // 页面加载时恢复数据
  useEffect(() => {
    const saved = localStorage.getItem(`form_${formId}`);
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setFormData(parsedData);
      } catch (error) {
        console.error('Failed to restore form data:', error);
      }
    }
  }, [formId]);
  
  const clearSavedData = () => {
    localStorage.removeItem(`form_${formId}`);
    setLastSaved(null);
  };
  
  return { formData, setFormData, lastSaved, clearSavedData };
};
```

## 4. CRM集成与线索管理

### 4.1 线索评分系统
```typescript
const LeadScoring = {
  calculateScore: (submission: FormSubmission): number => {
    let score = 0;
    
    // 预算范围评分
    const budgetScores = {
      'over-500k': 20,
      '100k-500k': 15,
      '50k-100k': 10,
      '10k-50k': 5,
      'under-10k': 2
    };
    score += budgetScores[submission.project_requirements?.budget_range] || 0;
    
    // 公司规模评分
    const companySizeScores = {
      'enterprise': 15,
      'large': 12,
      'medium': 8,
      'small': 5,
      'startup': 3
    };
    score += companySizeScores[submission.business_info?.company_size] || 0;
    
    // 项目类型评分
    const projectTypeScores = {
      'odm': 15,
      'oem': 12,
      'private-label': 8,
      'white-label': 5
    };
    score += projectTypeScores[submission.project_requirements?.project_type] || 0;
    
    // 时间紧迫性评分
    const timelineScores = {
      'urgent': 10,
      'short': 8,
      'medium': 5,
      'long': 2
    };
    score += timelineScores[submission.project_requirements?.timeline] || 0;
    
    // 完整性评分
    const completeness = calculateFormCompleteness(submission);
    score += Math.floor(completeness * 10);
    
    return Math.min(score, 100); // 最高100分
  },
  
  getPriority: (score: number): FormSubmission['priority'] => {
    if (score >= 80) return 'urgent';
    if (score >= 60) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }
};
```

### 4.2 自动响应系统
```typescript
const AutoResponse = {
  // 发送确认邮件
  sendConfirmationEmail: async (submission: FormSubmission) => {
    const template = getEmailTemplate(submission.type, submission.contact_info.country);
    
    await sendEmail({
      to: submission.contact_info.email,
      subject: template.subject,
      html: template.render(submission),
      attachments: getRelevantBrochures(submission)
    });
  },
  
  // 内部通知
  notifyTeam: async (submission: FormSubmission) => {
    const assignee = getAssignee(submission);
    const priority = LeadScoring.getPriority(LeadScoring.calculateScore(submission));
    
    await sendSlackNotification({
      channel: '#sales-leads',
      message: `新的${submission.type}询盘 - 优先级: ${priority}`,
      assignee: assignee.name,
      submission_url: `${process.env.CRM_URL}/leads/${submission.id}`
    });
  },
  
  // 创建CRM记录
  createCRMRecord: async (submission: FormSubmission) => {
    const crmData = {
      contact: {
        name: submission.contact_info.name,
        email: submission.contact_info.email,
        phone: submission.contact_info.phone,
        company: submission.contact_info.company,
        position: submission.contact_info.position
      },
      lead: {
        source: 'website',
        type: submission.type,
        score: LeadScoring.calculateScore(submission),
        priority: LeadScoring.getPriority(LeadScoring.calculateScore(submission)),
        requirements: submission.project_requirements,
        notes: submission.message
      }
    };
    
    return await crmAPI.createLead(crmData);
  }
};
```

## 5. 表单页面布局

### 5.1 联系页面主布局
```jsx
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区块 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            专业的IPL设备定制服务，让我们为您的品牌创造价值
          </p>
        </div>
      </section>
      
      {/* 联系方式卡片 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ContactCard
              icon={Phone}
              title="电话咨询"
              content="+86 400-123-4567"
              description="工作日 9:00-18:00"
            />
            <ContactCard
              icon={Mail}
              title="邮件联系"
              content="sales@ipltech.com"
              description="24小时内回复"
            />
            <ContactCard
              icon={MapPin}
              title="公司地址"
              content="深圳市南山区科技园"
              description="欢迎预约参观"
            />
          </div>
          
          {/* 快速入口 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <QuickActionCard
              title="获取报价"
              description="详细项目报价"
              href="/quote"
              icon={Calculator}
              color="blue"
            />
            <QuickActionCard
              title="申请样品"
              description="免费样品申请"
              href="/samples"
              icon={Package}
              color="green"
            />
            <QuickActionCard
              title="技术支持"
              description="专业技术咨询"
              href="/support"
              icon={Headphones}
              color="purple"
            />
            <QuickActionCard
              title="合作伙伴"
              description="战略合作申请"
              href="/partnership"
              icon={Handshake}
              color="orange"
            />
          </div>
          
          {/* 一般咨询表单 */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>一般咨询</CardTitle>
              <CardDescription>
                有任何问题？请填写下方表单，我们将尽快回复您
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GeneralInquiryForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
```

### 5.2 表单成功页面
```jsx
const FormSuccessPage = ({ submissionId, formType }) => {
  const [submission, setSubmission] = useState(null);
  
  useEffect(() => {
    // 获取提交详情
    fetchSubmissionDetails(submissionId).then(setSubmission);
  }, [submissionId]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">提交成功！</h1>
          
          <p className="text-gray-600 mb-6">
            感谢您的咨询，我们已收到您的{getFormTypeName(formType)}申请。
            我们的专业团队将在24小时内与您联系。
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">提交编号:</span>
              <span className="font-mono">{submissionId}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-500">预计回复时间:</span>
              <span>24小时内</span>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                返回首页
              </Link>
            </Button>
            
            <Button asChild>
              <Link href="/resources">
                <FileText className="mr-2 h-4 w-4" />
                浏览资料
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
```

## 6. 性能优化与用户体验

### 6.1 表单性能优化
- **懒加载**: 分步骤加载表单组件
- **防抖处理**: 输入验证防抖，减少API调用
- **缓存策略**: 选项数据缓存，减少重复请求
- **压缩传输**: 表单数据压缩传输

### 6.2 用户体验优化
- **进度指示**: 清晰的步骤进度显示
- **实时验证**: 即时字段验证反馈
- **自动保存**: 防止数据丢失
- **智能提示**: 根据输入提供相关建议

### 6.3 无障碍性支持
- **键盘导航**: 完整的键盘操作支持
- **屏幕阅读器**: ARIA标签和语义化HTML
- **颜色对比**: 符合WCAG标准的颜色对比度
- **错误提示**: 清晰的错误信息和修复建议

这个联系表单系统为IPL企业网站提供了完整的客户询盘和线索管理解决方案，确保高转化率和优质的用户体验。