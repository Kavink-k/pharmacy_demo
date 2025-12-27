export interface NavigationItem {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  batch: string;
  role: string;
  content: string;
  image?: string;
}

export interface ResearchHighlight {
  id: string;
  title: string;
  description: string;
  category: string;
}
