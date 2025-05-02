
import { BarChart3, Shield, RefreshCw } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AssetManagement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[60vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')" 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Asset Management
            </h1>
            <p className="text-xl mb-8 text-bluelitty-white opacity-90">
              Maximizing efficiency, performance, and longevity of water infrastructure investments through strategic management.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-bluelitty-navy mb-8 leading-relaxed">
              Bluelitty's asset management services ensure that water treatment facilities operate at peak efficiency throughout their lifecycle. Our comprehensive approach combines engineering excellence with financial optimization to deliver maximum value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bluelitty-blue">
                <h3 className="text-xl font-semibold mb-4 text-bluelitty-navy">Managed Assets</h3>
                <p className="text-3xl font-bold text-bluelitty-blue">$1.2B+</p>
                <p className="text-bluelitty-gray mt-2">Total asset value under management</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bluelitty-blue">
                <h3 className="text-xl font-semibold mb-4 text-bluelitty-navy">Treatment Capacity</h3>
                <p className="text-3xl font-bold text-bluelitty-blue">2.4M m³/day</p>
                <p className="text-bluelitty-gray mt-2">Water processed through managed facilities</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bluelitty-blue">
                <h3 className="text-xl font-semibold mb-4 text-bluelitty-navy">Operational Uptime</h3>
                <p className="text-3xl font-bold text-bluelitty-blue">99.8%</p>
                <p className="text-bluelitty-gray mt-2">Average facility availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-bluelitty-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-bluelitty-navy">Our Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-bluelitty-blue mb-4">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-bluelitty-gray">
                We continuously monitor and improve operational efficiency, reducing energy consumption and optimizing water production costs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-bluelitty-blue mb-4">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Preventive Maintenance</h3>
              <p className="text-bluelitty-gray">
                Our proactive maintenance strategies extend equipment life, reduce downtime, and prevent costly emergency repairs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-bluelitty-blue mb-4">
                <RefreshCw className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifecycle Management</h3>
              <p className="text-bluelitty-gray">
                From commissioning to decommissioning, we manage the complete lifecycle of water treatment assets for maximum return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-bluelitty-navy">Performance Metrics</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-bluelitty-navy font-medium">Energy Efficiency</span>
                  <span className="text-bluelitty-blue font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                <p className="text-sm text-bluelitty-gray mt-2">
                  Our facilities operate at 92% of theoretical energy efficiency, 15% above industry average.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-bluelitty-navy font-medium">Water Quality Compliance</span>
                  <span className="text-bluelitty-blue font-medium">99.9%</span>
                </div>
                <Progress value={99.9} className="h-2" />
                <p className="text-sm text-bluelitty-gray mt-2">
                  Our water treatment facilities consistently exceed regulatory quality standards.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-bluelitty-navy font-medium">Cost Optimization</span>
                  <span className="text-bluelitty-blue font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-sm text-bluelitty-gray mt-2">
                  Our management reduces operational costs by up to 15% compared to standard operations.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-bluelitty-navy font-medium">Sustainable Practices</span>
                  <span className="text-bluelitty-blue font-medium">90%</span>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-sm text-bluelitty-gray mt-2">
                  Environmental sustainability score based on emissions, waste, and resource utilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-bluelitty-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-bluelitty-navy">Case Study</h2>
            <h3 className="text-2xl font-semibold mb-4 text-bluelitty-blue">Coastal Desalination Facility</h3>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-bluelitty-gray mb-6">
                When Bluelitty took over management of a major coastal desalination facility, it was operating at 72% efficiency with frequent unplanned downtime. Within 18 months of implementing our asset management program:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-bluelitty-navy mb-2">Before Bluelitty Management:</h4>
                  <ul className="list-disc pl-5 text-bluelitty-gray space-y-2">
                    <li>72% operational efficiency</li>
                    <li>Monthly unplanned downtime of 38 hours</li>
                    <li>Energy consumption of 4.8 kWh/m³</li>
                    <li>Production cost of $1.25/m³</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-bluelitty-navy mb-2">After Bluelitty Management:</h4>
                  <ul className="list-disc pl-5 text-bluelitty-gray space-y-2">
                    <li>91% operational efficiency</li>
                    <li>Monthly unplanned downtime reduced to 4 hours</li>
                    <li>Energy consumption reduced to 3.6 kWh/m³</li>
                    <li>Production cost reduced to $0.92/m³</li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <p className="text-bluelitty-navy font-medium">
                The result: 26% increase in efficiency, 89% reduction in downtime, and 26% cost savings, delivering an exceptional return on investment for the facility owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssetManagement;
