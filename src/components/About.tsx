
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="bg-plant-pattern bg-cover bg-center h-96 rounded-lg shadow-xl"></div>
          
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Bluelitty</h2>
            
            <p className="text-bluelitty-gray mb-6">
              Bluelitty is a leading provider of innovative water solutions, specializing in desalination technology and water management systems. We're committed to addressing global water scarcity challenges through cutting-edge technology, sustainable practices, and expert consultation.
            </p>
            
            <p className="text-bluelitty-gray mb-6">
              Our team of engineers, scientists, and water specialists brings decades of combined experience to develop tailored solutions for communities, industries, and governments worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-bluelitty-blue">Our Mission</h4>
                <p className="text-bluelitty-gray">
                  To provide accessible, sustainable water solutions that empower communities and industries to thrive in a water-scarce world.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-bluelitty-blue">Our Vision</h4>
                <p className="text-bluelitty-gray">
                  A world where clean water is accessible to all through innovative technology and sustainable resource management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
