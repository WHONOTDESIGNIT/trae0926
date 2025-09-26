# IPL产品数据模型与展示组件规范

## 产品数据结构

### 核心产品接口
```typescript
interface IPLProduct {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: ProductCategory;
  series: ProductSeries;
  
  // 基本信息
  description: string;
  shortDescription: string;
  features: string[];
  applications: ApplicationArea[];
  
  // 技术规格
  specifications: TechnicalSpecs;
  
  // 媒体资源
  images: ProductImage[];
  videos?: ProductVideo[];
  documents: ProductDocument[];
  
  // 商业信息
  pricing: PricingInfo;
  moq: number; // 最小起订量
  leadTime: string; // 交期
  
  // SEO和元数据
  seo: SEOMetadata;
  
  // 状态
  status: 'active' | 'discontinued' | 'coming-soon';
  featured: boolean;
  
  createdAt: Date;
  updatedAt: Date;
}
```

### 产品分类枚举
```typescript
enum ProductCategory {
  HOME_IPL = 'home-ipl',
  PROFESSIONAL_IPL = 'professional-ipl',
  PORTABLE_IPL = 'portable-ipl',
  MULTI_FUNCTION = 'multi-function',
  ACCESSORIES = 'accessories'
}

enum ProductSeries {
  CLASSIC = 'classic',
  PRO = 'pro',
  MINI = 'mini',
  PREMIUM = 'premium',
  CUSTOM = 'custom'
}

enum ApplicationArea {
  HOME_USE = 'home-use',
  SALON_USE = 'salon-use',
  MEDICAL_USE = 'medical-use',
  OEM_ODM = 'oem-odm'
}
```

### 技术规格接口
```typescript
interface TechnicalSpecs {
  // 光学参数
  wavelength: {
    range: string; // "515-1200nm"
    peak: string;  // "590nm"
  };
  
  // 能量参数
  energyDensity: {
    range: string; // "1-5 J/cm²"
    levels: number; // 5档调节
  };
  
  // 闪光参数
  flashWindow: {
    size: string; // "3.1cm²"
    shape: 'rectangular' | 'circular';
  };
  
  flashCount: {
    lamp: number;    // 灯管闪光次数
    device: number;  // 设备总闪光次数
  };
  
  // 物理参数
  dimensions: {
    length: number; // mm
    width: number;  // mm
    height: number; // mm
    weight: number; // g
  };
  
  // 电源参数
  power: {
    input: string;     // "100-240V AC"
    consumption: number; // W
    adapter: string;   // "12V DC"
  };
  
  // 安全特性
  safety: {
    skinToneDetection: boolean;
    contactDetection: boolean;
    childLock: boolean;
    overheatingProtection: boolean;
    uvFilter: boolean;
  };
  
  // 认证标准
  certifications: Certification[];
  
  // 使用参数
  treatmentAreas: TreatmentArea[];
  skinTones: SkinTone[];
  sessionInterval: string; // "2周"
  expectedResults: string; // "8-12次治疗"
}
```

### 认证和标准
```typescript
interface Certification {
  name: string;
  code: string;
  issuer: string;
  validUntil?: Date;
  certificateUrl?: string;
}

// 预定义认证
const CERTIFICATIONS = {
  ISO13485: {
    name: 'ISO 13485医疗器械质量管理体系',
    code: 'ISO13485',
    issuer: 'ISO'
  },
  CE: {
    name: 'CE欧盟安全认证',
    code: 'CE',
    issuer: 'European Union'
  },
  FDA: {
    name: 'FDA美国食品药品监督管理局',
    code: 'FDA',
    issuer: 'US FDA'
  },
  FCC: {
    name: 'FCC美国联邦通信委员会',
    code: 'FCC',
    issuer: 'US FCC'
  },
  ROHS: {
    name: 'RoHS环保认证',
    code: 'RoHS',
    issuer: 'European Union'
  }
} as const;
```

### 治疗区域和肤色
```typescript
enum TreatmentArea {
  FACE = 'face',
  LEGS = 'legs',
  ARMS = 'arms',
  UNDERARMS = 'underarms',
  BIKINI = 'bikini',
  CHEST = 'chest',
  BACK = 'back'
}

enum SkinTone {
  VERY_LIGHT = 'very-light', // Fitzpatrick I
  LIGHT = 'light',           // Fitzpatrick II
  MEDIUM = 'medium',         // Fitzpatrick III
  OLIVE = 'olive',           // Fitzpatrick IV
  BROWN = 'brown',           // Fitzpatrick V
  DARK = 'dark'              // Fitzpatrick VI (通常不适用)
}
```

## 产品展示组件

