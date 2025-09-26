# IPL定制服务与B2B解决方案页面结构

## 定制服务总览页面 (/services)

### 页面结构
```
├── Hero区块
├── 服务概览卡片
├── 定制流程展示
├── 服务优势对比
├── 成功案例精选
├── 服务保障承诺
└── 立即咨询CTA
```

### Hero区块设计
```typescript
interface CustomServicesHero {
  title: "一站式IPL设备定制解决方案";
  subtitle: "从概念设计到批量生产，15年专业经验为您保驾护航";
  highlights: [
    "30天快速打样",
    "100%质量保证",
    "全程项目跟踪",
    "一对一专属服务"
  ];
  backgroundImage: "modern-factory-production-line.jpg";
  ctaButtons: [
    { text: "获取定制方案", action: "consultation" },
    { text: "下载服务手册", action: "download" }
  ];
}
```

### 服务概览卡片
```typescript
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice?: string;
  ctaText: string;
  ctaLink: string;
}

const CUSTOM_SERVICES: ServiceCard[] = [
  {
    id: 'oem-service',
    title: 'OEM代工服务',
    description: '基于我们成熟的IPL产品平台，为您提供品牌定制生产服务',
    icon: Factory,
    features: [
      '成熟产品平台',
      '快速上市时间',
      '成本效益最优',
      '品质稳定可靠'
    ],
    deliverables: [
      '产品定制方案',
      '样品制作',
      '批量生产',
      '包装设计',
      '质量检测报告'
    ],
    timeline: '15-30天',
    startingPrice: '面议',
    ctaText: '了解OEM服务',
    ctaLink: '/services/oem'
  },
  {
    id: 'odm-service',
    title: 'ODM设计制造',
    description: '从零开始的全新产品设计开发，满足您的独特需求',
    icon: Lightbulb,
    features: [
      '全新产品设计',
      '独家技术方案',
      '专利申请支持',
      '市场差异化优势'
    ],
    deliverables: [
      '需求分析报告',
      '概念设计方案',
      '工程样机',
      '量产工艺',
      '技术文档包'
    ],
    timeline: '60-90天',
    ctaText: '咨询ODM服务',
    ctaLink: '/services/odm'
  },
  {
    id: 'white-label',
    title: '白标代工',
    description: '现有产品贴牌生产，快速建立您的IPL产品线',
    icon: Tag,
    features: [
      '现货产品选择',
      '最短交期',
      '最低起订量',
      '灵活包装方案'
    ],
    deliverables: [
      '产品目录',
      '样品寄送',
      '包装定制',
      '批量供货',
      '售后支持'
    ],
    timeline: '7-15天',
    ctaText: '查看白标产品',
    ctaLink: '/services/white-label'
  }
];
```

## 定制流程展示组件

