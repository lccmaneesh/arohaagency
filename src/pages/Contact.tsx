import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project or ask any questions.
          </p>
        </div>
      </header>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Reach out to discuss your project or ask any questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={24} className="text-teal-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:hello@arohacreatives.co.nz" className="text-teal-700 hover:text-teal-800 transition-colors">
                      hello@arohacreatives.co.nz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-teal-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:+6491234567" className="text-teal-700 hover:text-teal-800 transition-colors">
                      09 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-teal-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-gray-500 hover:text-teal-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" className="text-gray-500 hover:text-teal-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" className="text-gray-500 hover:text-teal-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about working with us"
            accentColor="purple"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">What areas do you service?</h3>
              <p className="text-gray-600 mb-6">
                While we're based in Te Atatu Peninsula and primarily serve West Auckland businesses, we work with clients throughout Auckland and across New Zealand. For certain services, we can work remotely with clients worldwide.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">How much do your services cost?</h3>
              <p className="text-gray-600 mb-6">
                Each project is unique, and we provide custom quotes based on your specific requirements. We offer transparent pricing and work within a range of budgets. Contact us for a free consultation and quote.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on scope and complexity. A basic website might take 3-4 weeks, while more complex projects could take several months. We'll provide a detailed timeline during our consultation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Do you offer ongoing support?</h3>
              <p className="text-gray-600 mb-6">
                Yes, we offer various maintenance and support packages to keep your digital assets running smoothly after launch. We can handle updates, security, content changes, and more.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can you work with our existing brand?</h3>
              <p className="text-gray-600 mb-6">
                Absolutely. We're experienced in working with established brand guidelines and can build digital solutions that align perfectly with your existing brand identity.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">What makes you different from other agencies?</h3>
              <p className="text-gray-600">
                Our deep connection to West Auckland, authentic approach to relationships, and combination of technical expertise with cultural awareness sets us apart. We genuinely care about the success of your business and the local community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;