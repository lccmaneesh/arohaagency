import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Recent Work</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our successful projects for businesses in West Auckland and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudiesData.slice(0, 3).map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center group text-teal-700 font-medium hover:text-teal-800 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;