import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { teamData } from '../data/team';
import TeamMemberCard from '../components/TeamMemberCard';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A West Auckland digital agency with a focus on authentic connections and exceptional results.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2018 in Te Atatu Peninsula, Aroha Creatives began with a simple mission: to provide local West Auckland businesses with high-quality digital services that combine technical expertise with authentic local connections.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Mārama Wilson, saw that many local businesses were being underserved by large agencies that didn't understand the unique West Auckland community and culture. She assembled a team of talented professionals who shared her vision for community-focused digital solutions.
              </p>
              <p className="text-gray-600">
                Today, we've grown to serve clients throughout Auckland and beyond, but we remain deeply rooted in our West Auckland home. Our name "Aroha" (the Māori word for love and compassion) reflects our approach to business – creating digital solutions with care, understanding, and genuine connection.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="The Aroha Creatives team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Values"
            subtitle="The principles that guide our work and relationships"
            accentColor="orange"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Connection</h3>
              <p className="text-gray-600">
                We're proud of our West Auckland roots and believe in supporting our local community. We understand the unique challenges and opportunities for businesses in our area.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Authentic Relationships</h3>
              <p className="text-gray-600">
                We believe in building genuine, long-term relationships with our clients. We take the time to understand your business and become a trusted partner in your success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence in Execution</h3>
              <p className="text-gray-600">
                We're committed to delivering high-quality work that exceeds expectations. We take pride in our attention to detail and dedication to craftsmanship in everything we create.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cultural Awareness</h3>
              <p className="text-gray-600">
                We honor and respect the rich cultural diversity of Aotearoa New Zealand. Our work is informed by an understanding of Te Ao Māori and the multicultural fabric of our community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of digital trends and technologies to provide our clients with solutions that are not just current, but forward-thinking.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible business practices and help our clients implement digital solutions that reduce their environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Meet Our Team"
            subtitle="The talented professionals behind Aroha Creatives"
            accentColor="purple"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our West Auckland Home</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Located in the heart of Te Atatu Peninsula, our office reflects our connection to the local community. The stunning views of the Waitematā Harbour and Auckland city skyline inspire our creativity every day.
              </p>
              <p className="text-gray-600 mb-8">
                We're proud to be part of West Auckland's growing business community and to contribute to the vibrant, diverse culture of our region.
              </p>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
              >
                Visit Our Office
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              {/* This would typically be a Google Map embed */}
              {/* For now, using a placeholder image of Te Atatu Peninsula */}
              <img 
                src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Te Atatu Peninsula" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business thrive in the digital world.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-teal-800 font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;