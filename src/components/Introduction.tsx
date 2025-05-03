import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading the Way in Water Desalination Technology
            </h2>
            <p className="text-xl text-gray-600">
              Transforming seawater into sustainable solutions for a water-scarce world
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/desalination-plant-1.jpg"
                  alt="Desalination Plant Overview"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://almarwater.com/wp-content/uploads/2023/05/capa.png";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">State-of-the-Art Desalination Plant</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/water-treatment.jpg"
                    alt="Water Treatment Process"
                    className="w-full h-[200px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://almarwater.com/wp-content/uploads/2025/03/noticias-home-soldadura.jpg"
                    }}
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/industrial-application.jpg"
                    alt="Industrial Application"
                    className="w-full h-[200px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://almarwater.com/wp-content/uploads/2023/05/capa-1.png"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Bluelitty</h3>
                <p className="text-gray-600 mb-4">
                  Bluelitty is a Desalination and Water management company based in the United Kingdom, specializing in desalination and water management solutions. Our mission is to address global water scarcity by providing sustainable, innovative technologies that transform seawater into clean, drinkable water and ensure efficient water usage in diverse industries.
                </p>
                <p className="text-gray-600">
                  At Bluelitty, we are committed to eco-friendly practices and energy-efficient systems, making it possible to tackle water challenges while minimizing environmental impact. Our team of engineers, scientists, and water management experts work tirelessly to deliver reliable, advanced solutions tailored to meet the unique needs of our clients across the globe.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
                  <div className="text-gray-600">Gallons/Hour Capacity</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>

              {/* CTA */}
              {/* <div className="text-center">
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn more about our solutions
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 