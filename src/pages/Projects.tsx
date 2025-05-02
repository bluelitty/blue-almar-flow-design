
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Project {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  category: 'desalination' | 'wastewater' | 'management';
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      name: "Al Khafji Desalination Plant",
      location: "Saudi Arabia",
      description: "Large-scale solar-powered seawater reverse osmosis desalination facility serving coastal communities.",
      image: "https://images.unsplash.com/photo-1622038492607-09fe4337d2ff?auto=format&fit=crop&q=80&w=800",
      capacity: "210,000 m³/day",
      category: 'desalination',
    },
    {
      id: 2,
      name: "Sohar Water Treatment",
      location: "Oman",
      description: "Industrial wastewater treatment and recycling facility supporting manufacturing operations.",
      image: "https://images.unsplash.com/photo-1625942371755-041f7053aad7?auto=format&fit=crop&q=80&w=800",
      capacity: "95,000 m³/day",
      category: 'wastewater',
    },
    {
      id: 3,
      name: "Lima Metropolitan System",
      location: "Peru",
      description: "Comprehensive water management system providing potable water for urban populations.",
      image: "https://images.unsplash.com/photo-1565777181213-6277d0a9857f?auto=format&fit=crop&q=80&w=800",
      capacity: "180,000 m³/day",
      category: 'management',
    },
    {
      id: 4,
      name: "Mombasa Coastal Project",
      location: "Kenya",
      description: "Sustainable desalination solution addressing water scarcity in East African coastal regions.",
      image: "https://images.unsplash.com/photo-1544509396-2a3b0a7a3b6f?auto=format&fit=crop&q=80&w=800",
      capacity: "100,000 m³/day",
      category: 'desalination',
    },
    {
      id: 5,
      name: "Phoenix Wastewater Recovery",
      location: "United States",
      description: "Advanced wastewater treatment facility with water reclamation for agricultural irrigation.",
      image: "https://images.unsplash.com/photo-1553413077-190331f48813?auto=format&fit=crop&q=80&w=800",
      capacity: "75,000 m³/day",
      category: 'wastewater',
    },
    {
      id: 6,
      name: "Singapore Integrated Water",
      location: "Singapore",
      description: "Comprehensive water management system combining desalination, reclamation, and conservation.",
      image: "https://images.unsplash.com/photo-1617262003351-2a03713c9ea7?auto=format&fit=crop&q=80&w=800",
      capacity: "250,000 m³/day",
      category: 'management',
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[60vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80')" 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Projects & Companies
            </h1>
            <p className="text-xl mb-8 text-bluelitty-white opacity-90">
              Discover our global portfolio of innovative water solutions and the companies that bring them to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-bluelitty-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'desalination' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('desalination')}
            >
              Desalination
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'wastewater' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('wastewater')}
            >
              Wastewater Treatment
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'management' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('management')}
            >
              Water Management
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="flex items-center text-bluelitty-gray">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-bluelitty-gray">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm text-bluelitty-blue font-semibold">{project.capacity}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-bluelitty-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-bluelitty-navy">Our Companies</h2>
          
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bluelitty-navy">Bluelitty Desalination</h3>
              <p className="text-bluelitty-gray mb-6">
                A specialist company focused on designing, building, and operating state-of-the-art desalination plants globally, addressing water scarcity through innovative technologies.
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-bluelitty-blue">12 active projects • 4 countries • 500+ employees</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bluelitty-navy">Bluelitty Solutions</h3>
              <p className="text-bluelitty-gray mb-6">
                Providing comprehensive water management consultancy services for municipalities, industries, and agricultural sectors with a focus on sustainability and efficiency.
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-bluelitty-blue">25+ consulting projects • 10 countries • 120 specialists</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-bluelitty-navy">Bluelitty Tech</h3>
              <p className="text-bluelitty-gray mb-6">
                The research and development arm of our organization, focusing on next-generation water treatment technologies, data analytics, and IoT solutions for water infrastructure.
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-bluelitty-blue">15 patents • 8 technologies in development • 50 engineers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
