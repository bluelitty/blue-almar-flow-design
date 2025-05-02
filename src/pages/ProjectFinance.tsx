
import { Briefcase, TrendingUp, Activity } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectFinance = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&q=80')" 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Project Finance & Development
            </h1>
            <p className="text-xl mb-8 text-bluelitty-white opacity-90">
              We provide innovative financial solutions and tailored development strategies for water infrastructure projects worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-bluelitty-navy mb-8 leading-relaxed">
              At Bluelitty, we specialize in developing and financing water infrastructure projects that address critical water challenges around the world. Our team brings decades of experience in project finance, development, and implementation.
            </p>
            
            <Separator className="my-12" />
            
            {/* Key Services */}
            <h2 className="text-3xl font-bold mb-10 text-bluelitty-navy">Our Financial Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Structuring</h3>
                <p className="text-bluelitty-gray">
                  We develop optimal financial and legal structures for water infrastructure projects, ensuring viability and maximum returns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Modeling</h3>
                <p className="text-bluelitty-gray">
                  Our detailed financial models analyze project feasibility, optimize capital structures, and forecast long-term financial performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-bluelitty-blue mb-4">
                  <Activity className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-bluelitty-gray">
                  We identify, assess, and mitigate risks throughout the project lifecycle to protect investments and ensure project success.
                </p>
              </div>
            </div>
            
            <Separator className="my-12" />
            
            {/* Development Approach */}
            <h2 className="text-3xl font-bold mb-6 text-bluelitty-navy">Our Development Approach</h2>
            <p className="text-lg text-bluelitty-gray mb-8">
              We employ a comprehensive, four-phase approach to water infrastructure development:
            </p>
            
            <div className="space-y-8">
              <div className="bg-bluelitty-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">1. Project Identification & Feasibility</h3>
                <p className="text-bluelitty-gray">
                  We identify promising opportunities and conduct thorough technical, financial, and environmental feasibility studies to evaluate project viability.
                </p>
              </div>
              
              <div className="bg-bluelitty-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">2. Structuring & Development</h3>
                <p className="text-bluelitty-gray">
                  Our team develops detailed project specifications, secures necessary permits, and creates optimal financial structures to attract investment.
                </p>
              </div>
              
              <div className="bg-bluelitty-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">3. Financing & Implementation</h3>
                <p className="text-bluelitty-gray">
                  We secure financing from various sources, including private equity, debt facilities, and public funding, then oversee project implementation.
                </p>
              </div>
              
              <div className="bg-bluelitty-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">4. Operation & Optimization</h3>
                <p className="text-bluelitty-gray">
                  Post-completion, we ensure optimal operational performance through continuous monitoring, maintenance programs, and strategic improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectFinance;
