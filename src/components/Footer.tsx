import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bluelitty-navy text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <img src="/logo.png" alt="Bluelitty Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-white">Bluelitty</span>
            </div>
            <p className="text-bluelitty-light">
              Leading the way in sustainable water solutions through innovative technology and expert consultation.
            </p>
            {/* Social Profiles */}
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.457-2.548z" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.321-.591 1.321-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-bluelitty-light hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/projects" className="text-bluelitty-light hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link to="/blog" className="text-bluelitty-light hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link to="/business-plan" className="text-bluelitty-light hover:text-white transition-colors duration-300">Business Plan</Link></li>
              <li><Link to="/faq" className="text-bluelitty-light hover:text-white transition-colors duration-300">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-bluelitty-light hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-bluelitty-light hover:text-white transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/project-finance" className="text-bluelitty-light hover:text-white transition-colors duration-300">Project Finance</Link></li>
              <li><Link to="/asset-management" className="text-bluelitty-light hover:text-white transition-colors duration-300">Asset Management</Link></li>
              <li><Link to="/merger-acquisitions" className="text-bluelitty-light hover:text-white transition-colors duration-300">Merger & Acquisitions</Link></li>
              <li><a href="/#services" className="text-bluelitty-light hover:text-white transition-colors duration-300">Desalination Technology</a></li>
              <li><a href="/#services" className="text-bluelitty-light hover:text-white transition-colors duration-300">Water Management</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-bluelitty-light">
              <li><span className="font-semibold text-white">Email:</span> <a href="mailto:info@bluelitty.com" className="hover:text-white transition-colors duration-300">info@bluelitty.com</a></li>
              <li><span className="font-semibold text-white">Phone:</span> <a href="tel:+441234567890" className="hover:text-white transition-colors duration-300">+44 1234 567890</a></li>
              <li><span className="font-semibold text-white">Address:</span> 123 Waterway Ave, London, UK</li>
            </ul>
            {/* <div className="mt-4"> */}
            {/* <Link to="/contact" className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Contact Form</Link> */}
            {/* </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-bluelitty-light">
            &copy; {new Date().getFullYear()} Bluelitty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
