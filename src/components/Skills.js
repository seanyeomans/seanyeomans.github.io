import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaDatabase, 
  FaCloud, FaServer, FaTools, FaUsers, FaRocket, FaVideo, FaPalette 
} from 'react-icons/fa';
import { SiTypescript, SiMicrosoftazure, SiDotnet, SiWordpress, SiLaravel, SiAdobe } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact size={30} />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3/Sass", level: 90 },
        { name: "Material-UI", level: 85 },
        { name: "Tailwind CSS", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <FaServer size={30} />,
      skills: [
        { name: "C# .NET", level: 90 },
        { name: "PHP", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "WordPress", level: 95 },
        { name: "REST APIs", level: 90 },
        { name: "Entity Framework", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multimedia & Interactive",
      icon: <FaVideo size={30} />,
      skills: [
        { name: "Flash/ActionScript", level: 90 },
        { name: "Director/Lingo", level: 85 },
        { name: "3D Modeling", level: 80 },
        { name: "Digital Video Editing", level: 85 },
        { name: "Interactive Kiosks", level: 85 },
        { name: "CD-ROM Development", level: 90 },
        { name: "Desktop Publishing", level: 85 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Management",
      icon: <FaTools size={30} />,
      skills: [
        { name: "WordPress Development", level: 95 },
        { name: "Custom CMS", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "E-commerce Solutions", level: 85 },
        { name: "Multi-site Management", level: 90 },
        { name: "Plugin Development", level: 85 },
        { name: "Theme Customization", level: 90 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Leadership & Soft Skills",
      icon: <FaUsers size={30} />,
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Client Relations", level: 90 },
        { name: "Technical Architecture", level: 85 },
        { name: "Mentoring", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 }
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Domain Expertise",
      icon: <FaRocket size={30} />,
      skills: [
        { name: "Financial Applications", level: 90 },
        { name: "Regulatory Compliance", level: 85 },
        { name: "ETL Processes", level: 90 },
        { name: "Legacy Systems", level: 85 },
        { name: "Enterprise Architecture", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Security Best Practices", level: 85 }
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills, tools, and domain expertise 
            developed over 25+ years of professional experience, from early multimedia 
            development to modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Technology Evolution Timeline
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Flash", icon: <SiAdobe size={40} />, color: "text-orange-500", era: "1998-2010" },
              { name: "Director", icon: <FaVideo size={40} />, color: "text-purple-500", era: "1998-2005" },
              { name: "WordPress", icon: <SiWordpress size={40} />, color: "text-blue-500", era: "2007-Present" },
              { name: "PHP", icon: <FaPhp size={40} />, color: "text-purple-500", era: "2001-Present" },
              { name: ".NET", icon: <SiDotnet size={40} />, color: "text-purple-600", era: "2010-Present" },
              { name: "React", icon: <FaReact size={40} />, color: "text-blue-500", era: "2017-Present" },
              { name: "TypeScript", icon: <SiTypescript size={40} />, color: "text-blue-600", era: "2019-Present" },
              { name: "Azure", icon: <SiMicrosoftazure size={40} />, color: "text-blue-600", era: "2020-Present" },
              { name: "Laravel", icon: <SiLaravel size={40} />, color: "text-red-500", era: "2017-Present" },
              { name: "*SQL/NoSQL", icon: <FaDatabase size={40} />, color: "text-orange-500", era: "2003-Present" },
              { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-500", era: "1998-Present" },
              { name: "HTML/CSS", icon: <FaHtml5 size={40} />, color: "text-orange-500", era: "1998-Present" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`${tech.color} mb-2 flex justify-center`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.era}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 