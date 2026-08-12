export interface Language {
  code: string;
  name: string;
  flag: string;
  hreflang: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🌐', hreflang: 'en' },
  { code: 'zh-hk', name: '繁體中文', flag: '🇭🇰', hreflang: 'zh-HK' },
  { code: 'zh-cn', name: '简体中文', flag: '🇨🇳', hreflang: 'zh-CN' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾', hreflang: 'ms' }
];

export const defaultLang = 'en';

export const i18nNav = {
  en: {
    calculators: 'Calculators',
    guides: 'Guides',
    countries: 'Countries',
    compare: 'Compare Tax',
    search: 'Search',
    language: 'Language'
  },
  'zh-hk': {
    calculators: '稅務計算器',
    guides: '指南與文章',
    countries: '國家與地區',
    compare: '稅制對比',
    search: '搜尋',
    language: '語言'
  },
  'zh-cn': {
    calculators: '税务计算器',
    guides: '指南与文章',
    countries: '国家与地区',
    compare: '税制对比',
    search: '搜索',
    language: '语言'
  },
  ms: {
    calculators: 'Kalkulator Cukai',
    guides: 'Panduan',
    countries: 'Negara',
    compare: 'Banding Cukai',
    search: 'Cari',
    language: 'Bahasa'
  }
};
