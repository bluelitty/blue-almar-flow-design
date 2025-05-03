import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items - updated to include all new pages
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Project Finance', href: '/project-finance' },
    { label: 'Business Plan', href: '/business-plan' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Asset Management', href: '/asset-management' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className={`text-2xl font-heading font-bold ${isScrolled ? "text-bluelitty-navy" : "text-white"}`}>
            Bluelitty
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.href}
                className={`${isScrolled ? 'text-bluelitty-navy' : 'text-white'
                  } hover:text-bluelitty-blue transition-colors duration-300 font-medium`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`${isScrolled ? 'text-bluelitty-navy' : 'text-white'
                  } hover:text-bluelitty-blue transition-colors duration-300 font-medium`}
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="flex items-center space-x-4">
            <Link
              to="/signup"
              className="btn-primary"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${isScrolled
                ? 'border-bluelitty-navy text-bluelitty-navy hover:bg-bluelitty-navy hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-bluelitty-navy'
                }`}
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bluelitty-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-bluelitty-navy hover:text-bluelitty-blue transition-colors duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-bluelitty-navy hover:text-bluelitty-blue transition-colors duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border-2 border-bluelitty-navy text-bluelitty-navy hover:bg-bluelitty-navy hover:text-white transition-all duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
