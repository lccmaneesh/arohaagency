import { Globe, Smartphone, Database, Instagram, Megaphone } from 'lucide-react';
import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Professional Website Design & Development Auckland',
    slug: 'website-design-development',
    shortDescription: "SEO-optimized, responsive websites designed to convert visitors into customers for Auckland businesses.",
    fullDescription: 'We create beautiful, SEO-optimized websites that rank high in Google search results and convert visitors into customers. Our Auckland web design team specializes in responsive, mobile-friendly websites with fast loading speeds, professional design, and conversion-focused layouts that drive business growth.',
    features: [
      'SEO-optimized responsive web design',
      'Mobile-first development approach',
      'Google PageSpeed optimization',
      'WordPress & custom CMS solutions',
      'E-commerce & online store development',
      'Ongoing website maintenance & security'
    ],
    icon: Globe,
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [1, 4]
  },
  {
    id: 2,
    title: 'Custom Mobile & Web Application Development',
    slug: 'mobile-web-applications',
    shortDescription: 'Scalable web and mobile applications that streamline business operations and enhance customer experience.',
    fullDescription: 'Our Auckland development team creates custom web and mobile applications using cutting-edge technologies. From progressive web apps to native mobile applications, we build scalable, secure solutions that integrate seamlessly with your business processes and provide exceptional user experiences.',
    features: [
      'Progressive web application (PWA) development',
      'Progressive web applications',
      'React Native & Flutter mobile apps',
      'UI/UX design & user testing',
      'API development & integration',
      'Cloud deployment & scaling'
    ],
    icon: Smartphone,
    imageUrl: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [2, 5]
  },
  {
    id: 3,
    title: 'Fast & Secure Web Hosting Auckland',
    slug: 'web-hosting-solutions',
    shortDescription: 'High-performance web hosting with 99.9% uptime guarantee and local Auckland support.',
    fullDescription: 'Our Auckland-based web hosting services provide lightning-fast loading speeds, enterprise-level security, and 24/7 local support. We offer managed WordPress hosting, cloud hosting, and dedicated servers with automatic backups, SSL certificates, and CDN integration for optimal performance.',
    features: [
      'Managed WordPress hosting with auto-updates',
      'NVMe SSD storage for maximum speed',
      'Daily automated backups & restore',
      'Free SSL certificates & security monitoring',
      'CDN integration',
      '24/7 Auckland-based technical support'
    ],
    icon: Database,
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [3, 6]
  },
  {
    id: 4,
    title: 'Social Media Management & Marketing Auckland',
    slug: 'social-media-management',
    shortDescription: 'Professional social media marketing that builds brand awareness and drives sales for Auckland businesses.',
    fullDescription: 'Our Auckland social media marketing team creates engaging content, manages your online community, and runs targeted advertising campaigns across Facebook, Instagram, LinkedIn, and TikTok. We focus on building authentic connections with your audience while driving measurable business results.',
    features: [
      'Strategic content planning & creation',
      'Facebook & Instagram advertising',
      'LinkedIn B2B marketing campaigns',
      'Community management & engagement',
      'Social media analytics & ROI tracking',
      'Influencer partnership coordination'
    ],
    icon: Instagram,
    imageUrl: 'https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [4, 1]
  },
  {
    id: 5,
    title: 'SEO & Digital Marketing Auckland',
    slug: 'digital-marketing',
    shortDescription: 'Proven SEO and digital marketing strategies that increase website traffic, leads, and sales.',
    fullDescription: 'Our certified SEO specialists and digital marketing experts help Auckland businesses dominate Google search results and attract high-quality leads. We provide comprehensive SEO audits, keyword research, content marketing, Google Ads management, and conversion optimization services with transparent reporting.',
    features: [
      'Technical SEO & on-page optimization',
      'Google Ads & PPC campaign management',
      'Local SEO for Auckland businesses',
      'Content marketing & link building',
      'Email marketing automation',
      'Conversion rate optimization (CRO)'
    ],
    icon: Megaphone,
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [5, 2]
  }
];