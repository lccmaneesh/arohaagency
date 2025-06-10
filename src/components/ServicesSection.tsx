import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Digital Marketing & Web Design Services</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert SEO, web development, digital marketing, and social media management services for Auckland businesses. Proven strategies that deliver measurable results and increased online visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center group text-teal-700 font-medium hover:text-teal-800 transition-colors"
          >
            View All Services
            <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;