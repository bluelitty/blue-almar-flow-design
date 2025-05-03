import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pricingPlans = [
  {
    name: 'Rural Solutions',
    price: '$50 - $15,000',
    returns: '1.5% ',
    dailyROI: '1.5%',
    referral: '9% ',
    binary: '8% ',
    maturity: '165 days ',
    capping: '$1,500',
    features: [
      'Minimum investment: $50',
      'Maximum investment: $15,000',
      'Daily payouts',
      '24/7 support',
    ],
  },
  {
    name: 'Urban Solutions',
    price: '$15,001 - $60,000',
    returns: '1.9% ',
    dailyROI: '1.9% ',
    referral: '10% ',
    binary: '8% ',
    maturity: '150 days',
    capping: '$3,000',
    features: [
      'Minimum investment: $15,001',
      'Maximum investment: $60,000',
      'Priority support',
      'Higher daily ROI',
    ],
  },
  {
    name: 'Industrial Solutions',
    price: '$60,001 - $150,000',
    returns: '2.4% ',
    dailyROI: '2.4% ',
    referral: '11% ',
    binary: '8% ',
    maturity: '140 days ',
    capping: ' $7,000',
    features: [
      'Minimum investment: $60,001',
      'Maximum investment: $150,000',
      'Personal account manager',
      'Highest ROI & rewards',
    ],
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    text: "Bluelitty is a game-changer! As a network marketer, I'm proud to be part of a company that combines innovation with sustainability. Their commitment to protecting marine life while delivering fresh water is truly inspiring!",
  },
  {
    name: 'James R.',
    text: "I've seen many companies in my career, but Bluelitty stands out with its ethical approach to desalination. Their eco-friendly processes make it easy to promote and share with confidence!",
  },
  {
    name: 'Emily D.',
    text: "Bluelitty's mission to provide clean water without harming marine ecosystems is remarkable. It's fulfilling to be part of something that makes a real impact!",
  },
  {
    name: 'Mark P.',
    text: "Finally, a company that prioritizes both sustainability and profitability! Bluelitty offers an amazing opportunity for network marketers while staying true to its environmental values.",
  },
  {
    name: 'Linda C.',
    text: "Bluelitty is the future of desalination. I love how they integrate responsible practices with cutting-edge technology. A company worth supporting!",
  },
  {
    name: 'Richard T.',
    text: "Being part of Bluelitty has been life-changing. Not only do I earn from a great business model, but I also contribute to a cleaner and healthier planet.",
  },
  {
    name: 'Jessica M.',
    text: "Promoting Bluelitty is effortless because their impact speaks for itself. Ethical, effective, and environmentally conscious—everything a responsible business should be!",
  },
  {
    name: 'Daniel W.',
    text: "Bluelitty sets the standard for sustainable desalination. I admire their dedication to marine conservation while delivering a vital resource to communities worldwide.",
  },
  {
    name: 'Olivia S.',
    text: "I have complete trust in Bluelitty's vision and technology. Knowing they protect marine life while addressing the global water crisis makes me proud to be associated with them!",
  },
  {
    name: 'Michael B.',
    text: "Bluelitty is proof that business and sustainability can go hand in hand. It's refreshing to see a company that truly cares about people and the planet!",
  },
];

