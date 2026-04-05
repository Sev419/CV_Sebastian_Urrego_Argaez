export type NavItem = {
  label: string;
  href: string;
};

export type InfoItem = {
  label: string;
  value: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Badge = {
  label: string;
};

export type Capability = {
  title: string;
  description: string;
  points: string[];
};

export type ProcessStep = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "demo" | "repo";
};

export type Project = {
  title: string;
  category: string;
  status: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: ProjectMetric[];
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  description: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type TechnologyGroup = {
  title: string;
  items: string[];
};

export type ExploreCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type PortfolioContent = {
  seo: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    location: string;
    availability: string;
    intro: string;
    summary: string;
    initials: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    description: string;
    actions: NavItem[];
    badges: Badge[];
    stats: Stat[];
    quickFacts: InfoItem[];
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ExploreCard[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    facts: InfoItem[];
  };
  technologies: {
    eyebrow: string;
    title: string;
    description: string;
    groups: TechnologyGroup[];
  };
  trustStrip: string[];
  capabilities: Capability[];
  projects: Project[];
  process: ProcessStep[];
  timeline: TimelineItem[];
  contact: {
    title: string;
    description: string;
    links: ContactLink[];
  };
};
