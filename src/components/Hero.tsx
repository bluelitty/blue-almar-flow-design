
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-hero-pattern bg-cover bg-center flex items-center"
    >
      <div className="container mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            Innovative Water Solutions for a Sustainable Future
          </h1>
          <p className="text-xl mb-8 text-bluelitty-white opacity-90 animate-fade-in">
            Bluelitty specializes in cutting-edge desalination technology and water management solutions to address global water scarcity challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary">
              Our Solutions
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
