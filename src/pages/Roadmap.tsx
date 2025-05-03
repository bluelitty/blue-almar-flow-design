import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Target, Leaf, Globe, Brain, Users, Award } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isFuture?: boolean;
  image?: string;
}

const Roadmap = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timelineItems: TimelineItem[] = [
    {
      year: "2016",
      title: "Foundation of Bluelitty",
      description: "Established with the vision to address water scarcity through innovative water management and desalination solutions, beginning operations with a focus on the Gulf region.",
      icon: <MapPin className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1622038492607-09fe4337d2ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2017",
      title: "First Successful Desalination Project",
      description: "Completed first large-scale desalination project, supplying clean, potable water to remote areas, setting the foundation for future growth.",
      icon: <Target className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1625942371755-041f7053aad7?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2018",
      title: "Technological Advancements",
      description: "Introduced state-of-the-art desalination technologies that reduced energy consumption, making operations more sustainable and cost-effective.",
      icon: <Brain className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1565777181213-6277d0a9857f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2019",
      title: "Strategic Partnerships",
      description: "Formed key partnerships with governments and private enterprises in the Gulf and other water-scarce regions, expanding our market presence.",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1544509396-2a3b0a7a3b6f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2020",
      title: "Water Recycling Solutions",
      description: "Launched innovative water recycling projects aimed at reducing environmental impact and increasing the efficiency of water use in urban centers.",
      icon: <Leaf className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1553413077-190331f48813?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2021",
      title: "Expanded Operations",
      description: "Expanded footprint beyond the Gulf, entering into agreements with countries in Southeast Asia and Africa, where water scarcity was a growing concern.",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1617262003351-2a03713c9ea7?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2022",
      title: "Sustainability Milestone",
      description: "Achieved a significant milestone by incorporating solar energy in our desalination processes, reducing the carbon footprint of our operations.",
      icon: <Leaf className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Increased presence in high-demand markets and began laying the groundwork for entry into more water-scarce regions globally.",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2024",
      title: "Innovation & Future Focus",
      description: "At the forefront of cutting-edge desalination and water management technologies, setting the stage for future global leadership in sustainable water solutions.",
      icon: <Brain className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2025",
      title: "Smart Water Systems Integration",
      description: "Developing and deploying advanced smart water management systems that utilize sensors, AI, and machine learning to optimize water distribution, reduce waste, and enhance monitoring of water quality in real-time.",
      icon: <Brain className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2026",
      title: "First Fully AI-Driven Desalination Plant",
      description: "Launching first desalination plant that runs entirely on AI and automation, optimizing energy use, water output, and operational efficiency without human intervention.",
      icon: <Brain className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2027",
      title: "Regional Water Sustainability Initiatives",
      description: "Expanding into Latin America and Eastern Europe, bringing sustainable water management solutions to regions facing significant water scarcity.",
      icon: <Globe className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2028",
      title: "Global Leadership in Water Innovation",
      description: "Becoming a global leader in water technology, pioneering the use of hybrid desalination technologies for maximum energy efficiency and minimal environmental impact.",
      icon: <Award className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2029",
      title: "Community Water Programs",
      description: "Launching initiatives aimed at providing affordable, sustainable water solutions to underserved communities in remote and rural areas across Africa and Asia.",
      icon: <Users className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2030",
      title: "Carbon-Neutral Operations",
      description: "Achieving carbon-neutral status across all operations, powered entirely by renewable energy, and leading a global network dedicated to solving water scarcity challenges.",
      icon: <Leaf className="w-6 h-6" />,
      isFuture: true,
      image: "https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-bluelitty-navy to-bluelitty-blue">
      <Header />
      {/* Timeline Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto">
          {/* Roadmap Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Bluelitty Roadmap</h2>
            {/* <p className="text-lg text-white/80 max-w-2xl mx-auto">Explore our journey and future vision, from our foundation to global leadership in water innovation.</p> */}
          </div>
          <div className="relative">
            {/* Curvy Roadmap Line */}
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none"
              viewBox="0 0 100 2200"
              preserveAspectRatio="none"
            >
              <path
                d="M50,0 Q90,100 50,200 Q10,300 50,400 Q90,500 50,600 Q10,700 50,800 Q90,900 50,1000 Q10,1100 50,1200 Q90,1300 50,1400 Q10,1500 50,1600 Q90,1700 50,1800 Q10,1900 50,2000 Q90,2100 50,2200"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Timeline Items */}
            <div className="space-y-24">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                >
                  {/* Year */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-1/2 ml-4' : 'right-1/2 mr-4'
                    }`}>
                    <div className="bg-white text-bluelitty-navy px-4 py-2 rounded-lg font-semibold">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'ml-8' : 'mr-8'
                    }`}>
                    <div className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg ${item.isFuture ? 'border-2 border-dashed border-white' : ''
                      }`}>
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-bluelitty-blue/20 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-bluelitty-navy">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-bluelitty-gray mb-4">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="mt-4 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap; 