const BusinessPlan = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialsPerPage = 3;

  // Auto-scroll carousel every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section
        className="min-h-[60vh] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Business Plan
            </h1>
            <p className="text-xl text-white mb-8">
              At Bluelitty, we believe that solving the global water crisis requires more than groundbreaking technology—it requires collective empowerment. Our business plans are designed to turn participation into prosperity, aligning social impact with individual opportunity. We offer three dynamic income models to ensure our community thrives while transforming water scarcity into a source of stability and success.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 space-y-10">
        <section>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-bluelitty-blue mb-2">1. Daily Stable Returns</h3>
            <p className="text-gray-700">
              Bluelitty offers a consistent, daily return model that transforms your investment into a stream of reliable income. With our data-driven operations and water-as-a-service model, we ensure steady growth backed by real-world infrastructure. It's a low-barrier, high-transparency pathway to join the global clean water revolution—and benefit from it every single day.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-bluelitty-blue mb-2">2. Referral Income</h3>
            <p className="text-gray-700">
              We empower our community to grow with us. Through Bluelitty's referral program, you can earn commission-based income by simply sharing our vision. Every successful referral not only increases your earnings but also expands our impact network, creating more clean water access points around the globe.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-bluelitty-blue mb-2">3. Binary Income & Achievement Rewards</h3>
            <p className="text-gray-700">
              For those who thrive in structured networking, our binary income model offers unmatched potential. As your network expands, so does your earning power—unlocking performance bonuses and achievement rewards along the way. Bluelitty recognizes and celebrates leadership, consistency, and team growth with incentives designed to keep momentum high.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg text-bluelitty-navy font-semibold">
              At Bluelitty, impact pays. Whether you're an investor seeking stability, a connector eager to share opportunity, or a leader ready to build, our business model offers the right platform for you to succeed while making the world a better place.
            </p>
          </div>
        </section>
        {/* Business Plan Narrative Section */}

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bluelitty-navy mb-10 text-center">Investment Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-bluelitty-blue/10 via-white to-bluelitty-navy/5 rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-bluelitty-blue/20 hover:scale-105 hover:shadow-bluelitty-blue/30 hover:border-bluelitty-navy/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative animated background blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-bluelitty-blue/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 z-0" />
                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-2xl font-extrabold text-bluelitty-blue mb-2 tracking-wide drop-shadow-lg">
                    <span className="inline-block px-3 py-1 rounded bg-bluelitty-blue/10 text-bluelitty-blue group-hover:bg-bluelitty-navy/20 transition-colors duration-300">
                      {plan.name}
                    </span>
                  </h3>
                  <div className="text-3xl font-extrabold text-bluelitty-navy mb-1 drop-shadow-sm">
                    {plan.price}
                  </div>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-y-3 gap-x-2 mb-6">
                  <div className="flex items-center text-gray-600"><svg className="w-4 h-4 mr-1 text-bluelitty-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>Daily ROI</div>
                  <div className="font-semibold text-bluelitty-navy text-left flex items-center">{plan.dailyROI}</div>
                  <div className="flex items-center text-gray-600"><svg className="w-4 h-4 mr-1 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>Referral Bonus</div>
                  <div className="font-semibold text-green-700 text-left flex items-center">{plan.referral}</div>
                  <div className="flex items-center text-gray-600"><svg className="w-4 h-4 mr-1 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V9a4 4 0 00-3-3.87M9 4V3a4 4 0 013-3.87" /></svg>Binary Bonus</div>
                  <div className="font-semibold text-purple-700 text-left flex items-center">{plan.binary}</div>
                  <div className="flex items-center text-gray-600"><svg className="w-4 h-4 mr-1 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>Maturity Period</div>
                  <div className="font-semibold text-yellow-700 text-left flex items-center">{plan.maturity}</div>
                  <div className="flex items-center text-gray-600"><svg className="w-4 h-4 mr-1 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" /></svg>Daily Capping</div>
                  <div className="font-semibold text-pink-700 text-left flex items-center">{plan.capping}</div>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <h4 className="font-semibold text-bluelitty-navy mb-2">Investment Range</h4>
                  <ul className="text-gray-600 space-y-1">
                    {plan.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-bluelitty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-bluelitty-blue to-bluelitty-navy text-white rounded-lg font-semibold shadow-lg hover:from-bluelitty-navy hover:to-bluelitty-blue transition-all duration-300"
                  >
                    Invest Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Franchise Plan Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bluelitty-navy mb-10 text-center">Franchise Plans</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-bluelitty-blue text-center mb-2">Bluelitty Unveils Its Franchise Revolution: Aqua Catalyst & Hydro Catalyst Now Open for Partnership</h3>
            <p className="text-lg text-gray-700 text-center mb-2">Aqua Catalyst and Hydro Catalyst mark a bold new chapter in Bluelitty's growth journey.<br />These franchise plans reflect our commitment to scalable impact and water equity.<br />Designed for forward-thinkers, they're built to accelerate regional and global expansion.</p>
            <p className="text-md text-bluelitty-navy text-center font-semibold mb-2">This is more than business it's a movement powered by innovation and purpose.</p>
            <p className="text-md text-bluelitty-navy text-center">The future of sustainable water solutions starts with you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* AQUA CATALYST */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative bg-gradient-to-br from-blue-100 via-white to-bluelitty-blue/10 rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-bluelitty-blue/30 hover:shadow-[0_8px_40px_0_rgba(30,64,175,0.25)] transition-all duration-300 group overflow-hidden"
            >
              {/* Badge/Icon */}
              <div className="absolute -top-6 left-6 flex items-center gap-2 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-bluelitty-blue text-white text-xs font-bold shadow">AQUA</span>
                <svg className="w-6 h-6 text-bluelitty-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg>
              </div>
              <div className="mb-4 mt-2">
                <span className="inline-block bg-bluelitty-blue/10 text-bluelitty-blue font-bold text-lg px-4 py-1 rounded-lg">AQUA CATALYST</span>
              </div>
              <div className="text-2xl font-extrabold text-bluelitty-navy mb-4 bg-blue-50 rounded-lg px-4 py-2 w-fit mx-auto shadow">$15,000</div>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li><span className="font-semibold text-green-700">Referral bonus:</span> 3%</li>
                <li><span className="font-semibold text-blue-700">Reduced withdrawal charges:</span> 5%</li>
                <li><span className="font-semibold text-purple-700">Capping limit increased:</span> $3,000</li>
                <li><span className="font-semibold text-bluelitty-navy">Franchise profile acceleration</span> in the website</li>
                <li><span className="font-semibold text-yellow-700">Capital returns:</span> (some 25%)</li>
                <li><span className="font-semibold text-pink-700">Stable monthly salary:</span> $150 (FD)</li>
              </ul>
            </motion.div>
            {/* HYDRO CATALYST */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-gradient-to-br from-blue-50 via-white to-bluelitty-navy/10 rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-bluelitty-blue/30 hover:shadow-[0_8px_40px_0_rgba(30,64,175,0.25)] transition-all duration-300 group overflow-hidden"
            >
              {/* Badge/Icon */}
              <div className="absolute -top-6 left-6 flex items-center gap-2 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-bluelitty-navy text-white text-xs font-bold shadow">HYDRO</span>
                <svg className="w-6 h-6 text-bluelitty-navy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
              </div>
              <div className="mb-4 mt-2">
                <span className="inline-block bg-bluelitty-navy/10 text-bluelitty-navy font-bold text-lg px-4 py-1 rounded-lg">HYDRO CATALYST</span>
              </div>
              <div className="text-2xl font-extrabold text-bluelitty-navy mb-4 bg-blue-100 rounded-lg px-4 py-2 w-fit mx-auto shadow">$60,000</div>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li><span className="font-semibold text-green-700">Referral bonus:</span> 5%</li>
                <li><span className="font-semibold text-blue-700">Reduced withdrawal charges:</span> 3%</li>
                <li><span className="font-semibold text-purple-700">Capping limit increased:</span> $7,000</li>
                <li><span className="font-semibold text-bluelitty-navy">Franchise profile acceleration</span> in the website</li>
                <li><span className="font-semibold text-yellow-700">Capital returns:</span> (some %)</li>
                <li><span className="font-semibold text-orange-700">15 tickets entry</span> for events & meeting with top representatives and team management</li>
                <li><span className="font-semibold text-pink-700">Stable monthly salary:</span> $500 (FD)</li>
              </ul>
            </motion.div>
          </div>
        </section>
        {/* Career Progression Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bluelitty-navy mb-10 text-center">Achiever Rewards</h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-bluelitty-blue/30">
            <p className="text-xl text-gray-700 mb-6">Investing with Bluelitty is not just about financial gains, it's a journey of personal and professional growth. Our Career Progression program recognizes and rewards your dedication to our shared mission. Reach new milestones, unlock exclusive benefits, and position yourself at the forefront of the Water Desalination Revolution.</p>
            <h4 className="font-semibold text-bluelitty-blue mb-2">Career Achievement Rewards</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-bluelitty-blue/10 rounded-lg">
                <thead>
                  <tr className="bg-bluelitty-blue/10">
                    <th className="px-4 py-2 font-bold text-bluelitty-navy">Rank</th>
                    <th className="px-4 py-2 font-bold text-bluelitty-navy">Left Business</th>
                    <th className="px-4 py-2 font-bold text-bluelitty-navy">Right Business</th>
                    <th className="px-4 py-2 font-bold text-bluelitty-navy">Rewards</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bluelitty-blue/10">
                  <tr>
                    <td className="px-4 py-2">Rank 1</td>
                    <td className="px-4 py-2">$5,000</td>
                    <td className="px-4 py-2">$5,000</td>
                    <td className='px-4 py-w'>$100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 2</td>
                    <td className="px-4 py-2">$25,000</td>
                    <td className="px-4 py-2">$25,000</td>
                    <td className='px-4 py-w'>$1000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 3</td>
                    <td className="px-4 py-2">$50,000</td>
                    <td className="px-4 py-2">$50,000</td>
                    <td className='px-4 py-w'>$2200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 4</td>
                    <td className="px-4 py-2">$80,000</td>
                    <td className="px-4 py-2">$80,000</td>
                    <td className='px-4 py-w'>$3000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 5</td>
                    <td className="px-4 py-2">$125,000</td>
                    <td className="px-4 py-2">$125,000</td>
                    <td className='px-4 py-w'>$6000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 6</td>
                    <td className="px-4 py-2">$300,000</td>
                    <td className="px-4 py-2">$300,000</td>
                    <td className='px-4 py-w'>$9000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 7</td>
                    <td className="px-4 py-2">$500,000</td>
                    <td className="px-4 py-2">$500,000</td>
                    <td className='px-4 py-w'>$15000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 8</td>
                    <td className="px-4 py-2">$1M</td>
                    <td className="px-4 py-2">$1M</td>
                    <td className='px-4 py-w'>$25000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Rank 9</td>
                    <td className="px-4 py-2">$5M</td>
                    <td className="px-4 py-2">$5M</td>
                    <td className='px-4 py-w'>$50000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Withdrawal Information Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bluelitty-navy mb-10 text-center">Withdrawal Information</h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-bluelitty-blue/30 flex flex-col gap-8">
            <div>
              <h4 className="font-semibold text-bluelitty-blue mb-2">ROI Withdrawal</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>You can withdraw the earnings from your investment on the <span className="font-semibold text-bluelitty-navy">1st and 3rd Monday</span> of each month.</li>
                <li>Withdrawal hours are from <span className="font-semibold text-bluelitty-navy">10:00 AM to 6:00 PM (UK time)</span>.</li>
                <li>The minimum withdrawal amount is <span className="font-semibold text-bluelitty-navy">$15 USD</span>.</li>
                <li>A withdrawal fee of <span className="font-semibold text-bluelitty-navy">8%</span> will apply.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-bluelitty-blue mb-2">Bonus Withdrawal</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You can withdraw earnings from your commissions every <span className="font-semibold text-bluelitty-navy">Wednesday</span> of the month.</li>
                <li>Withdrawal hours are from <span className="font-semibold text-bluelitty-navy">10:00 AM to 6:00 PM (UK time)</span>.</li>
                <li>The minimum withdrawal amount is <span className="font-semibold text-bluelitty-navy">$15 USD</span>.</li>
                <li>A withdrawal fee of <span className="font-semibold text-bluelitty-navy">8%</span> will apply.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Testimonial Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bluelitty-navy mb-10 text-center">Bluelitty Testimonials: Trusted by Network Marketers & Customers Worldwide</h2>
          <div className="max-w-5xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6 justify-center items-stretch"
              >
                {Array.from({ length: testimonialsPerPage }).map((_, i) => {
                  const idx = (testimonialIndex + i) % testimonials.length;
                  const t = testimonials[idx];
                  return (
                    <div key={t.name + idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full max-w-sm mx-auto">
                      <p className="text-lg text-gray-700 mb-4">"{t.text}"</p>
                      <div className="font-bold text-bluelitty-navy text-base mt-2">– {t.name}</div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-6 space-x-4">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-bluelitty-blue text-white flex items-center justify-center hover:bg-bluelitty-navy transition-colors duration-300" aria-label="Previous">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-bluelitty-blue text-white flex items-center justify-center hover:bg-bluelitty-navy transition-colors duration-300" aria-label="Next">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPlan; 