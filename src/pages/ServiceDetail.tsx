import { Link } from 'react-router-dom';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { Service } from '../types';
import { caseStudiesData } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const relatedCaseStudies = caseStudiesData.filter(caseStudy => 
    service.caseStudyIds.includes(caseStudy.id)
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <Link to="/services" className="inline-flex items-center text-teal-300 hover:text-white transition-colors mb-4">
                <ArrowLeft size={16} className="mr-2" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              {service.icon && <service.icon size={48} className="text-white" />}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Description */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
                <div className="w-20 h-1 bg-teal-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900">What We Offer</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Image */}
                <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Why Choose Us</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={16} className="text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-gray-600 text-sm">We understand West Auckland businesses and their unique needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={16} className="text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tailored Solutions</h4>
                      <p className="text-gray-600 text-sm">Custom strategies designed specifically for your business goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={16} className="text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results</h4>
                      <p className="text-gray-600 text-sm">Demonstrated success with businesses throughout Auckland.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={16} className="text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                      <p className="text-gray-600 text-sm">We're here for you beyond project completion.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Ready to get started?</h4>
                  <Link 
                    to="/contact" 
                    className="w-full py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors flex items-center justify-center"
                  >
                    Request a Quote
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Related Projects</h2>
            <div className="w-20 h-1 bg-teal-600 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedCaseStudies.map((caseStudy) => (
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
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our {service.title} can help your West Auckland business thrive.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-teal-800 font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;