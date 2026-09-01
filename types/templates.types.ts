export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  content: string; // fallback/legacy
  bannerImage?: string;
  caseInfo?: {
    client: string;
    category: string;
    budget: string;
    startDate: string;
    endDate: string;
    website: string;
    rating: number;
  };
  overview?: {
    title: string;
    text: string;
    image: string;
  };
  challenge?: {
    title: string;
    text: string;
    points: string[];
  };
  result?: {
    title: string;
    text: string;
    cards: { id: string; icon: string; title: string; text: string }[];
  };
}

export interface CaseStudiesData {
  badge: string;
  title: string;
  description: string;
  items: CaseStudyItem[];
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
    dropdownItems?: { label: string; url: string }[];
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
  highlightText?: string;
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
  highlightText?: string;
  subtitle?: string;
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
  subtitle?: string;
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
  slug?: string;
  contentBlocks?: {
    type: 'paragraph' | 'heading_with_icon';
    text?: string;
    heading?: string;
    icon?: string;
  }[];
}

export interface BlogsData {
  badge: string;
  title: string;
  items: BlogItem[];
}

export interface LegalUpdateItem {
  id: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  contentBlocks: {
    type: 'paragraph' | 'heading' | 'list_item';
    text?: string;
    heading?: string;
    icon?: string;
    number?: string;
  }[];
}

export interface LegalUpdatesData {
  badge: string;
  title: string;
  subtitle: string;
  headerImage?: string;
  items: LegalUpdateItem[];
}

export interface NewsMediaItem {
  id: string;
  image: string;
  title: string;
  url?: string;
}

export interface NewsMediaData {
  items: NewsMediaItem[];
}

export interface EventItem {
  id: string;
  slug: string;
  badge: string;
  dateBox: { month: string; day: string; year: string };
  dateFull: string;
  dayOfWeek: string;
  title: string;
  excerpt: string;
  time: string;
  location: string;
  image: string;
  seats: string;
  aboutText: string[];
  keyTopics: string[];
  category?: string;
  status?: string;
  date?: string;
  contentBlocks?: any[];
  price?: string;
  capacity?: string;
  registrationDeadline?: string;
  speakers?: any[];
}

