
import { Handshake, TrendingUp, Target } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MergerAcquisitions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[60vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&q=80')" 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Merger & Acquisitions
            </h1>
            <p className="text-xl mb-8 text-bluelitty-white opacity-90">
              Strategic growth through careful acquisition and integration of complementary water technology businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-bluelitty-navy mb-8 leading-relaxed">
              At Bluelitty, we pursue strategic mergers and acquisitions to enhance our technological capabilities, expand our geographical reach, and strengthen our position as a global leader in water solutions. Our M&A strategy focuses on identifying high-potential companies that complement our core business.
            </p>
            
            <Separator className="my-12" />
            
            <h2 className="text-3xl font-bold mb-10 text-bluelitty-navy">Our M&A Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Targeting</h3>
                <p className="text-bluelitty-gray">
                  We identify acquisition targets that align with our long-term vision and offer complementary technologies, market access, or operational synergies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <Handshake className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integration Excellence</h3>
                <p className="text-bluelitty-gray">
                  Our disciplined integration process ensures smooth transitions, preserves value, and accelerates the realization of synergies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Value Creation</h3>
                <p className="text-bluelitty-gray">
                  We focus on creating lasting value through strategic acquisitions that enhance our capabilities and deliver sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 bg-bluelitty-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-bluelitty-navy">Strategic Focus Areas</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">Advanced Technology</h3>
                <p className="text-bluelitty-gray">
                  We seek acquisitions that bring innovative water treatment technologies, particularly in areas such as membrane technology, energy efficiency, digital monitoring, and smart water management.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">Geographical Expansion</h3>
                <p className="text-bluelitty-gray">
                  We target companies with established operations in strategic markets where water scarcity presents significant opportunities for our solutions, allowing us to expand our global footprint efficiently.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">Vertical Integration</h3>
                <p className="text-bluelitty-gray">
                  We pursue opportunities to integrate vertically along the water value chain, from component manufacturing to operations and maintenance services, enhancing our ability to deliver comprehensive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Acquisitions */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-bluelitty-navy">Recent Acquisitions</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-bluelitty-navy">AquaTech Systems</h3>
                  <span className="text-bluelitty-gray">Completed Q2 2023</span>
                </div>
                <p className="text-bluelitty-gray mb-4">
                  A leading provider of advanced membrane technology for industrial water treatment, expanding our capabilities in high-efficiency filtration solutions.
                </p>
                <Separator className="my-4" />
                <div className="flex justify-between text-sm">
                  <span>Headquarters: Singapore</span>
                  <span>Employees: 120+</span>
                  <span>Market: Asia-Pacific</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-bluelitty-navy">HydroControl GmbH</h3>
                  <span className="text-bluelitty-gray">Completed Q4 2022</span>
                </div>
                <p className="text-bluelitty-gray mb-4">
                  A German engineering firm specializing in IoT-based monitoring systems for water treatment facilities, strengthening our digital infrastructure offerings.
                </p>
                <Separator className="my-4" />
                <div className="flex justify-between text-sm">
                  <span>Headquarters: Munich, Germany</span>
                  <span>Employees: 85</span>
                  <span>Market: Europe</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-bluelitty-navy">Desert Water Solutions</h3>
                  <span className="text-bluelitty-gray">Completed Q1 2022</span>
                </div>
                <p className="text-bluelitty-gray mb-4">
                  A Middle Eastern company with proprietary solar-powered desalination technology, expanding our renewable energy integration capabilities.
                </p>
                <Separator className="my-4" />
                <div className="flex justify-between text-sm">
                  <span>Headquarters: Dubai, UAE</span>
                  <span>Employees: 150</span>
                  <span>Market: Middle East & North Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-bluelitty-navy text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Partnership Opportunities?</h2>
            <p className="text-xl mb-8 text-bluelitty-light">
              If you represent a water technology company with innovative solutions and are interested in exploring partnership or acquisition opportunities, we'd like to hear from you.
            </p>
            <a 
              href="#contact" 
              className="bg-white hover:bg-bluelitty-light text-bluelitty-navy px-8 py-3 rounded-md transition-colors duration-300 inline-block font-medium"
            >
              Contact Our M&A Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MergerAcquisitions;
