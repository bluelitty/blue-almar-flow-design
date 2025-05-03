import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'Who is Bluelitty?',
        a: "Bluelitty is a leading company specializing in water management and desalination, dedicated to delivering sustainable water solutions worldwide."
      },
      {
        q: 'How does Bluelitty generate revenue?',
        a: `Investor capital powers the aggressive expansion of desalination plants, turning untapped seawater into pure, life-sustaining drinking water.\nOur purified water is sold to governments and local communities, creating robust, recurring revenue streams. These profits fuel strong returns for our investors while driving large-scale impact where it matters most.\nWhen you invest with Bluelitty, you're not just building wealth, you're leading a global movement to end water scarcity once and for all.`
      },
      {
        q: 'How does Bluelitty integrate Artificial Intelligence into desalination?',
        a: "Bluelitty utilizes AI to enhance desalination efficiency by optimizing energy consumption, increasing water output and ensuring real-time monitoring for sustainable operations."
      },
      {
        q: 'What benefits do investors gain by investing in Bluelitty?',
        a: "Investors can expect substantial returns driven by the rising global demand for sustainable water solutions and Bluelitty's continuous innovation in water management technologies."
      },
      {
        q: "How does Bluelitty safeguard investor's capital?",
        a: 'Bluelitty ensures investment security by adhering to strict regulatory standards, maintaining financial transparency and implementing robust risk management strategies.'
      },
      {
        q: 'How can I start investing with Bluelitty?',
        a: 'To begin, visit our website (www.bluelitty.com) to explore investment opportunities and connect with our support team for guidance on the investment process.'
      },
      {
        q: "How does Bluelitty manage investor's funds?",
        a: 'Bluelitty strategically reinvests capital into high-impact water projects, technological advancements and global expansion to optimize returns.'
      },
      {
        q: 'What makes Bluelitty unique?',
        a: 'Bluelitty stands out through its innovative desalination technologies, AI-driven solutions and unwavering commitment to sustainability in addressing global water challenges.'
      },
      {
        q: 'How does Bluelitty ensure profitability while managing risks?',
        a: 'Bluelitty maximizes profitability through portfolio diversification, operational optimization and expansion into emerging markets, while mitigating risks via strategic partnerships and innovation.'
      },
      {
        q: 'Where is Bluelitty Incorporated & Established?',
        a: 'Bluelitty is incorporated in United Kingdom and operates globally to combat water scarcity. Bluelitty was founded in 2016 with the vision of addressing the global water crisis through sustainable solutions.'
      },
      {
        q: 'Who is the founder and CEO of Bluelitty?',
        a: 'The Founder of Bluelitty is Mr David Williamson. The CEO of Bluelitty is Mr Stephen Mackenzie.'
      },
      {
        q: 'Why invest in Bluelitty?',
        a: `Investing in Bluelitty offers a unique opportunity to engage in the sustainable water sector. The company specializes in innovative desalination technologies that address global water scarcity challenges. Bluelitty's commitment to environmental responsibility and operational efficiency ensures long-term viability and growth. By supporting Bluelitty, investors contribute to a crucial industry while potentially benefiting from its expanding market presence.`
      },
      {
        q: 'What is Bluelitty\'s mission?',
        a: 'Our mission is to provide efficient and sustainable water solutions that combat global water scarcity and environmental challenges.'
      },
      {
        q: 'What is Bluelitty\'s vision?',
        a: 'Our vision is to become the world\'s leading provider of sustainable water solutions, ensuring universal access to clean and reliable water.'
      },
      {
        q: 'Where does Bluelitty see itself in the next Ten years?',
        a: 'Within Ten years, Bluelitty aims to expand its global footprint, pioneer innovative water technologies and play a key role in global water sustainability efforts.'
      },
      {
        q: 'Is a sponsor ID required for investment or sponsorship?',
        a: 'Yes, a sponsor ID is required for specific investment or sponsorship programs.'
      },
      {
        q: 'How does Bluelitty prevent money laundering and fraud?',
        a: 'Bluelitty enforces strict KYC (Know Your Customer) procedures, ensures secure financial transactions and complies with international regulations to prevent fraud and money laundering.'
      },
    ]
  },
  {
    category: 'Business Details',
    items: [
      {
        q: 'How does direct referral work?',
        a: 'Direct referral income works when one refers someone and they make an investment, Direct referral income is generated according to the packages one chosen.'
      },
      {
        q: 'What is binary income?',
        a: 'Binary income is the matching income of left- and right-side businesses. The matching amount, or the lowest income, of either side of the business, will offer 8% income as binary income. This will always be calculated on a 1:1 basis.'
      },
      {
        q: 'What is the minimum investment at Bluelitty?',
        a: 'Minimum investment at Bluelitty is $50.'
      },
      {
        q: 'How much Binary income?',
        a: 'Binary income offered at Bluelitty is 8%.'
      },
    ]
  },
  {
    category: 'Wallets & Payments',
    items: [
      {
        q: 'What are the types of wallets in Bluelitty?',
        a: `1. Affiliate Wallet\nThis wallet reflects all your referral bonuses, binary income, rewards and other networking related earnings.\n\n2. ROI Wallet\nYour daily returns from active investment packages are credited to the ROI Wallet until the selected package reaches maturity.\n\n3. Deposit Wallet\nAll initial deposits are credited to the Deposit Wallet. From here, you can use the funds to purchase a suitable investment package.\n\n4. Blue Wallet\nThe Blue Wallet is designed for seamless internal and external transactions, particularly for managing activities within your team and downline.`
      },
      {
        q: 'How much Referral income?',
        a: 'Referral income offered at Bluelitty is 9%, 10%, 11%.'
      },
      {
        q: 'Which are the available Payment gateways?',
        a: 'Deposit can be made using USDT, Bitcoin, Ethereum, Ripple, Tron and LTC.'
      },
      {
        q: 'Which are the available withdrawal gateways?',
        a: 'Withdrawals are processed in USDT Trc20.'
      },
    ]
  },
  {
    category: 'Withdrawals',
    items: [
      {
        q: 'What is the minimum withdrawal at Bluelitty?',
        a: 'Minimum withdrawal is $15.'
      },
      {
        q: 'How much is the withdrawal fee?',
        a: 'Withdrawal fee is 8%.'
      },
      {
        q: 'What are the dates of withdrawal?',
        a: 'ROI withdrawal is 15th and 30th of every month. Commission withdrawal is every Wednesday.'
      },
    ]
  },
  {
    category: 'Contact & Accounts',
    items: [
      {
        q: 'How can I contact Bluelitty?',
        a: 'You can reach us through our support team whatsapp number (+447418607273)'
      },
      {
        q: 'Can I manage multiple accounts with Bluelitty?',
        a: 'Yes, Bluelitty allows clients to manage multiple accounts, subject to company policies.'
      },
    ]
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const toggle = (cat: string, idx: number) => {
    setOpen((prev) => ({ ...prev, [`${cat}-${idx}`]: !prev[`${cat}-${idx}`] }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section
        className="min-h-[40vh] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">Frequently Asked Questions</h1>
            <p className="text-lg text-white mb-2">Find answers to the most common questions about Bluelitty, our business model, investment process, and more. If you need further assistance, our support team is always here to help.</p>
          </div>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <h1 className="text-4xl font-bold text-bluelitty-navy mb-10 text-center">Frequently Asked Questions</h1>
        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2 className="text-2xl font-bold text-bluelitty-blue mb-4">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <div key={item.q} className="border border-bluelitty-blue/10 rounded-lg bg-white shadow-sm">
                  <button
                    className="w-full text-left px-6 py-4 font-semibold text-bluelitty-navy flex justify-between items-center focus:outline-none"
                    onClick={() => toggle(section.category, idx)}
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 text-bluelitty-blue">{open[`${section.category}-${idx}`] ? '-' : '+'}</span>
                  </button>
                  {open[`${section.category}-${idx}`] && (
                    <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default FAQ; 