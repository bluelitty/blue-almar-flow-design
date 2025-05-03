import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Bluelitty Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Why Bluelitty?</h2>
              <div className="text-lg text-gray-700 space-y-6">
                <p>
                  With the global demand for clean, accessible water rising, the industry presents significant growth opportunities. Bluelitty's strong track record, strategic expansion, and commitment to excellence provide investors with confidence in sustainable, long-term returns.
                </p>
                <p>
                  Investing in Bluelitty means joining a visionary, sustainable, and socially responsible initiative addressing one of the world's most critical challenges—water scarcity. As a leader in innovative desalination and water management solutions, Bluelitty is committed to delivering long-term, impactful change.
                </p>
                <p>
                  Bluelitty's commitment to innovation extends beyond water solutions—we are also embracing the future of finance by accepting cryptocurrency payments from our retail customers. This strategic move aligns with our vision of sustainable growth and global accessibility, reinforcing the investment potential in Bluelitty.
                </p>
              </div>
            </div>
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://www.bluelitty.com/assets/ab2.8c02c08d.jpg"
                alt="Global Water Investment"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="text-xl font-semibold mb-1">A Visionary Investment</h4>
                <p className="text-white/90 text-sm">Bluelitty: Leading the future of water and finance</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://www.bluelitty.com/assets/ab1.4061794c.jpg"
                alt="Desalination Technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2">State-of-the-Art Technology</h4>
                <p className="text-white/90">Advanced desalination systems with cutting-edge features</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Why Choose Us as Your Trusted Seawater Desalination Partner?</h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Extensive Expertise</h4>
                  <p className="text-gray-600">Over 9 years of hands-on experience in desalination and industrial water treatment solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h4>
                  <p className="text-gray-600">Successfully exported systems to more than 20 countries worldwide.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Safety & Reliability</h4>
                  <p className="text-gray-600">Automatic fault detection, alarm systems, and automatic shutdown functions for enhanced safety. Mechanical components have a mean trouble-free working time (MTBF) ≥ 10,000 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What We Do</h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Seawater Desalination Plants</h4>
                  <p className="text-gray-600">Converting seawater into potable water using advanced Reverse Osmosis (RO) technology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Forward Osmosis Systems</h4>
                  <p className="text-gray-600">Innovative desalting systems utilizing osmotic pressure for efficient water purification.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Industrial Effluent Treatment</h4>
                  <p className="text-gray-600">Specialized plants for industries with high-salinity wastewater like pharmaceuticals, textiles, tanneries, and chemical industries.</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://www.bluelitty.com/assets/ab4.bddf0251.jpg"
                alt="Industrial Water Treatment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2">Industrial Solutions</h4>
                <p className="text-white/90">Customized water treatment for various industries</p>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-gray-600 mt-12">
            Our desalination systems produce between 1,000 gallons to over 100,000 gallons of potable water per hour, catering to both small- and large-scale requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
