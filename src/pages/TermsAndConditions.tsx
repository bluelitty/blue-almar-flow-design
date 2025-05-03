import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => (
  <div className="min-h-screen bg-white">
    <Header />
    {/* Hero Section */}
    <section
      className="min-h-[30vh] bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Terms and Conditions</h1>
        </div>
      </div>
    </section>
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <h2 className="text-2xl font-bold text-bluelitty-navy mb-6">Terms and Conditions</h2>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">1. Acceptance of Terms</h3>
      <p className="mb-4">By accessing the <span className="font-bold">Bluelitty</span> website, you agree to be legally bound by these Terms and Conditions. If you do not accept them, please refrain from using the site.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">2. Use of Website</h3>
      <p className="mb-4">This website is intended for informational purposes only. Unauthorized use, including malicious access, scraping, or data mining, is strictly prohibited.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">3. Intellectual Property</h3>
      <p className="mb-4">All content (logos, texts, graphics, videos) is the intellectual property of <span className="font-bold">Bluelitty</span> unless otherwise stated. Reproduction or distribution without prior written consent is forbidden.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">4. Third-Party Links</h3>
      <p className="mb-4">Our website may contain links to external resources. <span className="font-bold">Bluelitty</span> does not assume responsibility for the content or privacy practices of third-party sites.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">5. Limitation of Liability</h3>
      <p className="mb-4"><span className="font-bold">Bluelitty</span> shall not be liable for any damages (direct or indirect) arising from the use or inability to use the website or any linked sites.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">6. Indemnification</h3>
      <p className="mb-4">You agree to indemnify and hold <span className="font-bold">Bluelitty</span> harmless from any claims, liabilities, or expenses arising from your misuse of the site or violation of these terms.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">7. Termination</h3>
      <p className="mb-4">We reserve the right to terminate access to the website, with or without notice, for any conduct that we deem inappropriate or in breach of these terms.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">8. Governing Law</h3>
      <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of United Kingdom. All disputes shall be subject to the exclusive jurisdiction of the competent courts in that territory.</p>
    </main>
    <Footer />
  </div>
);

export default TermsAndConditions; 