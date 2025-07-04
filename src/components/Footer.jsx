import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/dhrumil0333', label: 'GitHub' },
    { Icon: Linkedin, href: 'ttps://www.linkedin.com/in/korat-dhrumil-740817320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:koratdhrumil0333@gmail.com', label: 'Email' }
  ];

  const contactInfo = [
    { Icon: Mail, text: 'koratdhrumil0333@gmail.com', href: 'mailto:koratdhrumil0333@gmail.com' },
    { Icon: Phone, text: '+91 7984620052', href: 'tel:+917984620052' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-hot-pink to-purple bg-clip-text text-transparent mb-4">
              Korat Dhrumil
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-hot-pink transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-hot-pink transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }) => (
                <li key={text}>
                  <motion.a
                    href={href}
                    className="flex items-center gap-3 text-gray-300 hover:text-hot-pink transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={18} className="text-purple flex-shrink-0" />
                    <span>{text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Get updates about my latest projects and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-dark-card border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-hot-pink"
              />
              <motion.button
                className="bg-gradient-to-r from-hot-pink to-purple px-4 py-2 rounded-r-lg text-white hover:shadow-lg hover:shadow-hot-pink/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div> */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Korat Dhrumil. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;