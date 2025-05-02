
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { label: 'Projects', href: '/projects' },
    { label: 'Asset Management', href: '/asset-management' },
    { label: 'Blog', href: '/blog' },
    { label: 'M&A', href: '/merger-acquisitions' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-heading font-bold text-bluelitty-navy">
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
                className={`${
                  isScrolled ? 'text-bluelitty-navy' : 'text-white'
                } hover:text-bluelitty-blue transition-colors duration-300 font-medium`}
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label} 
                to={item.href}
                className={`${
                  isScrolled ? 'text-bluelitty-navy' : 'text-white'
                } hover:text-bluelitty-blue transition-colors duration-300 font-medium`}
              >
                {item.label}
              </Link>
            )
          ))}
          <a 
            href="/#contact" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bluelitty-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-bluelitty-navy hover:text-bluelitty-blue transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="text-bluelitty-navy hover:text-bluelitty-blue transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a 
              href="/#contact" 
              className="btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
