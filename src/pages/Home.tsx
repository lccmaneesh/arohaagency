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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">West Auckland's Digital Partner</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in Te Atatu Peninsula, Aroha Creatives is a digital agency with strong local roots. We combine industry expertise with authentic West Auckland connections to deliver digital solutions that truly resonate with your audience.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of designers, developers, and digital strategists is dedicated to helping local businesses thrive in the digital landscape with services tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={20} className="text-teal-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Locally Based</h4>
                    <p className="text-gray-600">West Auckland</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-teal-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your West Auckland business thrive in the digital world with tailored solutions that deliver real results.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
