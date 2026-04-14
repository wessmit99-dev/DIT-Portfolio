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

export interface ToolsGridItem {
  readonly name: string;
  readonly logoUrl?: string;
}

export interface ToolsGridData {
  readonly items: readonly ToolsGridItem[];
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
  readonly imageUrl?: string;
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

export interface AgentData {
  readonly name: string;
  readonly agency: string;
  readonly territory: string;
  readonly email: string;
  readonly secondEmail: string;
  readonly phone: string;
  readonly logoUrl: string;
  readonly website: string;
}

export interface GearPartnerData {
  readonly name: string;
  readonly description: string;
  readonly email: string;
  readonly phone: string;
  readonly website: string;
  readonly logoUrl: string;
}

export interface ContactPageData {
  readonly heroEyebrow: string;
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly email: string;
  readonly phone: string;
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
  readonly agents: readonly AgentData[];
  readonly gearPartner: GearPartnerData;
}

// ─── Gallery Page ─────────────────────────────────────────────────────────────

export interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}

export interface GalleryPageData {
  readonly heroHeadline: string;
  readonly heroSubheadline: string;
  readonly images: readonly GalleryImage[];
}

// ─── Root Site Data ───────────────────────────────────────────────────────────

export interface SiteData {
  readonly nav: NavData;
  readonly footer: FooterData;
  readonly home: {
    readonly hero: HeroData;
    readonly toolsGrid: ToolsGridData;
  };
  readonly services: ServicesPageData;
  readonly projects: ProjectsPageData;
  readonly contact: ContactPageData;
  readonly gallery: GalleryPageData;
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
      { label: 'GALLERY',  href: '/gallery' },
      { label: 'CONTACT',  href: '/contact' },
    ],
    ctaLabel: 'GET IN TOUCH',
    ctaHref:  '/contact',
  },

  footer: {
    copyright: '© 2024 WES SMIT. ALL RIGHTS RESERVED.',
    socialLinks: [
      { platform: 'Instagram', href: 'https://instagram.com/wes.smit', ariaLabel: 'Instagram' },
      { platform: 'LinkedIn',  href: 'https://www.linkedin.com/in/wesley-smit/',  ariaLabel: 'LinkedIn' },
    ],
  },

  home: {
    hero: {
      eyebrow:             'Digital Imaging Technician',
      headline:            'Enhance Your Production',
      body:                'Elevating cinematic narratives through rigorous data management and advanced color science. Bridging the gap between creative vision and technical execution on the highest-stakes productions.',
      primaryCtaLabel:     'SERVICES',
      primaryCtaHref:      '/services',
      secondaryCtaLabel:   'CONTACT',
      secondaryCtaHref:    '/contact',
      backgroundImageUrl:  '/hero.jpg',
      backgroundImageAlt:  'Cinema camera on a sandy film set with camouflage netting and equipment',
    },
    toolsGrid: {
      items: [
        { name: 'Pomfort LiveGrade',   logoUrl: '/icons/pomfort-livegrade.png' },
        { name: 'Pomfort Silverstack', logoUrl: '/icons/pomfort-silverstack.png' },
        { name: 'Pomfort ReelTime',    logoUrl: '/icons/pomfort-reeltime.png' },
        { name: 'DaVinci Resolve',     logoUrl: '/icons/DaVinci.png' },
        { name: 'Nobe Omniscope',      logoUrl: '/icons/nobe.png' },
        { name: 'CameraKit',           logoUrl: '/icons/camerakit.png' },
        { name: 'LensKit',             logoUrl: '/icons/lenskit.png' },
        { name: 'Arri Companion',      logoUrl: '/icons/arri.png' },
        { name: 'Disk Catalog Maker',  logoUrl: '/icons/disk.png' },
        { name: 'Parashoot',           logoUrl: '/icons/parashoot.png' },
      ],
    },
  },

  services: {
    eyebrow:         '',
    headline:        'Technical Services.',
    footerCtaLabel:  'REQUEST TECHNICAL SPECS',
    footerCtaHref:   '/contact',
    services: [
      {
        id:          'live-grading',
        number:      '01',
        title:       'Live Grading',
        imageUrl:    '/livegrade.png',
        description: 'Real-time color manipulation and look development on-set using calibrated reference monitoring. CDL-based workflow for seamless handoff to post.',
        tools: [
          { name: 'Pomfort LiveGrade Studio' },
          { name: 'Flanders Scientific' },
          { name: 'CDL' },
        ],
        specs: [
          { key: 'COLOR SPACE', value: 'ACES / LogC3 / LogC4' },
          { key: 'CALIBRATION', value: 'Calman Ultimate' },
          { key: 'LUT FORMAT',  value: '.cube 33pt' },
        ],
      },
      {
        id:          'on-set-workflow-management',
        number:      '02',
        title:       'On Set Workflow Management',
        imageUrl:    '/on set workflow.JPG',
        description: 'End-to-end coordination of on-set data, color, and media pipeline — from camera offload to editorial handoff. Ensuring every department stays in sync and nothing falls through the cracks.',
        tools: [
          { name: 'Pomfort Silverstack' },
          { name: 'DaVinci Resolve' },
          { name: 'Nobe Omniscope' },
        ],
        specs: [
          { key: 'OFFLOAD',  value: 'Dual-destination verified copy' },
          { key: 'REPORTS',  value: 'Per-card camera & sound reports' },
          { key: 'HANDOFF',  value: 'Editorial-ready folder structure' },
        ],
      },
      {
        id:          'on-set-qc',
        number:      '03',
        title:       'On Set QC',
        imageUrl:    '/QC.webp',
        description: 'Rigorous image quality control on set — monitoring exposure, focus, noise, and codec integrity in real time to protect the image before it leaves the camera.',
        tools: [
          { name: 'Flanders Scientific' },
          { name: 'Pomfort Silverstack' },
          { name: 'Nobe Omniscope' },
        ],
        specs: [
          { key: 'MONITORING', value: 'Real-time HDR reference' },
          { key: 'FORMATS',    value: 'RAW / LOG / SDR / HDR' },
          { key: 'REPORTING',  value: 'Per-take QC logs' },
        ],
      },
      {
        id:          'data-management',
        number:      '04',
        title:       'Data Management',
        imageUrl:    '/data.jpg',
        description: 'Secure, high-speed offloading with checksum verification at every stage. Triple-redundant backup strategy with DIT RAID and on-set shuttle drives. Detailed reports tailored to surface the information post needs most.',
        tools: [
          { name: 'Pomfort Silverstack' },
        ],
        specs: [
          { key: 'THROUGHPUT', value: 'Up to 3.6 GB/s' },
          { key: 'CHECKSUM',   value: 'MD5 / xxHash' },
          { key: 'REDUNDANCY', value: '3:2:1 Strategy' },
        ],
      },
    ],
  },

  projects: {
    heroHeadline:    'Projects.',
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
    heroHeadline:    "Let's Connect.",
    heroSubheadline: 'Technical precision meets creative vision.',
    email:           'wes@monstrum.co.za',
    phone:           '083 285 4258',
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
    agents: [
      {
        name:      'Exposure Crew',
        agency:    '',
        territory: 'JOHANNESBURG',
        email:     'Daphne@exposurecrew.tv',
        secondEmail: '',
        phone:     '083 218 0859',
        logoUrl:   '/logos/exposure-crew.png',
        website:   'https://www.exposurecrew.tv/',
      },
      {
        name:      'Star Film Crew',
        agency:    '',
        territory: 'CAPE TOWN',
        email:     'angelica@starfilmcrew.co.za',
        secondEmail: 'mel@starfilmcrew.co.za',
        phone:     '076 980 2160',
        logoUrl:   '/logos/star-crew.png',
        website:   'https://starfilmcrew.co.za/#!/up',
      },
    ],
    gearPartner: {
      name:        'Monstrum Digital',
      description: '',
      email:       'kirsty@monstrum.co.za',
      phone:       '076 676 2519',
      website:     'https://www.monstrum.co.za/',
      logoUrl:     '/logos/Monstrum.webp',
    },
  },

  gallery: {
    heroHeadline:    'Behind The Scenes.',
    heroSubheadline: 'On-set stills from production.',
    images: [
      { id: '1', src: '/gallery/IMG_9196.jpg', alt: 'On-set crew in rain-drenched alley with atmospheric backlight' },
    ],
  },
};