### 流程步骤设计
```typescript
interface CustomizationStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: LucideIcon;
  details: StepDetail[];
}

const CUSTOMIZATION_PROCESS: CustomizationStep[] = [
  {
    id: 1,
    title: '需求沟通',
    description: '深入了解您的产品需求、目标市场和技术要求',
    duration: '1-3天',
    deliverables: ['需求分析报告', '技术可行性评估', '初步报价方案'],
    icon: MessageSquare,
    details: [
      {
        task: '产品功能需求分析',
        description: '确定IPL设备的核心功能、技术参数和性能指标'
      },
      {
        task: '目标市场调研',
        description: '分析目标用户群体、竞争环境和市场定位'
      },
      {
        task: '法规认证要求',
        description: '确定目标市场的认证标准和法规要求'
      },
      {
        task: '预算和时间规划',
        description: '制定项目预算范围和时间节点'
      }
    ]
  },
  {
    id: 2,
    title: '方案设计',
    description: '基于需求分析，制定详细的产品设计和技术方案',
    duration: '5-10天',
    deliverables: ['详细设计方案', '技术规格书', '工业设计图', '成本分析'],
    icon: PenTool,
    details: [
      {
        task: '技术方案设计',
        description: '确定光学系统、电路设计、安全系统等技术方案'
      },
      {
        task: '外观造型设计',
        description: '产品外观设计、人机工程学优化、UI界面设计'
      },
      {
        task: '结构工程设计',
        description: '内部结构设计、散热方案、装配工艺设计'
      },
      {
        task: '成本工程分析',
        description: '材料成本、制造成本、包装成本详细分析'
      }
    ]
  },
  {
    id: 3,
    title: '样品制作',
    description: '制作工程样机，进行功能测试和性能验证',
    duration: '15-25天',
    deliverables: ['工程样机', '测试报告', '改进建议', '最终确认'],
    icon: Wrench,
    details: [
      {
        task: '原型机制作',
        description: '基于设计方案制作功能完整的工程样机'
      },
      {
        task: '性能测试验证',
        description: '光学性能、电气安全、EMC测试等全面验证'
      },
      {
        task: '用户体验测试',
        description: '操作便利性、界面友好性、使用安全性测试'
      },
      {
        task: '优化改进',
        description: '根据测试结果进行设计优化和性能改进'
      }
    ]
  },
  {
    id: 4,
    title: '批量生产',
    description: '建立生产线，进行批量制造和质量控制',
    duration: '20-40天',
    deliverables: ['生产计划', '质量标准', '成品交付', '检测报告'],
    icon: Factory,
    details: [
      {
        task: '生产工艺制定',
        description: '制定详细的生产工艺流程和质量控制标准'
      },
      {
        task: '供应链管理',
        description: '原材料采购、供应商管理、库存控制'
      },
      {
        task: '生产执行',
        description: '按计划进行批量生产，实时监控生产进度'
      },
      {
        task: '质量检验',
        description: '全程质量控制，出厂前100%功能测试'
      }
    ]
  },
  {
    id: 5,
    title: '交付服务',
    description: '产品交付、技术支持和售后服务保障',
    duration: '持续服务',
    deliverables: ['产品交付', '技术文档', '培训服务', '售后支持'],
    icon: Truck,
    details: [
      {
        task: '产品包装交付',
        description: '专业包装、物流配送、交付确认'
      },
      {
        task: '技术文档提供',
        description: '使用手册、维修指南、技术规格书'
      },
      {
        task: '技术培训',
        description: '产品使用培训、维护保养培训、故障排除'
      },
      {
        task: '售后服务',
        description: '技术支持、维修服务、配件供应'
      }
    ]
  }
];
```

## OEM服务详情页 (/services/oem)

### 页面结构
```typescript
interface OEMServicePage {
  hero: {
    title: "OEM代工服务 - 快速启动您的IPL品牌";
    subtitle: "基于成熟产品平台，15天快速交付，助您抢占市场先机";
    benefits: [
      "成熟稳定的产品平台",
      "快速上市，抢占先机",
      "成本可控，利润最大化",
      "全程质量保障"
    ];
  };
  
  productPlatforms: OEMPlatform[];
  customizationOptions: CustomizationOption[];
  pricingStructure: PricingTier[];
  successCases: CaseStudy[];
  serviceGuarantees: ServiceGuarantee[];
}
```

### OEM产品平台
```typescript
interface OEMPlatform {
  id: string;
  name: string;
  category: ProductCategory;
  baseSpecs: TechnicalSpecs;
  customizableFeatures: CustomizableFeature[];
  moq: number;
  leadTime: string;
  basePrice: PriceRange;
  certifications: Certification[];
  targetMarkets: string[];
}

const OEM_PLATFORMS: OEMPlatform[] = [
  {
    id: 'home-classic',
    name: 'IPL家用经典款',
    category: ProductCategory.HOME_IPL,
    baseSpecs: {
      wavelength: { range: '515-1200nm', peak: '590nm' },
      energyDensity: { range: '1-5 J/cm²', levels: 5 },
      flashWindow: { size: '3.1cm²', shape: 'rectangular' },
      flashCount: { lamp: 300000, device: 500000 }
    },
    customizableFeatures: [
      {
        category: '外观定制',
        options: ['颜色选择', '材质纹理', 'Logo印刷', '包装设计']
      },
      {
        category: '功能配置',
        options: ['能量档位', '安全模式', '显示界面', '操作按键']
      },
      {
        category: '技术参数',
        options: ['波长调整', '能量密度', '闪光频率', '冷却系统']
      }
    ],
    moq: 500,
    leadTime: '15-20天',
    basePrice: { min: 45, max: 65, currency: 'USD', unit: 'piece' },
    certifications: [CERTIFICATIONS.CE, CERTIFICATIONS.FCC, CERTIFICATIONS.ROHS],
    targetMarkets: ['欧洲', '北美', '澳洲', '日韩']
  }
];
```

