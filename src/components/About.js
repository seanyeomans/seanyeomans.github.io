import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaCloud, FaRocket } from 'react-icons/fa';

const About = () => {
  const expertise = [
    {
      icon: <FaCode size={40} />,
      title: "Full-Stack Development",
      description: "Expert in React, .NET, PHP, and modern web technologies with 25+ years of experience building scalable applications."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Team Leadership",
      description: "Led cross-functional teams of 5-6 members, managing developers, QA specialists, and project managers to deliver successful projects."
    },
    {
      icon: <FaCloud size={40} />,
      title: "Multimedia & Interactive",
      description: "Extensive experience in Flash, Director, 3D modeling, digital video editing, and interactive kiosk applications."
    },
    {
      icon: <FaRocket size={40} />,
      title: "Content Management",
      description: "Specialized in WordPress development, custom CMS solutions, and helping businesses manage their digital presence effectively."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A seasoned senior developer and consultant with a proven track record of delivering 
            innovative solutions for enterprise clients across various industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Professional Background
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a Senior Consultant/Developer with over 25 years of experience in the technology industry. 
                My journey began in multimedia development, creating interactive CD-ROMs, digital video editing, 
                3D modeling, and Flash-based applications. I've evolved through every major web technology shift, 
                from early Director and Flash applications to modern React and .NET platforms.
              </p>
              <p>
                My expertise spans the full development spectrum - from multimedia design and interactive kiosks 
                to enterprise applications and content management systems. I've built countless WordPress-based 
                solutions and custom CMS platforms, helping businesses manage their digital presence effectively. 
                Most recently at Norima Consulting, I specialized in building enterprise-level applications and leading 
                development teams to deliver exceptional results.
              </p>
              <p>
                Throughout my career, I've led teams of 5-6 developers, managed client relationships, 
                and delivered projects that have had significant impact on business operations. My approach 
                combines technical excellence with creative problem-solving and strong leadership skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 