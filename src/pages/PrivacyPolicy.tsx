import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Privacy Policy</h1>
        </div>
      </div>
    </section>
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <h2 className="text-2xl font-bold text-bluelitty-navy mb-6">Privacy Policy</h2>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">1. Introduction</h3>
      <p className="mb-4">At <span className="font-bold">Bluelitty</span>, your privacy is our priority. As a leader in sustainable water management and desalination, we are committed to safeguarding your personal data in accordance with global privacy regulations such as GDPR, CCPA, and others. This Privacy Policy outlines how we collect, use, and protect your data.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">2. Information We Collect</h3>
      <p className="mb-2">We collect data to provide better services:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><span className="font-semibold">Personal Information</span>: Name, email, phone number, company name.</li>
        <li><span className="font-semibold">Technical Data</span>: IP address, browser type, operating system, referring URLs.</li>
        <li><span className="font-semibold">Usage Data</span>: Pages visited, time spent, actions taken on the site.</li>
      </ul>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">3. How We Use Your Information</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Provide tailored information and services.</li>
        <li>Improve our site functionality and user experience.</li>
        <li>Respond to inquiries and manage partnerships.</li>
        <li>Ensure legal compliance and risk mitigation.</li>
      </ul>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">4. Data Sharing & Disclosure</h3>
      <p className="mb-2">We do not sell your data. We may share it with:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Trusted third-party service providers under strict confidentiality.</li>
        <li>Regulatory authorities, if required by law.</li>
      </ul>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">5. Cookies & Tracking Technologies</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Enhance user navigation.</li>
        <li>Analyze traffic.</li>
        <li>Personalize content.</li>
      </ul>
      <p className="mb-4">You may manage cookie preferences through your browser settings.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">6. Data Security</h3>
      <p className="mb-4">We implement enterprise-grade security protocols (SSL, encryption, access control) to protect your data from unauthorized access, disclosure, or alteration.</p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">7. Your Rights</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Access and rectify your data.</li>
        <li>Request deletion or portability.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
      <p className="mb-4">Requests can be made via: <a href="mailto:support@bluelitty.com" className="text-bluelitty-blue underline">support@bluelitty.com</a></p>
      <h3 className="text-xl font-semibold text-bluelitty-blue mb-2">8. Changes to This Policy</h3>
      <p className="mb-4">We may periodically update this policy. Notifications of material changes will be posted on this page.</p>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy; 