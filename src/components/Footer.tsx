
const Footer = () => {
  return (
    <footer className="bg-bluelitty-navy text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Bluelitty</h3>
            <p className="text-bluelitty-light">
              Leading the way in sustainable water solutions through innovative technology and expert consultation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-bluelitty-light hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                'Desalination Technology', 
                'Water Management', 
                'Wastewater Treatment', 
                'Sustainability Consulting'
              ].map(service => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-bluelitty-light hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-bluelitty-light">
              Subscribe to our newsletter to receive updates on water solutions and industry insights.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-bluelitty-navy"
                />
                <button
                  type="submit"
                  className="bg-bluelitty-blue hover:bg-bluelitty-light hover:text-bluelitty-navy px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
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
