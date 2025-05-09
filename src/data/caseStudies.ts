import type { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: 'Te Atatu Bakery Website Redesign',
    slug: 'te-atatu-bakery-redesign',
    client: 'Te Atatu Bakery',
    category: 'Web Design',
    description: 'Complete website redesign for a popular local bakery, featuring online ordering capabilities and a fresh, appetizing design.',
    challenge: 'The client needed a modern website that would showcase their artisan baked goods while allowing customers to place orders online. Their existing site was outdated, difficult to navigate, and not mobile-friendly.',
    solution: 'We designed a responsive, visually appealing website with a focus on high-quality imagery of their products. We implemented a user-friendly online ordering system with secure payment processing and clear pickup instructions.',
    results: [
      '42% increase in monthly online orders',
      '28% improvement in average order value',
      '35% increase in mobile traffic',
      'Reduced customer service calls by 30%'
    ],
    testimonial: 1,
    imageUrl: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 2,
    title: 'Waitakere Hiking App',
    slug: 'waitakere-hiking-app',
    client: 'Waitakere Ranges Regional Park',
    category: 'Mobile App',
    description: 'A comprehensive mobile app for hikers exploring the Waitakere Ranges, featuring trail maps, safety information, and local flora and fauna guides.',
    challenge: 'The park management wanted to improve visitor safety and education while enhancing the hiking experience. They needed a solution that would work offline in areas with no cell coverage.',
    solution: 'We developed a cross-platform mobile app with downloadable maps, GPS tracking, safety alerts, and extensive information about the local ecosystem. The app works offline and includes emergency contact features.',
    results: [
      'Over 5,000 downloads in the first month',
      '45% reduction in rescue callouts',
      '92% positive user reviews',
      'Featured in NZ Tourism promotion materials'
    ],
    testimonial: 2,
    imageUrl: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 3,
    title: 'Henderson Business Association Portal',
    slug: 'henderson-business-association',
    client: 'Henderson Business Association',
    category: 'Web Development',
    description: 'A comprehensive web portal connecting local businesses, providing resources, and facilitating networking opportunities.',
    challenge: 'The association needed a central platform where members could access resources, promote their businesses, and connect with other local entrepreneurs. The solution needed to be easy to manage and update by non-technical staff.',
    solution: 'We built a custom web portal with member profiles, event management, resource libraries, and a local business directory. The admin panel was designed for ease of use with comprehensive documentation and training.',
    results: [
      '34% increase in member engagement',
      '27% growth in association membership',
      '40+ local businesses added to the directory',
      'Simplified event management process'
    ],
    testimonial: 3,
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 4,
    title: 'West Coast Surf Social Campaign',
    slug: 'west-coast-surf-social',
    client: 'West Coast Surf Shop',
    category: 'Social Media',
    description: 'A comprehensive social media strategy that boosted engagement and sales for a local surf shop.',
    challenge: 'The client had minimal social media presence despite having a loyal customer base. They wanted to grow their online community, showcase their products, and highlight the local surf culture.',
    solution: 'We developed a content strategy focusing on local surf spots, community events, and product showcases. We implemented consistent posting schedules across Instagram, Facebook, and TikTok with analytics tracking.',
    results: [
      '165% increase in Instagram followers over 6 months',
      '78% higher engagement rate',
      '42% increase in website traffic from social platforms',
      '23% growth in in-store sales attributed to social campaigns'
    ],
    testimonial: 4,
    imageUrl: 'https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/390051/surf-beach-california-sunset-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 5,
    title: 'Titirangi Arts Festival Campaign',
    slug: 'titirangi-arts-festival',
    client: 'Titirangi Community Arts Council',
    category: 'Digital Marketing',
    description: 'A multi-channel digital marketing campaign that increased attendance and engagement for an annual arts festival.',
    challenge: 'The festival needed to attract a broader audience beyond their usual attendees and increase ticket sales for premium events. They had limited budget and needed maximum impact.',
    solution: 'We created a comprehensive digital marketing strategy including targeted social ads, email marketing, content marketing, and local SEO. We developed compelling visual assets and storytelling to showcase the unique aspects of the festival.',
    results: [
      '47% increase in ticket sales compared to previous year',
      '32% of attendees were first-time visitors',
      '3.2x return on ad spend',
      'Featured in local and national media outlets'
    ],
    testimonial: 5,
    imageUrl: 'https://images.pexels.com/photos/7191096/pexels-photo-7191096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/7191096/pexels-photo-7191096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 6,
    title: 'Avondale Farmers Market Online',
    slug: 'avondale-farmers-market',
    client: 'Avondale Markets',
    category: 'E-commerce',
    description: 'An e-commerce platform allowing the iconic market to offer home delivery and pickup services for fresh produce and goods.',
    challenge: 'During COVID-19 restrictions, the market needed a way to continue supporting vendors and customers. They required a solution that was easy for both vendors and customers to use with varying levels of technical knowledge.',
    solution: 'We built a custom e-commerce platform where multiple vendors could list products, manage inventory, and fulfill orders. The site included real-time availability updates, secure payment processing, and delivery scheduling.',
    results: [
      'Retained 85% of pre-COVID revenue during lockdown periods',
      'Continued support for 40+ local vendors',
      'New customer base from wider Auckland region',
      'Platform continued to generate 30% of revenue after restrictions lifted'
    ],
    testimonial: 6,
    imageUrl: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    galleryImages: [
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];