### 产品卡片组件
```typescript
interface ProductCardProps {
  product: IPLProduct;
  variant?: 'default' | 'featured' | 'compact';
  showPrice?: boolean;
  showSpecs?: boolean;
  onInquiry?: (product: IPLProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'default',
  showPrice = false,
  showSpecs = true,
  onInquiry
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* 产品图片 */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="object-cover"
        />
        
        {/* 产品标签 */}
        <div className="absolute top-3 left-3 flex gap-2">
          <CategoryBadge category={product.category} />
          {product.featured && (
            <Badge variant="featured">精选</Badge>
          )}
        </div>
      </div>
      
      {/* 产品信息 */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          型号: {product.model}
        </p>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        {/* 核心规格 */}
        {showSpecs && (
          <div className="space-y-2 mb-4">
            <SpecItem 
              label="波长范围" 
              value={product.specifications.wavelength.range} 
            />
            <SpecItem 
              label="能量密度" 
              value={product.specifications.energyDensity.range} 
            />
            <SpecItem 
              label="闪光窗口" 
              value={product.specifications.flashWindow.size} 
            />
          </div>
        )}
        
        {/* 应用场景标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.applications.map(app => (
            <ApplicationBadge key={app} application={app} />
          ))}
        </div>
        
        {/* 操作按钮 */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              查看详情
            </Link>
          </Button>
          
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onInquiry?.(product)}
          >
            立即询价
          </Button>
        </div>
      </div>
    </div>
  );
};
```

### 产品规格展示组件
```typescript
const ProductSpecifications: React.FC<{ specs: TechnicalSpecs }> = ({ specs }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">技术规格</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 光学参数 */}
        <SpecGroup title="光学参数">
          <SpecRow label="波长范围" value={specs.wavelength.range} />
          <SpecRow label="峰值波长" value={specs.wavelength.peak} />
          <SpecRow label="能量密度" value={specs.energyDensity.range} />
          <SpecRow label="能量档位" value={`${specs.energyDensity.levels}档调节`} />
        </SpecGroup>
        
        {/* 闪光参数 */}
        <SpecGroup title="闪光参数">
          <SpecRow label="闪光窗口" value={specs.flashWindow.size} />
          <SpecRow label="灯管寿命" value={`${specs.flashCount.lamp.toLocaleString()}次`} />
          <SpecRow label="设备寿命" value={`${specs.flashCount.device.toLocaleString()}次`} />
        </SpecGroup>
        
        {/* 物理参数 */}
        <SpecGroup title="物理参数">
          <SpecRow 
            label="尺寸" 
            value={`${specs.dimensions.length}×${specs.dimensions.width}×${specs.dimensions.height}mm`} 
          />
          <SpecRow label="重量" value={`${specs.dimensions.weight}g`} />
        </SpecGroup>
        
        {/* 电源参数 */}
        <SpecGroup title="电源参数">
          <SpecRow label="输入电压" value={specs.power.input} />
          <SpecRow label="功耗" value={`${specs.power.consumption}W`} />
          <SpecRow label="适配器" value={specs.power.adapter} />
        </SpecGroup>
      </div>
      
      {/* 安全特性 */}
      <div className="mt-6">
        <h4 className="font-medium mb-3">安全特性</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {specs.safety.skinToneDetection && (
            <SafetyFeature icon={Shield} text="肤色检测" />
          )}
          {specs.safety.contactDetection && (
            <SafetyFeature icon={Shield} text="接触检测" />
          )}
          {specs.safety.childLock && (
            <SafetyFeature icon={Lock} text="儿童锁" />
          )}
          {specs.safety.overheatingProtection && (
            <SafetyFeature icon={Thermometer} text="过热保护" />
          )}
          {specs.safety.uvFilter && (
            <SafetyFeature icon={Sun} text="UV滤光" />
          )}
        </div>
      </div>
      
      {/* 认证标准 */}
      <div className="mt-6">
        <h4 className="font-medium mb-3">认证标准</h4>
        <div className="flex flex-wrap gap-3">
          {specs.certifications.map(cert => (
            <CertificationBadge key={cert.code} certification={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};
```

### 产品比较组件
```typescript
interface ProductComparisonProps {
  products: IPLProduct[];
  maxProducts?: number;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ 
  products, 
  maxProducts = 3 
}) => {
  const [selectedProducts, setSelectedProducts] = useState<IPLProduct[]>([]);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6">产品对比</h3>
      
      {/* 产品选择器 */}
      <div className="mb-6">
        <ProductSelector 
          products={products}
          selected={selectedProducts}
          onSelect={setSelectedProducts}
          maxSelection={maxProducts}
        />
      </div>
      
      {/* 对比表格 */}
      {selectedProducts.length > 0 && (
        <ComparisonTable products={selectedProducts} />
      )}
    </div>
  );
};
```

