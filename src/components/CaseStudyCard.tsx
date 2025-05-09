import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image */}
      <div className="aspect-video overflow-hidden rounded-lg">
        <img 
          src={caseStudy.imageUrl} 
          alt={caseStudy.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6 text-white">
        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="mb-2 flex items-center">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-600/80 mr-2">
              {caseStudy.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
          <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {caseStudy.description}
          </p>
          <button className="inline-flex items-center text-sm font-medium text-white">
            View Case Study
            <ArrowUpRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;