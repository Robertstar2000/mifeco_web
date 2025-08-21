import React, { useState } from 'react';
import { X, Users, GraduationCap, Heart, Cpu, Rocket, Download, FileText, TrendingUp, Shield, Target, Lightbulb } from 'lucide-react';

const IndustryPopup = ({ isOpen, onClose, industry }) => {
  if (!isOpen) return null;

  const industryContent = {
    education: {
      title: "Education Consulting Excellence",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      subtitle: "Transforming Educational Institutions for the Digital Age",
      description: "MIFECO's education consulting practice has revolutionized how educational institutions operate, learn, and grow. Our comprehensive approach combines strategic planning, technology integration, and operational excellence to create sustainable educational environments that prepare students for tomorrow's challenges.",
      
      caseStudy: {
        title: "International House NYC Digital Transformation",
        challenge: "International House NYC, a prestigious residential community for graduate students and young professionals from around the world, needed to modernize their IT services and align operations with strategic goals. The organization required improved efficiency, enhanced resident experience, and better staff capabilities to serve their diverse international community.",
        solution: "MIFECO implemented a comprehensive digital transformation strategy that included: IT governance and policy framework development, digital learning and cloud platforms (Office 365, Power BI), unified communications and CRM systems, analytics for resident and alumni engagement, and workflow integration across housing, financial aid, and fundraising operations.",
        results: [
          "Boosted resident satisfaction with targeted tech interventions",
          "Reduced manual reporting by integrating Crystal Reports & Excel analytics",
          "Improved IT maturity score from ~2.0 toward industry average",
          "Enhanced cross-department collaboration and communication",
          "Streamlined operations across multiple service areas"
        ],
        testimonial: "MIFECO's expertise in educational technology transformation helped us modernize our operations while maintaining our mission of fostering international understanding and cooperation.",
        client: "Sebastian Fries, PhD, President & CEO, International House NYC"
      },

      services: [
        {
          name: "Strategic Academic Planning",
          description: "Comprehensive curriculum design, program development, and academic excellence frameworks"
        },
        {
          name: "Digital Learning Transformation",
          description: "Implementation of advanced learning management systems, virtual classrooms, and AI-powered educational tools"
        },
        {
          name: "Student Success Analytics",
          description: "Data-driven insights to improve student outcomes, retention, and graduation rates"
        },
        {
          name: "Administrative Optimization",
          description: "Streamlined processes for admissions, registration, financial aid, and student services"
        },
        {
          name: "Faculty Development Programs",
          description: "Professional development initiatives to enhance teaching effectiveness and research capabilities"
        },
        {
          name: "Campus Technology Integration",
          description: "Smart campus solutions including IoT, security systems, and infrastructure modernization"
        }
      ],

      metrics: [
        { label: "Average Enrollment Increase", value: "28%" },
        { label: "Student Satisfaction Improvement", value: "67%" },
        { label: "Administrative Cost Reduction", value: "$6.2M" },
        { label: "Technology ROI", value: "340%" }
      ],

      clients: [
        "International House NYC",
        "University of California Berkeley", 
        "Minnesota State University",
        "Emma L. Bowen Community Service Center",
        "Columbia University"
      ]
    },

    healthcare: {
      title: "Healthcare Innovation Leadership",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      subtitle: "Revolutionizing Patient Care Through Strategic Excellence",
      description: "MIFECO's healthcare consulting division specializes in transforming healthcare organizations through innovative technology solutions, operational excellence, and patient-centered care models. Our expertise spans hospitals, clinics, pharmaceutical companies, and healthcare technology firms.",
      
      caseStudy: {
        title: "Cayuga Medical Center IS Assessment & Transformation",
        challenge: "Cayuga Medical Center needed a comprehensive IS assessment focused on closing infrastructure gaps and aligning technology with patient care goals. The organization required restructured IT governance, a hospital-wide roadmap, and support for disaster recovery and compliance initiatives to better serve their community.",
        solution: "MIFECO led a comprehensive IS assessment that included: IT governance and compliance readiness framework, EMR integration and workflow optimization, incident response design, stakeholder-centered IS service redesign, and strategic planning for health systems. We developed a prioritized roadmap for technology improvements.",
        results: [
          "Prioritized and published a live IS Roadmap",
          "Reduced operational friction through cross-department collaboration",
          "Identified and initiated remediation on high-risk areas like DR and security",
          "Improved IT governance structure and compliance readiness",
          "Enhanced patient care technology alignment"
        ],
        testimonial: "MIFECO's comprehensive assessment and strategic guidance helped us identify critical infrastructure gaps and develop a clear roadmap for technology improvements that directly support our patient care mission.",
        client: "Martin Stallone, MD, President & CEO, Cayuga Medical Center"
      },

      services: [
        {
          name: "Clinical Operations Optimization",
          description: "Streamlined patient care workflows, resource allocation, and clinical decision support systems"
        },
        {
          name: "Healthcare Technology Integration",
          description: "EHR implementation, telemedicine platforms, and AI-powered diagnostic tools"
        },
        {
          name: "Patient Experience Enhancement",
          description: "Comprehensive patient journey mapping and satisfaction improvement strategies"
        },
        {
          name: "Regulatory Compliance Management",
          description: "HIPAA, FDA, and healthcare regulation compliance frameworks and monitoring"
        },
        {
          name: "Population Health Analytics",
          description: "Data-driven insights for preventive care, chronic disease management, and health outcomes"
        },
        {
          name: "Healthcare Financial Optimization",
          description: "Revenue cycle management, cost reduction strategies, and financial performance improvement"
        }
      ],

      metrics: [
        { label: "Average Cost Reduction", value: "$3.8M" },
        { label: "Patient Satisfaction Increase", value: "52%" },
        { label: "Operational Efficiency Gain", value: "45%" },
        { label: "Technology Implementation Success", value: "100%" }
      ],

      clients: [
        "Cayuga Medical Center",
        "Upper Manhattan Mental Health Center",
        "ECFMG (Educational Commission for Foreign Medical Graduates)",
        "Johns Hopkins Medicine",
        "Cleveland Clinic Ventures"
      ]
    },

    technology: {
      title: "Technology Innovation Mastery",
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      subtitle: "Driving Digital Transformation Across Industries",
      description: "MIFECO's technology consulting practice leads organizations through complex digital transformations, emerging technology adoption, and innovation strategy development. We specialize in AI implementation, cloud migration, cybersecurity, and next-generation software development.",
      
      caseStudy: {
        title: "SEKISUI SPI Enterprise Transformation",
        challenge: "SEKISUI Polymer Innovations, a global manufacturer with operations in Bloomsburg and Holland, MI, needed enterprise-wide transformation efforts to improve IT maturity and operational efficiency. The company required better systems integration, ERP deployment, and workforce alignment to compete with high-performing IT organizations.",
        solution: "MIFECO implemented a comprehensive digital transformation strategy by benchmarking against high-performing IT organizations and crafting a phased roadmap that included: ERP expansion and IQMS dashboards, CRM integration with sales automation, Microsoft 365 + SharePoint digital workplace, and manufacturing tech-IT coordination to improve overall operations.",
        results: [
          "Increased IT maturity from ~2.7 to approach top performers (avg. 4.8)",
          "Launched integrated ERP and shop-floor dashboards",
          "Reduced system downtime and project backlog by instituting agile governance",
          "Improved manufacturing tech-IT coordination",
          "Enhanced digital workplace collaboration and productivity"
        ],
        testimonial: "MIFECO's expertise in manufacturing technology transformation helped us modernize our operations and achieve IT maturity levels that position us as an industry leader.",
        client: "Ronn Cort, COO & President, SEKISUI Polymer Innovations"
      },

      services: [
        {
          name: "AI & Machine Learning Implementation",
          description: "Custom AI solutions, machine learning models, and intelligent automation systems"
        },
        {
          name: "Cloud Architecture & Migration",
          description: "Comprehensive cloud strategy, migration planning, and multi-cloud optimization"
        },
        {
          name: "Cybersecurity & Risk Management",
          description: "Advanced security frameworks, threat detection, and compliance management"
        },
        {
          name: "Software Development Excellence",
          description: "Agile development practices, DevOps implementation, and quality assurance frameworks"
        },
        {
          name: "Data Analytics & Business Intelligence",
          description: "Advanced analytics platforms, real-time dashboards, and predictive modeling"
        },
        {
          name: "Digital Innovation Strategy",
          description: "Emerging technology adoption, innovation labs, and digital product development"
        }
      ],

      metrics: [
        { label: "Average Digital ROI", value: "420%" },
        { label: "System Performance Improvement", value: "68%" },
        { label: "Security Incident Reduction", value: "89%" },
        { label: "Development Velocity Increase", value: "156%" }
      ],

      clients: [
        "SEKISUI Polymer Innovations",
        "IBM Watson",
        "Telephonics Corporation",
        "Cority IQS",
        "Tallman Equipment"
      ]
    },

    space: {
      title: "Space Industry Excellence",
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      subtitle: "Pioneering the Future of Space Exploration and Commerce",
      description: "MIFECO's space industry consulting practice represents the pinnacle of our expertise, combining cutting-edge technology with deep aerospace knowledge. Our award-winning team has contributed to breakthrough missions and revolutionary space technologies that are shaping humanity's future beyond Earth.",
      
      caseStudy: {
        title: "Mars Mission Technology Development - Award-Winning Project",
        challenge: "A consortium of space agencies and private companies needed innovative solutions for autonomous Mars exploration, including advanced robotics, communication systems, and life support technologies. The project required breakthrough innovations in AI, materials science, and systems integration under extreme constraints.",
        solution: "MIFECO led the development of the Telerobotic Mars Expedition system, featuring: autonomous navigation AI, advanced communication protocols for Earth-Mars data transmission, innovative life support systems, and breakthrough materials for extreme environment operation. Our interdisciplinary team collaborated with leading space agencies and technology partners.",
        results: [
          "Won 1st Place at the 25th Annual International Mars Society Convention",
          "Developed 12 patented technologies for space exploration",
          "Achieved 99.7% mission success rate in simulation testing",
          "Reduced mission costs by $2.3 billion through innovative design",
          "Established new industry standards for Mars exploration technology"
        ],
        testimonial: "MIFECO's innovative approach to space technology development has significantly advanced our exploration capabilities. Their technical expertise and breakthrough solutions continue to drive the industry forward.",
        client: "Mars Technology Institute Research Team"
      },

      services: [
        {
          name: "Mission Planning & Systems Engineering",
          description: "Comprehensive mission design, systems integration, and risk assessment for space missions"
        },
        {
          name: "Advanced Propulsion Technologies",
          description: "Next-generation propulsion systems, fuel efficiency optimization, and breakthrough propulsion research"
        },
        {
          name: "Satellite & Communication Systems",
          description: "Advanced satellite design, deep space communication, and space-based internet infrastructure"
        },
        {
          name: "Space Manufacturing & Materials",
          description: "Zero-gravity manufacturing processes, advanced materials for space environments, and in-situ resource utilization"
        },
        {
          name: "Autonomous Space Systems",
          description: "AI-powered spacecraft navigation, robotic exploration systems, and autonomous mission management"
        },
        {
          name: "Commercial Space Strategy",
          description: "Space commerce development, regulatory compliance, and market entry strategies for space ventures"
        }
      ],


      clients: [
        "Telephonics Corporation",
        "Dunmore Corporation", 
        "Tallman Equipment",
        "SEKISUI Polymer Innovations",
        "IBM Watson",
        "Spartan Emergency Response"
      ]
    }
  };

  const content = industryContent[industry];
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {content.icon}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{content.title}</h2>
              <p className="text-gray-600">{content.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">{content.description}</p>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-600" />
              Featured Case Study: {content.caseStudy.title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-700">{content.caseStudy.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-700">{content.caseStudy.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                <ul className="space-y-2">
                  {content.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-gray-700 italic">"{content.caseStudy.testimonial}"</p>
                <p className="text-sm text-gray-600 mt-2 font-medium">— {content.caseStudy.client}</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-purple-600" />
              Our {content.title.split(' ')[0]} Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Clients */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-indigo-600" />
              Trusted by Industry Leaders
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {content.clients.map((client, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-gray-700 font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Transform Your {content.title.split(' ')[0]} Organization?</h3>
            <p className="mb-4">Let MIFECO's award-winning expertise drive your success.</p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPopup;
