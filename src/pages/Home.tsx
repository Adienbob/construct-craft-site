
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Residential Construction",
    description: "Building homes with exceptional quality, attention to detail, and craftsmanship.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Construction",
    description: "Building inspiring commercial spaces that drive business success and growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Industrial Construction",
    description: "Specialized construction services for manufacturing, processing and industrial facilities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description: "Expert project management that delivers construction projects on time and within budget.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Skilled Employees" },
  { value: "98%", label: "Client Satisfaction" },
];

const Home = () => {
  return (
    <>
      {/* Hero section with video background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background - users will add this later */}
        <div className="absolute inset-0 bg-construction-navy/80 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 animate-fade-in">
            Building Excellence, <span className="text-construction-yellow">Constructing Future</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            We deliver high-quality construction services with a focus on innovation, 
            sustainability, and client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
            <Link to="/projects">
              <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-navy">
                View Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-construction-navy">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-8 left-0 right-0 mx-auto animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 animate-lift border-t-4 border-construction-yellow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-construction-navy mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about">
              <Button className="bg-construction-navy hover:bg-construction-navy/90">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-16 bg-construction-yellow text-construction-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="text-lg font-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 md:py-24 bg-construction-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your next construction project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-navy">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
