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

export type ProjectCategory = 'Feature Film' | 'TV Series' | 'Netflix Series' | 'Commercial' | 'Reality';

export interface ProjectDetail {
  readonly id: string;
  readonly title: string;
  readonly category: ProjectCategory;
  readonly year: string;
  readonly productionCompany: string;
  readonly dop: string;
  readonly role: string;
  readonly imageUrl: string;
  readonly href: string;
}

export interface TechnicalStandard {
  readonly label: string;
  readonly value: string;
}

export interface ProjectsPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
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
    heroSubheadline: 'Selected Works 2022—2026',
    projects: [
      // ── 2025/2026 ──────────────────────────────────────────────────────────
      {
        id:                'invisible-s1',
        title:             'INVISIBLE S1',
        category:          'TV Series',
        year:              '2025/2026',
        productionCompany: 'scene 23 - iTV',
        dop:               'Jorrie van der Walt',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'average-joe-s2',
        title:             'AVERAGE JOE S2',
        category:          'TV Series',
        year:              '2025',
        productionCompany: 'Advantage Entertainment',
        dop:               'Scott Peck',
        role:              '2nd Unit Data Wrangler',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'wild-free-italy',
        title:             'WILD & FREE ITALY',
        category:          'Reality',
        year:              '2025',
        productionCompany: 'Casta Diva Prod',
        dop:               '',
        role:              'DIT Night Shift',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'julia-vs-joey-germany',
        title:             'JULIA VS JOEY GERMANY',
        category:          'Reality',
        year:              '2025',
        productionCompany: 'Bildergarten - iTV',
        dop:               '',
        role:              'Data Wrangler',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'retribution-s1',
        title:             'RETRIBUTION S1',
        category:          'Netflix Series',
        year:              '2025',
        productionCompany: 'Stained Glass',
        dop:               'Fahema Hendricks SASC',
        role:              'Dailies DIT',
        imageUrl:          '',
        href:              '#',
      },
      // ── 2024 ───────────────────────────────────────────────────────────────
      {
        id:                'london-calling',
        title:             'LONDON CALLING',
        category:          'Feature Film',
        year:              '2024',
        productionCompany: 'Mannequin Films',
        dop:               'Alexander Chinnici',
        role:              'Data Wrangler',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'sabbatical',
        title:             'SABBATICAL',
        category:          'Feature Film',
        year:              '2024',
        productionCompany: 'Diprente',
        dop:               'Motheo Moeng SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'kites',
        title:             'KITES',
        category:          'Feature Film',
        year:              '2024',
        productionCompany: 'Weldun Productions',
        dop:               'Gavin Sterly',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'marked-s1',
        title:             'MARKED S1',
        category:          'Netflix Series',
        year:              '2024',
        productionCompany: 'Quizzical',
        dop:               'Fahema Hendricks SASC',
        role:              'Data Wrangler (Action Unit)',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'bad-influencer-s1',
        title:             'BAD INFLUENCER S1',
        category:          'Netflix Series',
        year:              '2024',
        productionCompany: 'Gambit Films',
        dop:               'Rick Joaquim SASC',
        role:              'Data Wrangler',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'shaka-illembe-s2',
        title:             'SHAKA ILLEMBE S2',
        category:          'TV Series',
        year:              '2024',
        productionCompany: 'Bomb Productions',
        dop:               'Zeno Peterson SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'station-strangler',
        title:             'STATION STRANGLER',
        category:          'TV Series',
        year:              '2024',
        productionCompany: 'Idea Candy',
        dop:               'Fred Wollenar',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      // ── 2023 ───────────────────────────────────────────────────────────────
      {
        id:                'love-my-selfie',
        title:             'LOVE MY SELFIE',
        category:          'Feature Film',
        year:              '2023',
        productionCompany: 'Advantage Entertainment',
        dop:               'Trevor Brown SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'devils-peak',
        title:             'DEVILS PEAK',
        category:          'TV Series',
        year:              '2023',
        productionCompany: 'AFS Productions',
        dop:               'Sunel Haasbroek',
        role:              'Data Wrangler (Splinter Unit)',
        imageUrl:          '',
        href:              '#',
      },
      // ── 2022 ───────────────────────────────────────────────────────────────
      {
        id:                'mtv-power-games',
        title:             'MTV POWER GAMES',
        category:          'TV Series',
        year:              '2022',
        productionCompany: 'AFS Productions',
        dop:               '',
        role:              'Camera Assistant',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'die-groenste-vingers',
        title:             'DIE GROENSTE VINGERS',
        category:          'TV Series',
        year:              '2022',
        productionCompany: 'Phly Media',
        dop:               '',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },

      // ── COMMERCIALS ────────────────────────────────────────────────────────
      // 2026
      {
        id:                'the-north-face',
        title:             'THE NORTH FACE',
        category:          'Commercial',
        year:              '2026',
        productionCompany: 'Bouch Creative',
        dop:               'Jason Prins',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'white-star',
        title:             'WHITE STAR',
        category:          'Commercial',
        year:              '2026',
        productionCompany: 'Fort',
        dop:               "Rory O'Grady",
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'ysl',
        title:             'YSL',
        category:          'Commercial',
        year:              '2026',
        productionCompany: 'Moonlighting Commercials',
        dop:               'Cyan Mariani',
        role:              '2nd Unit DIT',
        imageUrl:          '',
        href:              '#',
      },
      // 2025
      {
        id:                'debenhams-high-summer',
        title:             'DEBENHAMS HIGH SUMMER',
        category:          'Commercial',
        year:              '2025',
        productionCompany: 'WeAreHumaine',
        dop:               'Chris Joubert',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      // 2024
      {
        id:                'mtn',
        title:             'MTN',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Darling Films',
        dop:               'Brandon Blight',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'mpondoland-teaser',
        title:             'MPONDOLAND TEASER',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'PopGun Pictures',
        dop:               '',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'tyla-south-africa',
        title:             'TYLA LIVE SHOW CONTENT',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Tyla Records (Pty) Ltd',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'tyla-coachella',
        title:             'TYLA LIVE — COACHELLA 2025',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Tyla Records (Pty) Ltd',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'caplyta',
        title:             'CAPLYTA',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'AFS Productions',
        dop:               'Josh Rowe',
        role:              '2nd Unit Data Wrangler',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'indrive',
        title:             'INDRIVE',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Red Petal Productions',
        dop:               'James Adey SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'kfc-kentucky-town',
        title:             'KFC — KENTUCKY TOWN',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Gentlemen Films',
        dop:               'Willie Nel SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'mcdonalds',
        title:             'MCDONALDS',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Crater House',
        dop:               'Adam Vinokur',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'sunlight',
        title:             'SUNLIGHT',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Love Films',
        dop:               'Adam Vinokur',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'hollywood-bets-super-gogo',
        title:             'HOLLYWOOD BETS — SUPER GOGO',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Cake Prod.',
        dop:               'James Adey SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'black-mambas-castrol',
        title:             'BLACK MAMBAS — CASTROL',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Cake Prod.',
        dop:               'Johan Vorster',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'olympics-interviews',
        title:             'OLYMPICS INTERVIEWS',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Afropulse Media',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'hyundai-promise',
        title:             'HYUNDAI PROMISE',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Team Best',
        dop:               'Tom Marias SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'spar-tops',
        title:             'SPAR TOPS',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Love Films',
        dop:               'Motheo Moeng SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'wimpy-internal',
        title:             'WIMPY INTERNAL',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Cake Prod.',
        dop:               'Adam Vinokur',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'loreal',
        title:             "L'OREAL",
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Alt Studios',
        dop:               'Motheo Moeng SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'savannah',
        title:             'SAVANNAH',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Red Hot Ops',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'flying-fish',
        title:             'FLYING FISH',
        category:          'Commercial',
        year:              '2024',
        productionCompany: 'Red Hot Ops',
        dop:               '',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      // 2023
      {
        id:                'maxhosa-fashion-film',
        title:             'MAXHOSA FASHION FILM',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Star Films',
        dop:               'Natalie Harhoff SASC',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'bernini',
        title:             'BERNINI',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Star Films',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'dstv-playroom',
        title:             'DSTV PLAYROOM',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Triple Story Content',
        dop:               '',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'peaceful-sleep',
        title:             'PEACEFUL SLEEP',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Gentlemen Films',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'gilette',
        title:             'GILETTE',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'InCommon Productions',
        dop:               'Diego Ollivier',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'hippo-month-enders',
        title:             'HIPPO MONTH ENDERS',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Team Best',
        dop:               'Gavin Pincus',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'african-bank',
        title:             'AFRICAN BANK',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Seriti',
        dop:               'Bradley Devine',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'supersport-rugby-world-cup',
        title:             'SUPERSPORT RUGBY WORLD CUP',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'T+W Productions',
        dop:               'Gavin Pincus',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'shield-womens-world-cup',
        title:             'SHIELD — WOMENS WORLD CUP',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'V2 Productions',
        dop:               '',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'vw-night-school',
        title:             'VW NIGHT SCHOOL',
        category:          'Commercial',
        year:              '2023',
        productionCompany: 'Run Jump Fly Creations',
        dop:               'Christian Wolf',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      // 2022
      {
        id:                'shelflife-x-nike',
        title:             'SHELFLIFE X NIKE',
        category:          'Commercial',
        year:              '2022',
        productionCompany: 'Arcade Content',
        dop:               'Kabeer Shaik',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
      },
      {
        id:                'liberty-life',
        title:             'LIBERTY LIFE',
        category:          'Commercial',
        year:              '2022',
        productionCompany: '10th Street Media',
        dop:               'Morne Pelser',
        role:              'DIT',
        imageUrl:          '',
        href:              '#',
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
