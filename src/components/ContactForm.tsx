import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: [] as string[]
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const serviceOptions = [
    'Website Design & Development',
    'Mobile & Web Applications',
    'Web Hosting Solutions',
    'Social Media Management',
    'Digital Marketing'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value]
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter(service => service !== value)
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a server
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We'll be in touch soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      services: []
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {formStatus.submitted ? (
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={24} className="text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
          <p className="text-gray-600">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
            className="mt-6 px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Services */}
          <div className="mb-6">
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Services You're Interested In
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceOptions.map((service, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${index}`}
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-teal-700 focus:ring-teal-600 border-gray-300 rounded"
                  />
                  <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700">
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            ></textarea>
          </div>
          
          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;