import { useState } from 'react';
import { caseStudiesData } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import SectionHeading from '../components/SectionHeading';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(caseStudiesData.map(caseStudy => caseStudy.category))
  );

  const filteredCaseStudies = selectedCategory === null
    ? caseStudiesData
    : caseStudiesData.filter(caseStudy => caseStudy.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auckland Digital Marketing Portfolio & Case Studies</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Proven results from our SEO, web design, and digital marketing campaigns for Auckland businesses. Real case studies showing increased traffic, leads, and revenue.
          </p>
        </div>
      </header>

      {/* Portfolio Filters & Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Featured Digital Marketing Success Stories"
            subtitle="Browse our Auckland SEO and digital marketing case studies showing real ROI and business growth"
            accentColor="orange"
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Project Approach"
            subtitle="How we deliver successful projects for our clients"
            accentColor="purple"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Research & Strategy</h3>
              <p className="text-gray-600">
                We begin by understanding your business, audience, and objectives to craft a targeted strategy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design & Planning</h3>
              <p className="text-gray-600">
                We create comprehensive designs and project plans that align with your goals and brand identity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Development & Execution</h3>
              <p className="text-gray-600">
                Our team brings the project to life with meticulous attention to detail and quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Launch & Support</h3>
              <p className="text-gray-600">
                We ensure a smooth launch and provide ongoing support to help you achieve lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading 
            title="Technologies We Use"
            subtitle="We employ the latest technologies to deliver high-quality solutions"
            accentColor="teal"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-teal-700">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Frontend</h3>
              <p className="text-gray-600 text-sm">React, Vue, Angular</p>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-teal-700">
                  <path d="M18 10h-4v4h4v-4z"></path>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, Python, PHP</p>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-teal-700">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">CMS</h3>
              <p className="text-gray-600 text-sm">WordPress, Shopify, Webflow</p>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-teal-700">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Design</h3>
              <p className="text-gray-600 text-sm">Figma, Adobe XD, Photoshop</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;