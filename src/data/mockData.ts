// =============================================================================
// DIT Portfolio — Site Content
// =============================================================================
// Edit this file to update all text, data, and links across the portfolio.
// No component code changes required.
// =============================================================================

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface NavData {
  readonly brandName: string;
  readonly links: readonly NavLink[];
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export type SocialPlatform = 'Instagram' | 'Vimeo' | 'LinkedIn';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly href: string;
  readonly ariaLabel: string;
}

export interface FooterData {
  readonly copyright: string;
  readonly socialLinks: readonly SocialLink[];
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export interface HeroData {
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  readonly primaryCtaLabel: string;
  readonly primaryCtaHref: string;
  readonly secondaryCtaLabel: string;
  readonly secondaryCtaHref: string;
  readonly backgroundImageUrl: string;
  readonly backgroundImageAlt: string;
}

export interface SpecItem {
  readonly label: string;
  readonly value: string;
}

export interface SpecsStripData {
  readonly items: readonly SpecItem[];
  readonly trailing: string;
}

export interface ServicesTeaserItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export interface ServicesTeaserData {
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  readonly items: readonly ServicesTeaserItem[];
}

export interface FeaturedProject {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly role: string;
  readonly imageUrl: string;
  readonly href: string;
}

export interface FeaturedProjectsData {
  readonly sectionLabel: string;
  readonly projects: readonly FeaturedProject[];
}

// ─── Services Page ────────────────────────────────────────────────────────────

export interface ServiceTool {
  readonly name: string;
}

export interface ServiceSpec {
  readonly key: string;
  readonly value: string;
}

export interface ServiceDetail {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly tools: readonly ServiceTool[];
  readonly specs: readonly ServiceSpec[];
}

export interface ServicesPageData {
  readonly eyebrow: string;
  readonly headline: string;
  readonly services: readonly ServiceDetail[];
  readonly footerCtaLabel: string;
  readonly footerCtaHref: string;
}

// ─── Projects Page ────────────────────────────────────────────────────────────

export type ProjectCategory = 'Narrative' | 'Commercial' | 'Documentary' | 'Short Film' | 'Brand Film';

export interface ProjectDetail {
  readonly id: string;
  readonly title: string;
  readonly category: ProjectCategory;
  readonly year: string;
  readonly camera: string;
  readonly lens: string;
  readonly format: string;
  readonly imageUrl: string;
  readonly href: string;
}

export interface FilterTab {
  readonly id: string;
  readonly label: string;
}

export interface TechnicalStandard {
  readonly label: string;
  readonly value: string;
}

export interface ProjectsPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly filterTabs: readonly FilterTab[];
  readonly projects: readonly ProjectDetail[];
  readonly technicalStandards: readonly TechnicalStandard[];
  readonly footerCtaPortfolioLabel: string;
  readonly footerCtaContactLabel: string;
  readonly footerCtaPortfolioHref: string;
  readonly footerCtaContactHref: string;
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export type ProjectType =
  | 'COMMERCIAL PRODUCTION'
  | 'FEATURE FILM'
  | 'COLOR PIPELINE CONSULTANCY'
  | 'ON-SET DIT SERVICES';

export interface ContactInfoItem {
  readonly label: string;
  readonly value: string;
}

export interface ContactPageData {
  readonly heroEyebrow: string;
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly formLabels: {
    readonly fullName: string;
    readonly email: string;
    readonly projectType: string;
    readonly inquiryDetails: string;
    readonly submitButton: string;
  };
  readonly projectTypes: readonly ProjectType[];
  readonly infoPanel: readonly ContactInfoItem[];
  readonly coordinates: {
    readonly lat: string;
    readonly lng: string;
  };
}

// ─── Root Site Data ───────────────────────────────────────────────────────────

export interface SiteData {
  readonly nav: NavData;
  readonly footer: FooterData;
  readonly home: {
    readonly hero: HeroData;
    readonly specsStrip: SpecsStripData;
    readonly servicesTeaser: ServicesTeaserData;
    readonly featuredProjects: FeaturedProjectsData;
  };
  readonly services: ServicesPageData;
  readonly projects: ProjectsPageData;
  readonly contact: ContactPageData;
}

// =============================================================================
// SITE CONTENT — Edit below to update your portfolio
// =============================================================================

export const siteData: SiteData = {
  nav: {
    brandName: 'WES SMIT',
    links: [
      { label: 'HOME',     href: '/' },
      { label: 'PROJECTS', href: '/projects' },
      { label: 'SERVICES', href: '/services' },
      { label: 'CONTACT',  href: '/contact' },
    ],
    ctaLabel: 'GET IN TOUCH',
    ctaHref:  '/contact',
  },

  footer: {
    copyright: '© 2024 WES SMIT. ALL RIGHTS RESERVED.',
    socialLinks: [
      { platform: 'Instagram', href: 'https://instagram.com/', ariaLabel: 'Instagram' },
      { platform: 'Vimeo',     href: 'https://vimeo.com/',     ariaLabel: 'Vimeo' },
      { platform: 'LinkedIn',  href: 'https://linkedin.com/',  ariaLabel: 'LinkedIn' },
    ],
  },

  home: {
    hero: {
      eyebrow:             'Digital Imaging Excellence',
      headline:            'Enhance Your Production',
      body:                'Elevating cinematic narratives through rigorous data management and advanced color science. Bridging the gap between creative vision and technical execution on the highest-stakes productions.',
      primaryCtaLabel:     'SERVICES',
      primaryCtaHref:      '/services',
      secondaryCtaLabel:   'CONTACT',
      secondaryCtaHref:    '/contact',
      backgroundImageUrl:  '/hero.jpg',
      backgroundImageAlt:  'Cinema camera on a sandy film set with camouflage netting and equipment',
    },
    specsStrip: {
      items: [
        { label: 'RESOLUTION', value: '4.6K Open Gate' },
        { label: 'CODEC',      value: 'ARRIRAW / ProRes 4444 XQ' },
        { label: 'GRADING',    value: 'Live Color Grading' },
        { label: 'PIPELINE',   value: 'Workflow Architecture' },
      ],
      trailing: 'Live Color Grading & Workflow Architecture',
    },
    servicesTeaser: {
      eyebrow:  'Vision and Fidelity',
      headline: 'TECHNICAL PRECISION',
      body:     'The modern digital negative demands more than just storage; it requires a deep understanding of sensor physics and color pipeline integrity. Every frame treated as a masterwork.',
      items: [
        {
          number:      '01',
          title:       'ON-SET COLOR',
          description: 'Real-time HDR grading and exposure monitoring to lock in the look before the camera wraps.',
          href:        '/services',
        },
        {
          number:      '02',
          title:       'DATA ARCHITECTURE',
          description: 'Triple-redundant LTO-9 archival and secure high-speed dailies delivery for global workflows.',
          href:        '/services',
        },
      ],
    },
    featuredProjects: {
      sectionLabel: 'SELECTED WORKS',
      projects: [
        {
          id:       'noir-city',
          title:    'NOIR CITY',
          category: 'Feature Film',
          role:     'Color Management',
          imageUrl: '',
          href:     '/projects',
        },
        {
          id:       'monolith',
          title:    'MONOLITH',
          category: 'Commercial',
          role:     'DIT Services',
          imageUrl: '',
          href:     '/projects',
        },
        {
          id:       'prism',
          title:    'PRISM',
          category: 'Short Film',
          role:     'Workflow Design',
          imageUrl: '',
          href:     '/projects',
        },
        {
          id:       'island-of-silence',
          title:    'ISLAND OF SILENCE',
          category: 'Documentary',
          role:     'Raw Pipeline',
          imageUrl: '',
          href:     '/projects',
        },
      ],
    },
  },

  services: {
    eyebrow:         'Technical Services',
    headline:        'THE TOOLKIT',
    footerCtaLabel:  'REQUEST TECHNICAL SPECS',
    footerCtaHref:   '/contact',
    services: [
      {
        id:          'live-grading',
        number:      '01',
        title:       'Live Grading',
        description: 'Real-time color manipulation and look development on-set using calibrated reference monitoring. CDL-based workflow for seamless handoff to post.',
        tools: [
          { name: 'Pomfort LiveGrade Studio' },
          { name: 'Flanders Scientific XM310K' },
          { name: 'Blackmagic Teranex Mini' },
        ],
        specs: [
          { key: 'COLOR SPACE', value: 'ACES / LogC3 / LogC4' },
          { key: 'CALIBRATION', value: 'Calman Ultimate' },
          { key: 'LUT FORMAT',  value: '.cube 33pt' },
        ],
      },
      {
        id:          'data-management',
        number:      '02',
        title:       'Data Management',
        description: 'Secure, high-speed offloading with checksum verification at every stage. Triple-redundant backup strategy with RAID and LTO tape archival.',
        tools: [
          { name: 'ShotPut Pro' },
          { name: 'Silverstack' },
          { name: 'Enterprise RAID 5/6' },
          { name: 'LTO-9 Archival' },
        ],
        specs: [
          { key: 'THROUGHPUT', value: 'Up to 3.6 GB/s' },
          { key: 'CHECKSUM',   value: 'MD5 / xxHash' },
          { key: 'REDUNDANCY', value: '3:2:1 Strategy' },
        ],
      },
      {
        id:          'dailies-transcoding',
        number:      '03',
        title:       'Dailies Transcoding',
        description: 'Next-day editorial and review file delivery with perfect sync. Full color pipeline from camera original to viewer-ready dailies.',
        tools: [
          { name: 'DaVinci Resolve Studio' },
          { name: 'Mac Studio M2 Ultra' },
        ],
        specs: [
          { key: 'OUTPUT',   value: 'ProRes 4444 / DNxHR' },
          { key: 'DELIVERY', value: 'Aspera / Frame.io' },
          { key: 'SYNC',     value: 'Tentacle Sync' },
        ],
      },
      {
        id:          'signal-distribution',
        number:      '04',
        title:       'Signal Distribution',
        description: 'Comprehensive video village architecture with wireless zero-latency 4K distribution and calibrated monitor deployment.',
        tools: [
          { name: 'Teradek Bolt 4K' },
          { name: 'SmallHD Displays' },
          { name: 'qTake' },
          { name: 'Teradek Core' },
        ],
        specs: [
          { key: 'LATENCY', value: '< 1ms zero-delay' },
          { key: 'RANGE',   value: 'Up to 1500ft' },
          { key: 'CLOUD',   value: 'Remote streaming' },
        ],
      },
    ],
  },

  projects: {
    heroHeadline:    'Visual Precision.',
    heroSubheadline: 'Selected Works 2022—2024',
    filterTabs: [
      { id: 'all',        label: 'All Work' },
      { id: 'Narrative',  label: 'Narrative' },
      { id: 'Commercial', label: 'Commercial' },
    ],
    projects: [
      {
        id:       'vanguard',
        title:    'VANGUARD: NEON DRIFT',
        category: 'Narrative',
        year:     '2024',
        camera:   'ARRI ALEXA 35',
        lens:     'Cooke S8/i',
        format:   'ARRIRAW 4.6K',
        imageUrl: '',
        href:     '#',
      },
      {
        id:       'silence-of-the-dunes',
        title:    'SILENCE OF THE DUNES',
        category: 'Short Film',
        year:     '2023',
        camera:   'ARRI ALEXA LF',
        lens:     'Angénieux Optimo',
        format:   'ProRes 4444 XQ',
        imageUrl: '',
        href:     '#',
      },
      {
        id:       'monolith',
        title:    'MONOLITH',
        category: 'Commercial',
        year:     '2023',
        camera:   'Sony VENICE 2',
        lens:     'Zeiss Supreme',
        format:   'X-OCN XT 8.6K',
        imageUrl: '',
        href:     '#',
      },
      {
        id:       'analog-echoes',
        title:    'ANALOG ECHOES',
        category: 'Documentary',
        year:     '2022',
        camera:   'RED MONSTRO',
        lens:     'Leica Summilux',
        format:   'REDCODE 8K',
        imageUrl: '',
        href:     '#',
      },
      {
        id:       'prism-theory',
        title:    'PRISM THEORY',
        category: 'Brand Film',
        year:     '2023',
        camera:   'ARRI ALEXA 35',
        lens:     'Cooke Anamorphic',
        format:   'ARRIRAW 4.6K',
        imageUrl: '',
        href:     '#',
      },
      {
        id:       'cold-peaks',
        title:    'COLD PEAKS',
        category: 'Narrative',
        year:     '2022',
        camera:   'Sony VENICE',
        lens:     'Kowa Anamorphic',
        format:   'X-OCN LT 6K',
        imageUrl: '',
        href:     '#',
      },
    ],
    technicalStandards: [
      { label: 'COLOR SCIENCE',     value: 'ACES v1.3' },
      { label: 'DISPLAY TRANSFORM', value: 'P3-D65' },
      { label: 'LUT FORMAT',        value: '.cube 33pt' },
    ],
    footerCtaPortfolioLabel: 'Request Portfolio PDF',
    footerCtaContactLabel:   'Contact Studio',
    footerCtaPortfolioHref:  '#',
    footerCtaContactHref:    '/contact',
  },

  contact: {
    heroEyebrow:     'AVAILABLE FOR WORLDWIDE ASSIGNMENTS',
    heroHeadline:    "LET'S CONNECT",
    heroSubheadline: 'Technical precision meets creative vision.',
    formLabels: {
      fullName:       'Full Name',
      email:          'Email Address',
      projectType:    'Project Type',
      inquiryDetails: 'Inquiry Details',
      submitButton:   'SEND MESSAGE',
    },
    projectTypes: [
      'COMMERCIAL PRODUCTION',
      'FEATURE FILM',
      'COLOR PIPELINE CONSULTANCY',
      'ON-SET DIT SERVICES',
    ],
    infoPanel: [
      { label: 'BASES',         value: 'BERLIN // LONDON // TOKYO' },
      { label: 'RESPONSE TIME', value: '< 12 HOURS' },
      { label: 'ENCRYPTION',    value: 'AES-256' },
    ],
    coordinates: {
      lat: '52.5200° N',
      lng: '13.4050° E',
    },
  },
};
