import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaMicrosoft, FaDatabase, FaCloud, FaUsers, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "WealthVista Agentic MVP",
      company: "Norima Consulting",
      period: "Apr 2025 - Jul 2025",
      role: "Senior Developer",
      description: "A modern React-based financial visualization platform that provides interactive wealth landscape mapping for financial advisors and their clients. Features sophisticated node-based interface for displaying financial assets, liabilities, income, and expenses with real-time AI-powered chat functionality.",
      highlights: [
        "Developed core Wealth Landscape component using ReactFlow",
        "Integrated REST APIs for comprehensive CRUD operations",
        "Built sophisticated layout management with localStorage persistence",
        "Designed custom node types for different financial entities",
        "Created comprehensive state management for complex calculations"
      ],
      technologies: ["React 19", "TypeScript", "ReactFlow", "Material-UI", "Tailwind CSS", "Vite", "REST APIs"],
      icon: <FaChartLine size={30} />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Insurance Council Manitoba Portal",
      company: "Norima Consulting",
      period: "Apr 2024 - Apr 2025",
      role: "Senior Developer, Team Lead",
      description: "An online platform for licensing and regulatory compliance for insurance professionals in Manitoba. Plays a crucial role in ensuring insurance agents, brokers, and adjusters meet professional standards and operate within ethical and legal frameworks.",
      highlights: [
        "Led cross-functional team of 5-6 members",
        "Conducted in-depth analysis of legacy system",
        "Optimized interaction between presentation, logic, and data layers",
        "Managed ongoing triage and issue resolution",
        "Facilitated knowledge transfer and continuity"
      ],
      technologies: ["ASP .NET MVC", "Sybase SQL", "Legacy Systems", "Team Leadership"],
      icon: <FaUsers size={30} />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Advisor Credit Exchange",
      company: "Norima Consulting",
      period: "Mar 2021 - Mar 2024",
      role: "Senior Developer",
      description: "Enterprise-level web application providing multiple web interfaces for financial service workers to build and source Loan Opportunity offerings. Features comprehensive ETL processes and Azure cloud integration.",
      highlights: [
        "Developed and managed ETL Batch processes",
        "Maintained extensive SQL Stored Procedures and C# Applications",
        "Worked daily with Azure Services (App Services, SQL Servers, Function Apps)",
        "Managed Virtual Machines for multi-environment ecosystem",
        "Processed data from multiple sources daily"
      ],
      technologies: ["SQL", "C# .NET MVC", "Azure Services", "ETL Processes", "Razor", "HTML/CSS", "JavaScript"],
      icon: <FaDatabase size={30} />,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Trucendent",
      company: "Norima Consulting",
      period: "Jan 2021 - Mar 2021",
      role: "Senior Developer",
      description: "MVC Web App Product focused on back-end Function App development, providing Data services via custom Azure Function App APIs to drive a React-based UI with advanced analytics integration.",
      highlights: [
        "Involved with front-end JavaScript/React UI development",
        "Integrated Pendo implementation for analytics",
        "Wrote custom JavaScript for user behavior tracking",
        "Developed Azure Function App APIs"
      ],
      technologies: ["C#", "SQL", "React", "JavaScript", "Azure Functions", "Entity Framework"],
      icon: <FaCloud size={30} />,
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my most recent and impactful projects, showcasing my expertise 
            in enterprise development, team leadership, and modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-gray-600">{project.company}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Role:</strong> {project.role}</p>
                    <p><strong>Period:</strong> {project.period}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{highlight}</span>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            These projects represent just a sample of my work. I've delivered over 100 projects 
            across various industries, from multimedia and interactive design to enterprise applications.
          </p>
          <button
            onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            View Full Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 