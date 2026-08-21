export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface TopBarData {
  address: string;
  phone: string;
  workingHours: string;
  socialLinks: SocialLink[];
}

export interface HeaderData {
  image?: string;
  logoText?: string;
  logoSubText?: string;
  navLinks: {
    label: string;
    url: string;
    dropdown?: boolean;
  }[];
  contactButton: string;
  consultButton: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export interface HeroData {
  slides: HeroSlide[];
}

export interface AboutFeature {
  id: string;
  icon?: string;
  text: string;
}

export interface AboutTab {
  id: string;
  title: string;
  content: string;
}

export interface AboutUsData {
  badge: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  badgeText: string;
  tabs: AboutTab[];
  features: AboutFeature[];
  buttonText: string;
  buttonUrl: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  slug?: string;
  overviewTitle?: string;
  overviewText?: string;
  image?: string;
  areasCovered?: { id: string; title: string; text: string; icon: string }[];
  resources?: { id: string; title: string; url: string; icon: string }[];
  contactBanner?: { title: string; description: string; phone: string; buttonText: string; buttonUrl: string };
}

export interface ServicesData {
  badge: string;
  title: string;
  description: string;
  bgImage: string;
  items: ServiceItem[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  subtitle: string;
  introText: string;
  overviewHtml: string;
  overviewImage: string;
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  approach: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  matters: string[];
}

export interface IndustriesData {
  badge: string;
  title: string;
  subtitle: string;
  items: IndustryItem[];
}

export interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessData {
  badge: string;
  title: string;
  subtitle: string;
  description?: string;
  steps: ProcessStep[];
}

export interface TeamMember {
  id: string;
  slug: string;
  image: string;
  name: string;
  role: string;
  description: string;
  detailDescription?: string;
  experience?: string;
  phone?: string;
  email?: string;
  location?: string;
  socials: SocialLink[];
  skills?: { name: string; percent: number }[];
  experienceTimeline?: { id: string; period: string; role: string; company: string; description: string }[];
  education?: { id: string; university: string; certificate: string; year: string; logo: string }[];
}

export interface TeamData {
  badge: string;
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface CounterStat {
  id: string;
  icon: string;
  number: string;
  label: string;
}

export interface CounterData {
  stats: CounterStat[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export interface TestimonialsData {
  badge: string;
  title: string;
  items: TestimonialItem[];
}

export interface BlogItem {
  id: string;
  image: string;
  author: string;
  authorImage?: string;
  date: string;
  comments?: string;
  title: string;
  excerpt: string;
  linkText: string;
  linkUrl?: string;
}

export interface BlogsData {
  badge: string;
  title: string;
  items: BlogItem[];
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: NavLink[];
}

export interface FooterData {
  image?: string;
  logoText: string;
  logoSubText: string;
  aboutText: string;
  aboutBullets: {
    icon: string;
    text: string;
  }[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  linkGroups: FooterLinkGroup[];
  newsletterTitle: string;
  newsletterText: string;
  consultation: {
    title: string;
    buttonText: string;
  };
  awards: {
    text1: string;
    text2: string;
  };
  copyright: string;
  bottomLinks: NavLink[];
}

export interface BreadcrumbData {
  title: string;
  paths: { label: string; url?: string }[];
  bgImage: string;
}

export interface AboutFirmData {
  badge: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image1: string;
  image2: string;
  image3: string;
  badgeText: string;
}

export interface AboutWhyChooseUsData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  points: { id: string; icon: string; title: string; text: string }[];
  buttonText: string;
  buttonUrl: string;
  image: string;
}

export interface AboutMissionData {
  badge: string;
  title: string;
  description: string;
  items: { id: string; icon: string; title: string; text: string; bgImage?: string }[];
}

export interface AboutApproachData {
  badge: string;
  title: string;
  description: string;
  points: { id: string; icon: string; title: string; text: string }[];
  buttonText: string;
  buttonUrl: string;
  image1: string;
  image2: string;
}

export interface LexoraTemplateData {
  topBar: TopBarData;
  header: HeaderData;
  hero: HeroData;
  aboutUs: AboutUsData;
  services: ServicesData;
  process: ProcessData;
  team: TeamData;
  counter: CounterData;
  testimonials: TestimonialsData;
  blogs: BlogsData;
  footer: FooterData;
  aboutBreadcrumb?: BreadcrumbData;
  aboutFirm?: AboutFirmData;
  aboutWhyChooseUs?: AboutWhyChooseUsData;
  aboutMission?: AboutMissionData;
  aboutApproach?: AboutApproachData;
  whyChooseUsBreadcrumb?: BreadcrumbData;
  whyChooseUsPageSection?: AboutWhyChooseUsData;
  ourApproachBreadcrumb?: BreadcrumbData;
  servicesBreadcrumb?: BreadcrumbData;
  industriesBreadcrumb?: BreadcrumbData;
  sitemapBreadcrumb?: BreadcrumbData;
  industries?: IndustriesData;
}