### 定制选项配置
```typescript
interface CustomizationOption {
  category: string;
  name: string;
  description: string;
  options: OptionItem[];
  priceImpact: PriceImpact;
  leadTimeImpact: number; // 额外天数
  moqImpact: number; // MOQ影响
}

interface OptionItem {
  id: string;
  name: string;
  description?: string;
  additionalCost?: number;
  image?: string;
  popular?: boolean;
}

const CUSTOMIZATION_OPTIONS: CustomizationOption[] = [
  {
    category: '外观定制',
    name: '颜色方案',
    description: '选择产品主体颜色和配色方案',
    options: [
      { id: 'white', name: '珍珠白', popular: true },
      { id: 'black', name: '深空黑' },
      { id: 'pink', name: '玫瑰金', additionalCost: 2 },
      { id: 'blue', name: '天空蓝', additionalCost: 2 },
      { id: 'custom', name: '定制色彩', additionalCost: 5 }
    ],
    priceImpact: { type: 'fixed', value: 0 },
    leadTimeImpact: 0,
    moqImpact: 0
  },
  {
    category: '包装定制',
    name: '包装设计',
    description: '个性化包装盒设计和印刷',
    options: [
      { id: 'standard', name: '标准包装', popular: true },
      { id: 'premium', name: '精装礼盒', additionalCost: 8 },
      { id: 'eco', name: '环保包装', additionalCost: 3 },
      { id: 'custom', name: '全定制包装', additionalCost: 15 }
    ],
    priceImpact: { type: 'percentage', value: 0.1 },
    leadTimeImpact: 5,
    moqImpact: 200
  }
];
```

## ODM服务详情页 (/services/odm)

### 设计开发流程
```typescript
interface ODMDevelopmentPhase {
  phase: string;
  duration: string;
  activities: Activity[];
  deliverables: Deliverable[];
  milestones: Milestone[];
  cost: CostBreakdown;
}

const ODM_PHASES: ODMDevelopmentPhase[] = [
  {
    phase: '概念设计阶段',
    duration: '10-15天',
    activities: [
      {
        name: '市场调研分析',
        description: '分析目标市场、竞品分析、用户需求调研',
        duration: '3-5天'
      },
      {
        name: '概念方案设计',
        description: '产品概念设计、功能定义、技术路线规划',
        duration: '5-7天'
      },
      {
        name: '可行性评估',
        description: '技术可行性、成本可行性、时间可行性评估',
        duration: '2-3天'
      }
    ],
    deliverables: [
      { name: '市场调研报告', format: 'PDF' },
      { name: '产品概念方案', format: '3D渲染图' },
      { name: '技术可行性报告', format: 'PDF' },
      { name: '项目计划书', format: 'PDF' }
    ],
    milestones: [
      { name: '概念方案确认', date: 'Day 10' },
      { name: '项目启动', date: 'Day 15' }
    ],
    cost: {
      designFee: 5000,
      engineeringFee: 8000,
      prototypingFee: 0,
      total: 13000,
      currency: 'USD'
    }
  }
];
```

## 服务保障体系

### 质量保障
```typescript
interface QualityAssurance {
  standards: QualityStandard[];
  testingProcedures: TestingProcedure[];
  certificationSupport: CertificationSupport[];
  warrantyTerms: WarrantyTerm[];
}

const QUALITY_ASSURANCE: QualityAssurance = {
  standards: [
    {
      name: 'ISO 13485',
      description: '医疗器械质量管理体系',
      scope: '全流程质量控制',
      certification: '已认证'
    },
    {
      name: 'ISO 9001',
      description: '质量管理体系',
      scope: '生产制造过程',
      certification: '已认证'
    }
  ],
  testingProcedures: [
    {
      stage: '来料检验',
      tests: ['外观检查', '尺寸测量', '电气性能', '材料成分'],
      standard: 'AQL 1.5',
      sampleRate: '10%'
    },
    {
      stage: '生产过程',
      tests: ['在线测试', '功能检验', '安全测试', '老化测试'],
      standard: '100%检测',
      sampleRate: '100%'
    },
    {
      stage: '出厂检验',
      tests: ['最终功能测试', '包装检查', '标识核对', '文档确认'],
      standard: 'Zero Defect',
      sampleRate: '100%'
    }
  ]
};
```

