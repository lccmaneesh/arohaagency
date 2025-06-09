import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';
import { testimonialsData } from '../data/testimonials';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudiesData.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link 
            to="/portfolio" 
            className="px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const testimonial = caseStudy.testimonial ? testimonialsData.find(t => t.id === caseStudy.testimonial) : null;

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/portfolio" className="inline-flex items-center text-teal-300 hover:text-white transition-colors mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-600/80 rounded-full text-sm font-semibold mb-4">
                {caseStudy.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-gray-200 mb-6">
                {caseStudy.description}
              </p>
              <div className="text-teal-300">
                <span className="font-semibold">Client:</span> {caseStudy.client}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={caseStudy.imageUrl} 
                alt={caseStudy.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Results & Impact</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The measurable outcomes and positive impact our solution delivered for {caseStudy.client}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <CheckCircle size={24} className="text-green-600 mt-1 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Gallery</h2>
              <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.galleryImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} gallery image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 bg-gradient-to-br from-purple-900 to-teal-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Quote size={48} className="text-teal-400 opacity-50 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-light italic mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-teal-300">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData
              .filter(cs => cs.id !== caseStudy.id)
              .slice(0, 3)
              .map((relatedCase) => (
                <Link 
                  key={relatedCase.id}
                  to={`/portfolio/${relatedCase.slug}`}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={relatedCase.imageUrl} 
                      alt={relatedCase.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="mb-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-600/80">
                          {relatedCase.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{relatedCase.title}</h3>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {relatedCase.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center group text-teal-700 font-medium hover:text-teal-800 transition-colors"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready for Similar Results?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve success like {caseStudy.client}.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;