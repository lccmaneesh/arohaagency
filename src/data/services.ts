import { Globe, Smartphone, Database, Instagram, Megaphone } from 'lucide-react';
import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Website Design & Development',
    slug: 'website-design-development',
    shortDescription: "Custom websites that capture your brand's essence and drive results.",
    fullDescription: 'We create beautiful, functional websites that perfectly represent your brand and business. Our websites are designed with your users in mind, ensuring they\'re not only visually stunning but also intuitive to navigate and optimized for conversions.',
    features: [
      'Custom responsive design',
      'User experience optimization',
      'SEO-friendly architecture',
      'Content management systems',
      'E-commerce capabilities',
      'Website maintenance & support'
    ],
    icon: Globe,
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [1, 4]
  },
  {
    id: 2,
    title: 'Mobile & Web Applications',
    slug: 'mobile-web-applications',
    shortDescription: 'Powerful, user-friendly applications built for your specific business needs.',
    fullDescription: 'From simple web apps to complex mobile applications, we design and develop software solutions that solve real business problems. Our development team uses the latest technologies to build scalable, secure, and high-performance applications.',
    features: [
      'Custom app development',
      'Progressive web applications',
      'Cross-platform mobile apps',
      'User interface design',
      'API development & integration',
      'App testing & deployment'
    ],
    icon: Smartphone,
    imageUrl: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [2, 5]
  },
  {
    id: 3,
    title: 'Web Hosting Solutions',
    slug: 'web-hosting-solutions',
    shortDescription: 'Reliable, secure, and fast hosting to keep your digital presence online.',
    fullDescription: 'We provide robust hosting solutions tailored to your specific needs. Whether you need shared hosting for a small business website or dedicated servers for high-traffic applications, we\'ve got you covered with reliable infrastructure and expert support.',
    features: [
      'Managed WordPress hosting',
      'Fast SSD storage',
      'Daily backups',
      'SSL certificates',
      'CDN integration',
      '24/7 technical support'
    ],
    icon: Database,
    imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [3, 6]
  },
  {
    id: 4,
    title: 'Social Media Management',
    slug: 'social-media-management',
    shortDescription: 'Strategic social media presence that builds community and drives engagement.',
    fullDescription: 'Our social media management services help you maintain a consistent, engaging presence across all relevant platforms. We create and curate content, engage with your audience, and provide analytics to track performance and growth.',
    features: [
      'Content strategy & creation',
      'Platform-specific optimization',
      'Community management',
      'Social listening',
      'Analytics & reporting',
      'Contest & campaign management'
    ],
    icon: Instagram,
    imageUrl: 'https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [4, 1]
  },
  {
    id: 5,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDescription: 'Results-driven marketing strategies to grow your business and reach new customers.',
    fullDescription: 'Our comprehensive digital marketing services help you attract, convert, and retain customers. We use data-driven strategies across multiple channels to maximize your return on investment and achieve your business goals.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Email marketing campaigns',
      'Content marketing',
      'Local SEO for West Auckland businesses',
      'Conversion rate optimization'
    ],
    icon: Megaphone,
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caseStudyIds: [5, 2]
  }
];