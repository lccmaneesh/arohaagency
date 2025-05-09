import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:translate-y-[-8px] group">
      <div className="h-2 bg-sky-600"></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-6">
          <Icon size={24} className="text-sky-700" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.shortDescription}</p>
        <Link 
          to={`/services/${service.slug}`} 
          className="inline-flex items-center text-sky-700 font-medium group-hover:text-sky-800 transition-colors"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;