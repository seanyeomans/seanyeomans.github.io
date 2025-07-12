import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "Norima Consulting",
      title: "Senior Developer",
      project: "WealthVista Agentic MVP",
      period: "Apr 2025 - Jul 2025",
      location: "Winnipeg, MB",
      description: "Modern React-based financial visualization platform with interactive wealth landscape mapping and AI-powered chat functionality.",
      technologies: ["React 19", "TypeScript", "ReactFlow", "Material-UI", "Tailwind CSS", "Vite"],
      highlights: [
        "Developed core Wealth Landscape component using ReactFlow",
        "Integrated REST APIs for comprehensive CRUD operations",
        "Built sophisticated layout management with localStorage persistence",
        "Designed custom node types for different financial entities"
      ]
    },
    {
      company: "Norima Consulting",
      title: "Senior Developer, Team Lead",
      project: "Insurance Council Manitoba Portal",
      period: "Apr 2024 - Apr 2025",
      location: "Winnipeg, MB",
      description: "Online platform for licensing and regulatory compliance for insurance professionals in Manitoba.",
      technologies: ["ASP .NET MVC", "Sybase SQL", "Legacy Systems", "Team Leadership"],
      highlights: [
        "Led cross-functional team of 5-6 members",
        "Conducted in-depth analysis of legacy system",
        "Optimized interaction between presentation, logic, and data layers",
        "Managed ongoing triage and issue resolution"
      ]
    },
    {
      company: "Norima Consulting",
      title: "Senior Developer",
      project: "Advisor Credit Exchange",
      period: "Mar 2021 - Mar 2024",
      location: "Winnipeg, MB",
      description: "Enterprise-level web application for financial service workers to build and source Loan Opportunity offerings.",
      technologies: ["SQL", "C# .NET MVC", "Azure Services", "ETL Processes", "Razor", "HTML/CSS", "JavaScript"],
      highlights: [
        "Developed and managed ETL Batch processes",
        "Maintained extensive SQL Stored Procedures and C# Applications",
        "Worked daily with Azure Services (App Services, SQL Servers, Function Apps)",
        "Managed Virtual Machines for multi-environment ecosystem"
      ]
    },
    {
      company: "Rapid RTC",
      title: "WordPress / PHP Developer",
      project: "Multi-site Publishing Solution",
      period: "Feb 2019 - Mar 2020",
      location: "Winnipeg, MB",
      description: "Full-time PHP/WordPress expert role managing multi-site publishing solution for 3rd party automotive OEM customers.",
      technologies: ["PHP", "WordPress", "Bedrock", "Composer", "Puppet", "Capistrano", "Vagrant"],
      highlights: [
        "Managed multi-site publishing solution for automotive OEM customers (Mitsubishi, Kubota, etc.)",
        "Maintained and extended customized and 3rd-party functionalities",
        "Wrote useful WordPress plugins for internal use",
        "Isolated and resolved page speed and performance issues"
      ]
    },
    {
      company: "VeloGuide Inc.",
      title: "Lead Developer/Consultant",
      project: "Website and Mobile App Companion",
      period: "Aug 2017 - Jan 2019",
      location: "Winnipeg, MB",
      description: "Led multidisciplinary team to build website and mobile app companion for international start-up company.",
      technologies: ["PHP", "Laravel", "Mobile Development", "Team Leadership"],
      highlights: [
        "Led small multidisciplinary team of developers and stakeholders",
        "Rebuilt and deployed website using PHP Laravel",
        "Led definition and management of mobile app development",
        "Managed development and resourcing for mobile app"
      ]
    },
    {
      company: "Freelance",
      title: "Interface and Multimedia Designer",
      project: "Multimedia & Web Solutions",
      period: "Feb 1998 - Present",
      location: "Winnipeg, MB",
      description: "Extensive freelance work spanning multimedia development, interactive design, and web solutions for clients across North America.",
      technologies: ["Flash", "Director", "3D Modeling", "Video Editing", "WordPress", "PHP", "E-commerce"],
      highlights: [
        "Developed CD-ROM sales tool for MTV sales force targeting 13 countries",
        "Built custom e-commerce solutions for clients in New York and LA",
        "Created dozens of WordPress-based websites for individuals and small businesses",
        "Specialized in interactive multimedia and photography/video websites"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A comprehensive timeline of my career progression, showcasing my evolution from 
            multimedia development to modern web technologies over 25+ years.
          </p>
        </motion.div>

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="ml-16">
                <div className="card">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.project}</h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <FaBuilding size={14} />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-blue-600">{exp.title}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Career Evolution
            </h3>
            <p className="text-gray-600 mb-6">
              My career has evolved through every major technology shift - from early multimedia 
              development with Flash and Director, through the rise of PHP and WordPress, to modern 
              React and .NET platforms. This breadth of experience gives me unique insights into 
              both legacy systems and cutting-edge technologies.
            </p>
            <p className="text-gray-600">
              I've maintained an active freelance practice since 1998, providing consulting and 
              development services to clients across North America, from New York to Los Angeles, 
              Vancouver to Toronto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 