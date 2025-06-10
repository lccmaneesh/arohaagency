import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-800 via-slate-700 to-sky-700 text-white overflow-hidden">
      {/* Koru pattern overlay (subtle Māori design element) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2768398/pexels-photo-2768398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      ></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" itemProp="headline">
            West Auckland Digital Marketing & Web Design Agency in <span className="text-sky-300">Te Atatu Peninsula</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-delay" itemProp="description">
            Leading West Auckland digital agency specializing in professional web design, development, SEO, and digital marketing services. 
            Serving Te Atatu Peninsula, Henderson, Waitakere, and greater Auckland with authentic local expertise since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link 
              to="/services" 
              className="px-6 py-3 rounded-md bg-sky-600 text-white font-medium transition-all hover:bg-sky-700 transform hover:translate-y-[-2px] inline-flex items-center group"
              aria-label="Explore our digital marketing and web design services"
            >
              View Our Digital Services
              <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 rounded-md bg-transparent border-2 border-white text-white font-medium transition-all hover:bg-white/10"
              aria-label="Contact Aroha Creatives for a free consultation"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Te Atatu Peninsula silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-white" style={{ 
        maskImage: "url('https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", 
        maskSize: "cover",
        maskPosition: "bottom",
        opacity: 0.05
      }}></div>
    </section>
  );
};

export default HeroSection;