export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  imageUrl: string;
  caseStudyIds: number[];
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: number;
  imageUrl: string;
  galleryImages: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}