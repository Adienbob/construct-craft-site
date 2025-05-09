
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCategory = "all" | "residential" | "commercial" | "industrial" | "infrastructure";

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  location: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Oceanview Residences",
    category: "residential",
    description: "Luxury apartment complex featuring 120 units with premium amenities and sustainable design elements.",
    location: "Miami, FL",
    year: "2023",
  },
  {
    id: 2,
    title: "Central Business Tower",
    category: "commercial",
    description: "30-story office building with state-of-the-art facilities and LEED Gold certification.",
    location: "Chicago, IL",
    year: "2022",
  },
  {
    id: 3,
    title: "Riverside Manufacturing Plant",
    category: "industrial",
    description: "Advanced manufacturing facility designed for efficiency and minimal environmental impact.",
    location: "Detroit, MI",
    year: "2021",
  },
  {
    id: 4,
    title: "Highland Community Homes",
    category: "residential",
    description: "Mixed-use residential development with 45 single-family homes and community amenities.",
    location: "Portland, OR",
    year: "2023",
  },
  {
    id: 5,
    title: "Metro Shopping Center",
    category: "commercial",
    description: "Modern retail complex featuring 35 stores, restaurants, and entertainment venues.",
    location: "Atlanta, GA",
    year: "2022",
  },
  {
    id: 6,
    title: "Harbor Bridge Renovation",
    category: "infrastructure",
    description: "Critical infrastructure project enhancing safety and extending the lifespan of a major bridge.",
    location: "Seattle, WA",
    year: "2021",
  },
  {
    id: 7,
    title: "Greenview Apartments",
    category: "residential",
    description: "Sustainable apartment complex with 80 units, powered by renewable energy sources.",
    location: "Denver, CO",
    year: "2023",
  },
  {
    id: 8,
    title: "Tech Innovation Campus",
    category: "commercial",
    description: "Corporate campus with multiple buildings designed for collaboration and innovation.",
    location: "Austin, TX",
    year: "2022",
  },
  {
    id: 9,
    title: "Logistics Distribution Center",
    category: "industrial",
    description: "Large-scale logistics facility optimized for efficiency and rapid distribution.",
    location: "Louisville, KY",
    year: "2021",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-construction-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              Explore our portfolio of construction excellence across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(["all", "residential", "commercial", "industrial", "infrastructure"] as ProjectCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-construction-navy hover:bg-construction-navy/90" 
                  : "hover:bg-construction-navy/10"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card group">
                {/* Placeholder for project images - users will add their own */}
                <div className="bg-gray-200 h-64 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                
                <Card className="border-t-0 rounded-t-none">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="bg-construction-yellow text-construction-navy text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-construction-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-construction-yellow mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
                </svg>
                <p className="text-gray-600 mb-6">
                  "BuildMaster Construction exceeded our expectations on every level. Their team was professional,
                  attentive to detail, and delivered our project on time and within budget."
                </p>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Innovate Tech</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-construction-yellow mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
                </svg>
                <p className="text-gray-600 mb-6">
                  "Working with BuildMaster on our commercial development was a fantastic experience. Their communication
                  was excellent and they handled challenges with expert skill."
                </p>
                <div>
                  <p className="font-bold">Michael Reeves</p>
                  <p className="text-sm text-gray-500">Director, Urban Development Group</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-construction-yellow mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
                </svg>
                <p className="text-gray-600 mb-6">
                  "The quality of workmanship and attention to detail that BuildMaster provided on our new home 
                  was exceptional. We couldn't be happier with the results."
                </p>
                <div>
                  <p className="font-bold">David and Emily Chen</p>
                  <p className="text-sm text-gray-500">Residential Clients</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to life.
          </p>
          <Button className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-navy">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;