### 服务承诺
```typescript
interface ServiceCommitment {
  category: string;
  commitments: Commitment[];
}

const SERVICE_COMMITMENTS: ServiceCommitment[] = [
  {
    category: '交期保障',
    commitments: [
      {
        title: '准时交付率 ≥ 98%',
        description: '严格按照约定时间交付产品',
        penalty: '延期1天赔偿1%货款'
      },
      {
        title: '紧急订单支持',
        description: '7x24小时紧急订单响应',
        surcharge: '加急费20%'
      }
    ]
  },
  {
    category: '质量保障',
    commitments: [
      {
        title: '零缺陷出货',
        description: '出厂产品100%功能测试通过',
        warranty: '12个月质量保修'
      },
      {
        title: '质量问题处理',
        description: '24小时内响应，72小时内解决方案',
        compensation: '质量问题全额赔偿'
      }
    ]
  }
];
```

## 询价和咨询系统

### 智能询价表单
```typescript
interface QuoteRequest {
  // 项目基本信息
  projectInfo: {
    projectName: string;
    serviceType: 'OEM' | 'ODM' | 'White-Label';
    targetMarket: string[];
    launchTimeline: string;
  };
  
  // 产品需求
  productRequirements: {
    category: ProductCategory;
    estimatedQuantity: QuantityRange;
    targetPrice: PriceRange;
    keyFeatures: string[];
    specialRequirements: string;
  };
  
  // 定制需求
  customizationNeeds: {
    appearanceCustomization: boolean;
    functionalCustomization: boolean;
    packagingCustomization: boolean;
    certificationNeeds: string[];
    customizationDetails: string;
  };
  
  // 公司信息
  companyInfo: {
    companyName: string;
    industry: string;
    companySize: string;
    annualVolume: string;
    distributionChannels: string[];
  };
  
  // 联系信息
  contactInfo: {
    contactPerson: string;
    title: string;
    email: string;
    phone: string;
    country: string;
    preferredContactMethod: 'email' | 'phone' | 'video-call';
    timezone: string;
  };
  
  // 附件
  attachments: {
    referenceImages?: File[];
    technicalSpecs?: File[];
    marketingMaterials?: File[];
    ndaDocument?: File;
  };
}
```

### 自动报价系统
```typescript
interface AutoQuoteEngine {
  calculateBasePrice: (requirements: ProductRequirements) => PriceEstimate;
  applyCustomizationCosts: (customizations: CustomizationNeeds) => CostAdjustment;
  calculateMOQDiscount: (quantity: number) => DiscountRate;
  estimateLeadTime: (serviceType: string, customizations: CustomizationNeeds) => TimeEstimate;
  generateQuotePDF: (quoteData: QuoteData) => Promise<Buffer>;
}

const autoQuoteEngine: AutoQuoteEngine = {
  calculateBasePrice: (requirements) => {
    const basePrices = {
      [ProductCategory.HOME_IPL]: { min: 45, max: 85 },
      [ProductCategory.PROFESSIONAL_IPL]: { min: 120, max: 280 },
      [ProductCategory.PORTABLE_IPL]: { min: 35, max: 65 }
    };
    
    const basePrice = basePrices[requirements.category];
    const quantityMultiplier = getQuantityMultiplier(requirements.estimatedQuantity);
    
    return {
      unitPrice: {
        min: basePrice.min * quantityMultiplier,
        max: basePrice.max * quantityMultiplier
      },
      totalPrice: {
        min: basePrice.min * quantityMultiplier * requirements.estimatedQuantity.min,
        max: basePrice.max * quantityMultiplier * requirements.estimatedQuantity.max
      },
      currency: 'USD'
    };
  }
};
```

---

**实现重点**:
1. **流程透明化**: 清晰的服务流程和时间节点
2. **个性化定制**: 灵活的定制选项和配置
3. **智能询价**: 自动化报价系统提高效率
4. **质量保障**: 完善的质量控制和服务承诺
5. **客户体验**: 一站式服务和专业支持