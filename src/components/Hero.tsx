import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const images = [
  {
    url: 'https://almarwater.com/wp-content/uploads/2023/05/fondo-index.png'
  },
  {
    url: 'https://almarwater.com/wp-content/uploads/2023/07/nuevo-slide-aws-1.jpg'
  },
  {
    url: 'https://almarwater.com/wp-content/uploads/2023/07/nuevo-slide-aws-3.jpg'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Carousel Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              y,
              backgroundImage: `url(${images[currentIndex].url})`
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

      {/* Content */}
      <div className="relative container mx-auto h-screen flex items-center">
        <motion.div
          className="max-w-2xl text-white"
          style={{ opacity }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Transforming water into wealth
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Bluelitty specializes in cutting-edge desalination technology and water management solutions to address global water scarcity challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary">
              Our Solutions
              <ArrowRight size={18} className="ml-2" />
            </a>

          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
