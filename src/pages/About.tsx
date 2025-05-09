
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Carpenter",
    title: "CEO & Founder",
    bio: "With over 30 years of experience in the construction industry, John leads our company with visionary expertise and unwavering commitment to quality.",
  },
  {
    name: "Sarah Builder",
    title: "Chief Operations Officer",
    bio: "Sarah oversees all project operations, ensuring that every construction project is delivered on time, within budget, and to the highest standards.",
  },
  {
    name: "Michael Stone",
    title: "Chief Architect",
    bio: "Michael brings creative vision and technical expertise to our projects, designing innovative structures that are both beautiful and functional.",
  },
  {
    name: "Lisa Concrete",
    title: "Project Manager",
    bio: "Lisa's attention to detail and exceptional organizational skills ensure that our projects proceed smoothly from planning to completion.",
  },
];

const values = [
  {
    title: "Quality",
    description: "We never compromise on quality, using only the best materials and methods for every project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Safety",
    description: "Safety is our top priority, with rigorous protocols to protect our workers, clients, and the public.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices that build trust.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and methods to improve efficiency and outcomes for our clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-construction-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BuildMaster Construction</h1>
            <p className="text-xl text-white/80">
              Building excellence through quality craftsmanship, innovative solutions, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1998, BuildMaster Construction began as a small residential construction company with a big vision. 
                Our founder, John Carpenter, believed in delivering exceptional quality and service to every client, regardless of the project size.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past 25 years, we've grown into a full-service construction company, handling projects across residential, 
                commercial, and industrial sectors. Our growth has been built on a foundation of quality workmanship, integrity, 
                and a commitment to client satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, we employ over 150 skilled professionals and have completed more than 500 projects. 
                Despite our growth, we maintain the same core values that have guided us from the beginning: 
                quality, safety, integrity, and innovation.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {/* Placeholder for company image */}
              <div className="text-gray-600 text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p>Company History Image<br/>(Add your image here)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-construction-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-construction-navy mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company with expertise and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-construction-lightgray p-6 rounded-lg text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-construction-navy font-medium mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're committed to bringing your construction vision to life with expertise and excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/projects">
              <Button className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-navy">
                View Our Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-construction-navy">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
