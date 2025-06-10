import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* About Us Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">West Auckland's Premier Digital Marketing Agency</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className="rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-right"
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="The Aroha Creatives team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Local Te Atatu Peninsula Digital Experts</h3>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in Te Atatu Peninsula, Aroha Creatives is West Auckland's leading digital marketing and web design agency. We specialize in SEO, responsive web development, social media management, and comprehensive digital marketing strategies for Auckland businesses.
              </p>
              <p className="text-gray-600 mb-8">
                Our certified team of web designers, developers, and digital marketing specialists helps Henderson, Waitakere, and greater Auckland businesses achieve online success with proven strategies and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={20} className="text-teal-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Serving West Auckland</h4>
                    <p className="text-gray-600">Te Atatu Peninsula, Henderson, Waitakere</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-teal-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center group text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <PortfolioSection />
      
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Dominate Auckland's Digital Market?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Partner with West Auckland's top-rated digital marketing agency. Get professional web design, proven SEO strategies, and comprehensive digital marketing solutions that drive real business growth in Auckland and beyond.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
            aria-label="Contact us for a free digital marketing consultation"
          >
            Get Free SEO Audit & Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
