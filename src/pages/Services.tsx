import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "All Services",
    "Web Design",
    "Development",
    "Marketing",
    "Hosting"
  ];

  const filteredServices = selectedCategory === null || selectedCategory === "All Services"
    ? servicesData
    : servicesData.filter(service => {
        if (selectedCategory === "Web Design" && service.slug === "website-design-development") return true;
        if (selectedCategory === "Development" && service.slug === "mobile-web-applications") return true;
        if (selectedCategory === "Marketing" && (service.slug === "digital-marketing" || service.slug === "social-media-management")) return true;
        if (selectedCategory === "Hosting" && service.slug === "web-hosting-solutions") return true;
        return false;
      });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for West Auckland businesses and beyond.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Help Your Business Succeed</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Aroha Creatives, we deliver digital solutions that drive real results for your business. From stunning websites to comprehensive marketing strategies, we combine technical expertise with local understanding to create solutions that connect with your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category === "All Services" ? null : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (category === "All Services" && selectedCategory === null) || selectedCategory === category
                    ? 'bg-teal-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Digital Services"
            subtitle="Comprehensive solutions tailored to your business needs"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Process"
            subtitle="How we work with you to deliver exceptional results"
            accentColor="purple"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and specific needs to create a tailored approach.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy to achieve your specific business objectives.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Implementation</h3>
              <p className="text-gray-600">Our team brings the strategy to life with precision and attention to detail.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Results & Refinement</h3>
              <p className="text-gray-600">We measure results and continuously refine our approach for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help your West Auckland business thrive in the digital world.
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

export default Services;