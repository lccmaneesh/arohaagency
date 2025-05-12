import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/60 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-sky-700">
            Aroha Creatives
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors hover:text-sky-700 ${
                    location.pathname === '/' ? 'text-sky-700' : isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium transition-colors hover:text-sky-700 ${
                    location.pathname.includes('/services') ? 'text-sky-700' : isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`text-sm font-medium transition-colors hover:text-sky-700 ${
                    location.pathname === '/portfolio' ? 'text-sky-700' : isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium transition-colors hover:text-sky-700 ${
                    location.pathname === '/about' ? 'text-sky-700' : isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 rounded-md bg-sky-700 text-white text-sm font-medium transition-colors hover:bg-sky-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-6 items-center">
              <li>
                <Link 
                  to="/" 
                  className={`text-lg font-medium transition-colors hover:text-teal-700 ${
                    location.pathname === '/' ? 'text-teal-700' : 'text-gray-700'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-lg font-medium transition-colors hover:text-teal-700 ${
                    location.pathname.includes('/services') ? 'text-teal-700' : 'text-gray-700'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`text-lg font-medium transition-colors hover:text-teal-700 ${
                    location.pathname === '/portfolio' ? 'text-teal-700' : 'text-gray-700'
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-lg font-medium transition-colors hover:text-teal-700 ${
                    location.pathname === '/about' ? 'text-teal-700' : 'text-gray-700'
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="pt-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-md bg-teal-700 text-white text-lg font-medium transition-colors hover:bg-teal-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;