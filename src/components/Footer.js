import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Sean Yeomans</h3>
            <p className="text-gray-300 mb-4">
              Senior Consultant/Developer with 25+ years of experience building 
              enterprise solutions and leading development teams.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <FaEnvelope size={16} />
                <a href="mailto:sean@yeomans.ca" className="hover:text-blue-400 transition-colors">
                  sean@yeomans.ca
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone size={16} />
                <a href="tel:204-951-1274" className="hover:text-blue-400 transition-colors">
                  204-951-1274
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Back to Top */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="btn btn-secondary text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Sean Yeomans. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Framer Motion, and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 