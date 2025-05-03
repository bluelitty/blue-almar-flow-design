import React from 'react';
import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Bluelitty is committed to a future where every community enjoys clean, affordable, and sustainable water. As leaders in water management and desalination, we strive to protect global water resources and combat scarcity through cutting-edge innovation, advanced technologies, and a steadfast dedication to environmental stewardship and service excellence.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Bluelitty revolutionizes water management with cutting-edge desalination and sustainable solutions. Our mission is to deliver dependable, high-quality water to Gulf nations and water-scarce regions. Through innovation, environmental responsibility, and customer-centric excellence, we strive to eliminate water scarcity as a barrier to economic growth, public health, and sustainable prosperity.
            </p>
          </motion.div>
        </div>

        {/* Legality & Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Legality & Certification</h3>
          <p className="text-gray-600 mb-6">Bluelitty is fully certified and compliant with international standards. Download our official certificate below.</p>
          <div className="flex flex-col items-center">
            <img
              src="/certificate/bluelitty-certificate.jpg"
              alt="Bluelitty Certificate"
              className="w-full max-w-xs rounded-lg shadow mb-4 border"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/350x500?text=Certificate+Preview'; }}
            />
            <a
              href="/certificate/bluelitty-certificate.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Download Certificate (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission; 