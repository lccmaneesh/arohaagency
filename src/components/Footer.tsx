import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Koru pattern divider */}
      <div 
        className="h-8 bg-teal-700 opacity-90"
        style={{ 
          maskImage: "url('https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", 
          maskSize: "cover",
          maskPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aroha Creatives</h3>
            <p className="text-gray-400 mb-6">
              Digital solutions with a West Auckland heart, based in Te Atatu Peninsula.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/website-design-development" className="text-gray-400 hover:text-white transition-colors">Website Design</Link>
              </li>
              <li>
                <Link to="/services/mobile-web-applications" className="text-gray-400 hover:text-white transition-colors">Web Applications</Link>
              </li>
              <li>
                <Link to="/services/web-hosting-solutions" className="text-gray-400 hover:text-white transition-colors">Web Hosting</Link>
              </li>
              <li>
                <Link to="/services/social-media-management" className="text-gray-400 hover:text-white transition-colors">Social Media</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3"> 
              <li className="flex items-center">
                <Phone size={18} className="text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">09 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-teal-500 mr-3 flex-shrink-0" />
                <a href="mailto:hello@aroha.biz" className="text-gray-400 hover:text-white transition-colors">hello@aroha.biz</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Aroha Creatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
