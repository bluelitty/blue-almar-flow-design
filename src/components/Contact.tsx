
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-bluelitty-navy text-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-bluelitty-light max-w-2xl mx-auto">
            Have questions about our services or want to discuss how we can help with your water needs? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-bluelitty-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white">Address</h4>
                  <p className="text-bluelitty-light">
                    123 Water Solutions Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-bluelitty-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white">Phone</h4>
                  <p className="text-bluelitty-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-bluelitty-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white">Email</h4>
                  <p className="text-bluelitty-light">info@bluelitty.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-lg text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href={`#${platform}`} 
                    className="w-10 h-10 rounded-full bg-bluelitty-blue flex items-center justify-center hover:bg-white hover:text-bluelitty-blue transition-colors duration-300"
                    aria-label={platform}
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Simple placeholder for social icons */}
                    <div className="w-5 h-5 flex items-center justify-center">
                      {platform[0].toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white text-bluelitty-navy p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-bluelitty-gray mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bluelitty-blue"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-bluelitty-gray mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bluelitty-blue"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-bluelitty-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bluelitty-blue"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-bluelitty-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bluelitty-blue"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-bluelitty-blue hover:bg-bluelitty-navy text-white py-3 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