## 产品筛选和搜索

### 筛选接口
```typescript
interface ProductFilters {
  category?: ProductCategory[];
  series?: ProductSeries[];
  applications?: ApplicationArea[];
  priceRange?: [number, number];
  wavelengthRange?: [number, number];
  energyDensityRange?: [number, number];
  certifications?: string[];
  skinTones?: SkinTone[];
  treatmentAreas?: TreatmentArea[];
}

interface ProductSearchParams {
  query?: string;
  filters?: ProductFilters;
  sortBy?: 'name' | 'price' | 'popularity' | 'newest';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}
```

### 搜索和筛选组件
```typescript
const ProductFilters: React.FC<{
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
}> = ({ filters, onFiltersChange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-4">筛选条件</h3>
      
      {/* 产品分类 */}
      <FilterGroup title="产品分类">
        <CheckboxGroup
          options={Object.values(ProductCategory)}
          selected={filters.category || []}
          onChange={(category) => onFiltersChange({ ...filters, category })}
          renderOption={(cat) => getCategoryLabel(cat)}
        />
      </FilterGroup>
      
      {/* 应用场景 */}
      <FilterGroup title="应用场景">
        <CheckboxGroup
          options={Object.values(ApplicationArea)}
          selected={filters.applications || []}
          onChange={(applications) => onFiltersChange({ ...filters, applications })}
          renderOption={(app) => getApplicationLabel(app)}
        />
      </FilterGroup>
      
      {/* 技术参数范围 */}
      <FilterGroup title="波长范围">
        <RangeSlider
          min={400}
          max={1200}
          step={10}
          value={filters.wavelengthRange || [515, 1200]}
          onChange={(wavelengthRange) => onFiltersChange({ ...filters, wavelengthRange })}
          formatValue={(value) => `${value}nm`}
        />
      </FilterGroup>
      
      {/* 认证标准 */}
      <FilterGroup title="认证标准">
        <CheckboxGroup
          options={Object.keys(CERTIFICATIONS)}
          selected={filters.certifications || []}
          onChange={(certifications) => onFiltersChange({ ...filters, certifications })}
          renderOption={(cert) => CERTIFICATIONS[cert].name}
        />
      </FilterGroup>
    </div>
  );
};
```

## 数据获取和管理

### API接口
```typescript
// 获取产品列表
export async function getProducts(params: ProductSearchParams): Promise<{
  products: IPLProduct[];
  total: number;
  page: number;
  totalPages: number;
}> {
  const searchParams = new URLSearchParams();
  
  if (params.query) searchParams.set('q', params.query);
  if (params.sortBy) searchParams.set('sort', params.sortBy);
  if (params.sortOrder) searchParams.set('order', params.sortOrder);
  if (params.page) searchParams.set('page', params.page.toString());
  if (params.limit) searchParams.set('limit', params.limit.toString());
  
  // 添加筛选参数
  if (params.filters) {
    Object.entries(params.filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, v));
      } else if (value) {
        searchParams.set(key, value.toString());
      }
    });
  }
  
  const response = await fetch(`/api/products?${searchParams}`);
  return response.json();
}

// 获取单个产品
export async function getProduct(slug: string): Promise<IPLProduct | null> {
  const response = await fetch(`/api/products/${slug}`);
  if (!response.ok) return null;
  return response.json();
}

// 获取相关产品
export async function getRelatedProducts(
  productId: string, 
  limit = 4
): Promise<IPLProduct[]> {
  const response = await fetch(`/api/products/${productId}/related?limit=${limit}`);
  return response.json();
}
```

### 状态管理
```typescript
// 使用 Zustand 进行状态管理
interface ProductStore {
  products: IPLProduct[];
  filters: ProductFilters;
  searchQuery: string;
  loading: boolean;
  error: string | null;
  
  // Actions
  setProducts: (products: IPLProduct[]) => void;
  setFilters: (filters: ProductFilters) => void;
  setSearchQuery: (query: string) => void;
  searchProducts: (params: ProductSearchParams) => Promise<void>;
  clearFilters: () => void;
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filters: {},
  searchQuery: '',
  loading: false,
  error: null,
  
  setProducts: (products) => set({ products }),
  setFilters: (filters) => set({ filters }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  
  searchProducts: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await getProducts(params);
      set({ products: result.products, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  clearFilters: () => set({ filters: {} })
}));
```

---

**实现要点**:
1. **类型安全**: 完整的TypeScript类型定义
2. **数据规范**: 标准化的产品数据结构
3. **组件复用**: 模块化的展示组件
4. **性能优化**: 懒加载和虚拟滚动
5. **用户体验**: 直观的筛选和比较功能