export interface EventsData {
  badge: string;
  title: string;
  items: EventItem[];
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

export interface GlobalUIData {
  loadingText?: string;
  notFoundText?: string;
  industryNotFoundText: string;
  defaultIndustriesBreadcrumb: BreadcrumbData;
  servicesBadge?: string;
  defaultServiceFeatures?: { icon: string; title: string }[];
  defaultOverviewFallback?: string;
  callUsAnytimeText?: string;
  sidebarSearchTitle?: string;
  sidebarSearchPlaceholder?: string;
  sidebarCategoriesTitle?: string;
  sidebarServicesTitle?: string;
  sidebarResourcesTitle?: string;
  sidebarContactTitle?: string;
  sidebarContactDesc?: string;
  sidebarContactNamePlaceholder?: string;
  sidebarContactEmailPlaceholder?: string;
  sidebarContactPhonePlaceholder?: string;
  sidebarContactMessagePlaceholder?: string;
  sidebarContactSubmitText?: string;
  sidebarContactSubmittingText?: string;
  sidebarContactSuccessMessage?: string;
  sidebarSearchDemoMessage?: string;
  servicesGridTitle?: string;
  servicesGridSubtitle?: string;
  servicesGridLearnMore?: string;
  servicesGridBannerTitle?: string;
  servicesGridBannerDesc?: string;
  servicesGridBannerBtnText?: string;
  servicesGridBannerBtnUrl?: string;
  sitemapBadge?: string;
  sitemapTitle?: string;
  sitemapHome?: string;
  sitemapAbout?: string;
  sitemapWhyChooseUs?: string;
  sitemapOurApproach?: string;
  sitemapServices?: string;
  sitemapIndustries?: string;
  sitemapTeam?: string;
  sitemapDetailSuffix?: string;
  defaultSitemapBreadcrumb?: BreadcrumbData;
  teamDetailBadge?: string;
  teamDetailExpLabel?: string;
  teamDetailPhoneLabel?: string;
  teamDetailEmailLabel?: string;
  teamDetailLocationLabel?: string;
  teamDetailDefaultExp?: string;
  teamDetailDefaultPhone?: string;
  teamDetailDefaultEmail?: string;
  teamDetailDefaultLocation?: string;
  teamDetailSkillsTitle?: string;
  teamDetailExpTitle?: string;
  teamDetailEduTitle?: string;
  teamDetailPassingYearLabel?: string;
  caseStudyReadBtnText?: string;
}

export interface PublicationItem {
  id: string;
  type?: string;
  title: string;
  category: string;
  date: string;
  pages: number;
  description: string;
  coverImage: string;
  pdfUrl: string;
  overview: {
    paragraphs: string[];
    quote: {
      text: string;
      author: string;
    };
    keyTopics: string[];
  };
  aboutGuide: {
    text: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  badge?: string;
}

export interface PublicationsData {
  badge: string;
  title: string;
  description: string;
  downloadButtonText: string;
  readOnlineButtonText: string;
  itemBadge?: string;
  pagesLabel?: string;
  overviewTitle?: string;
  keyTopicsTitle?: string;
  aboutGuideTitle?: string;
  tabs?: {
    overview: string;
    keyTopics: string;
    tableOfContents: string;
    authors: string;
    related: string;
  };
  items: PublicationItem[];
}

export interface AwardItem {
  year: string;
  title: string;
  description: string;
}

export interface AwardsData {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  items: AwardItem[];
  founderQuote: {
    text: string;
    author: string;
  };
  features: {
    title: string;
    icon: string;
  }[];
  clientQuote: {
    text: string;
    author: string;
  };
  featuredIn: {
    logo: string;
    alt: string;
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  items: FaqItem[];
}

export interface CultureFeature {
  icon: string;
  title: string;
  description: string;
}

export interface JobItem {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  employmentType?: string;
  aboutRole?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
}

export interface CareersData {
  culture: {
    title: string;
    description: string;
    features: CultureFeature[];
  };
  whyJoin: {
    title: string;
    points: string[];
    banner: {
      title: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
  positions: {
    title: string;
    tableHeaders: {
      title: string;
      department: string;
      experience: string;
      location: string;
      action: string;
    };
    items: JobItem[];
    bottomText: string;
    bottomLinkText: string;
    bottomLinkUrl: string;
    viewDetailsText: string;
  };
  jobDetailData?: {
    aboutRoleTitle: string;
    responsibilitiesTitle: string;
    requirementsTitle: string;
    preferredTitle: string;
    whatWeOfferTitle: string;
    whatWeOfferItems: string[];
    whyJoinUsTitle: string;
    whyJoinUsItems: {
      icon: string;
      title: string;
      description: string;
    }[];
    form: {
      title: string;
      description: string;
      submitBtnText: string;
      termsHtml: string;
      fields: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        experience: string;
        experienceOptions: string[];
        currentPosition: string;
        noticePeriod: string;
        noticePeriodOptions: string[];
        resume: string;
        resumeHelp: string;
        coverLetter: string;
        coverLetterHelp: string;
      };
    };
  };
}

export interface OfficeLocation {
  id: string;
  badge: string;
  city: string;
  image: string;
  mapImage: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  directionsUrl: string;
}

export interface OfficeLocationsData {
  badge: string;
  title: string;
  description: string;
  getDirectionsText: string;
  items: OfficeLocation[];
}

export interface BookConsultationData {
  leftColumn: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    contactBox: {
      title: string;
      description: string;
      phone: string;
    };
  };
  rightColumn: {
    title: string;
    description: string;
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      practiceAreaLabel: string;
      practiceAreaPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      detailsLabel: string;
      detailsPlaceholder: string;
      submitBtnText: string;
      secureText: string;
    };
  };
}

export interface NotFoundData {
  errorCode: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface LegalSection {
  title: string;
  content: string[];
  listItems?: string[];
}

export interface LegalPageData {
  title: string;
  sections: LegalSection[];
}

export interface ContactData {
  badge: string;
  title: string;
  description: string;
  infoCards: {
    emails: string[];
    phones: string[];
    address: string;
  };
  officeCard: {
    title: string;
    description: string;
    workingHours: {
      days: string;
      hours: string;
    }[];
    mapLocationQuery: string;
    getDirectionsText: string;
    getDirectionsUrl: string;
  };
  form: {
    title: string;
    description: string;
    submitBtnText: string;
    fields: {
      fullName: string;
      email: string;
      phone: string;
      subject: string;
      subjectOptions: string[];
      message: string;
    };
  };
}

export interface ClientResourceCategoryCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface ResourceKeyPoint {
  id: string;
  title: string;
  description: string;
}

export interface ResourceSidebarHighlight {
  id: string;
  title: string;
  description: string;
}

export interface ClientResourceItem {
  id: string;
  slug: string;
  type: string;
  readTime: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  overviewImage?: string;
  introText?: string;
  overviewHtml?: string;
  keyPointsTitle?: string;
  keyPoints?: ResourceKeyPoint[];
  sidebarHighlights?: ResourceSidebarHighlight[];
  fileType?: string;
  fileSize?: string;
  downloadUrl?: string;
  contentBlocks?: any[];
  category?: string;
}

export interface FeaturedResourcesSection {
  badge: string;
  title: string;
  viewAllText: string;
  viewAllLink: string;
  items: ClientResourceItem[];
}

export interface ClientResourcesData {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  categoryCards?: ClientResourceCategoryCard[];
  featuredSection?: FeaturedResourcesSection;
  [key: string]: unknown;
}

export interface LexoraTemplateData {
  common?: {
    Footer?: FooterData;
  };
  categories?: {
    LawFirm?: {
      sections?: {
        globalUI?: { variants?: { LexoraGlobalUI1?: GlobalUIData } };
        topBar?: { variants?: { LexoraTopBar1?: TopBarData } };
        header?: { variants?: { LexoraHeader1?: HeaderData } };
        hero?: { variants?: { LexoraHero1?: HeroData } };
        aboutUs?: { variants?: { LexoraAboutUs1?: AboutUsData } };
        services?: { variants?: { LexoraServices1?: ServicesData } };
        process?: { variants?: { LexoraProcess1?: ProcessData } };
        team?: { variants?: { LexoraTeam1?: TeamData } };
        counter?: { variants?: { LexoraCounter1?: CounterData } };
        testimonials?: { variants?: { LexoraTestimonials1?: TestimonialsData } };
        testimonialsBreadcrumb?: { variants?: { LexoraTestimonialsBreadcrumb1?: BreadcrumbData } };
        blogs?: { variants?: { LexoraBlogs1?: BlogsData } };
        footer?: { variants?: { LexoraFooter1?: FooterData } };
        aboutBreadcrumb?: { variants?: { LexoraAboutBreadcrumb1?: BreadcrumbData } };
        aboutFirm?: { variants?: { LexoraAboutFirm1?: AboutFirmData } };
        aboutMission?: { variants?: { LexoraAboutMission1?: AboutMissionData } };
        aboutWhyChooseUs?: { variants?: { LexoraAboutWhyChooseUs1?: AboutWhyChooseUsData } };
        whyChooseUsBreadcrumb?: { variants?: { LexoraWhyChooseUsBreadcrumb1?: BreadcrumbData } };
        aboutApproach?: { variants?: { LexoraAboutApproach1?: AboutApproachData } };
        ourApproachBreadcrumb?: { variants?: { LexoraOurApproachBreadcrumb1?: BreadcrumbData } };
        industries?: { variants?: { LexoraIndustries1?: IndustriesData } };
        industriesBreadcrumb?: { variants?: { LexoraIndustriesBreadcrumb1?: BreadcrumbData } };
        industryDetailBreadcrumb?: { variants?: { LexoraIndustryDetailBreadcrumb1?: BreadcrumbData } };
        servicesBreadcrumb?: { variants?: { LexoraServicesBreadcrumb1?: BreadcrumbData } };
        serviceDetailBreadcrumb?: { variants?: { LexoraServiceDetailBreadcrumb1?: BreadcrumbData } };
        sitemapBreadcrumb?: { variants?: { LexoraSitemapBreadcrumb1?: BreadcrumbData } };
        teamBreadcrumb?: { variants?: { LexoraTeamBreadcrumb1?: BreadcrumbData } };
        caseStudies?: { variants?: { LexoraCaseStudies1?: CaseStudiesData } };
        caseStudiesBreadcrumb?: { variants?: { LexoraCaseStudiesBreadcrumb1?: BreadcrumbData } };
        caseStudyDetailBreadcrumb?: { variants?: { LexoraCaseStudyDetailBreadcrumb1?: BreadcrumbData } };
        blogsBreadcrumb?: { variants?: { LexoraBlogsBreadcrumb1?: BreadcrumbData } };
        blogDetailBreadcrumb?: { variants?: { LexoraBlogDetailBreadcrumb1?: BreadcrumbData } };
        legalUpdates?: { variants?: { LexoraLegalUpdates1?: LegalUpdatesData } };
        legalUpdatesBreadcrumb?: { variants?: { LexoraLegalUpdatesBreadcrumb1?: BreadcrumbData } };
        legalUpdateDetailBreadcrumb?: { variants?: { LexoraLegalUpdateDetailBreadcrumb1?: BreadcrumbData } };
        newsMedia?: { variants?: { LexoraNewsMedia1?: NewsMediaData } };
        newsMediaBreadcrumb?: { variants?: { LexoraNewsMediaBreadcrumb1?: BreadcrumbData } };
        events?: { variants?: { LexoraEvents1?: EventsData } };
        eventsBreadcrumb?: { variants?: { LexoraEventsBreadcrumb1?: BreadcrumbData } };
        eventDetailBreadcrumb?: { variants?: { LexoraEventDetailBreadcrumb1?: BreadcrumbData } };
        publications?: { variants?: { LexoraPublications1?: PublicationsData } };
        publicationsBreadcrumb?: { variants?: { LexoraPublicationsBreadcrumb1?: BreadcrumbData } };
        publicationDetailBreadcrumb?: { variants?: { LexoraPublicationDetailBreadcrumb1?: BreadcrumbData } };
        awards?: { variants?: { LexoraAwards1?: AwardsData } };
        awardsBreadcrumb?: { variants?: { LexoraAwardsBreadcrumb1?: BreadcrumbData } };
        faq?: { variants?: { LexoraFaq1?: FaqData } };
        faqBreadcrumb?: { variants?: { LexoraFaqBreadcrumb1?: BreadcrumbData } };
        careers?: { variants?: { LexoraCareers1?: CareersData } };
        careersBreadcrumb?: { variants?: { LexoraCareersBreadcrumb1?: BreadcrumbData } };
        jobDetailBreadcrumb?: { variants?: { LexoraJobDetailBreadcrumb1?: BreadcrumbData } };
        officeLocations?: { variants?: { LexoraOfficeLocations1?: OfficeLocationsData } };
        officeLocationsBreadcrumb?: { variants?: { LexoraOfficeLocationsBreadcrumb1?: BreadcrumbData } };
        contact?: { variants?: { LexoraContact1?: ContactData } };
        contactBreadcrumb?: { variants?: { LexoraContactBreadcrumb1?: BreadcrumbData } };
        bookConsultation?: { variants?: { LexoraBookConsultation1?: BookConsultationData } };
        bookConsultationBreadcrumb?: { variants?: { LexoraBookConsultationBreadcrumb1?: BreadcrumbData } };
        clientResources?: { variants?: { LexoraClientResources1?: ClientResourcesData } };
        clientResourcesBreadcrumb?: { variants?: { LexoraClientResourcesBreadcrumb1?: BreadcrumbData } };
        resourceDetailBreadcrumb?: { variants?: { LexoraResourceDetailBreadcrumb1?: BreadcrumbData } };
        notFound?: { variants?: { LexoraNotFound1?: NotFoundData } };
        privacyPolicy?: { variants?: { LexoraPrivacyPolicy1?: LegalPageData } };
        privacyPolicyBreadcrumb?: { variants?: { LexoraPrivacyPolicyBreadcrumb1?: BreadcrumbData } };
        termsConditions?: { variants?: { LexoraTermsConditions1?: LegalPageData } };
        termsConditionsBreadcrumb?: { variants?: { LexoraTermsConditionsBreadcrumb1?: BreadcrumbData } };
        legalDisclaimer?: { variants?: { LexoraLegalDisclaimer1?: LegalPageData } };
        legalDisclaimerBreadcrumb?: { variants?: { LexoraLegalDisclaimerBreadcrumb1?: BreadcrumbData } };
      };
    };
  };
}
