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
}

export interface ServicesData {
  badge: string;
  title: string;
  description: string;
  bgImage: string;
  items: ServiceItem[];
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
  image: string;
  name: string;
  role: string;
  description: string;
  socials: SocialLink[];
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
}
