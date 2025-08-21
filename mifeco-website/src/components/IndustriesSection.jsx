import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  GraduationCap, 
  Heart, 
  Cpu, 
  Rocket, 
  Building2, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Import images
import businessTeam from '../assets/business_consulting_team.jpg';
import marsRover from '../assets/mars_rover_technology.jpg';
import modernOffice from '../assets/modern_office_technology.jpg';

const IndustriesSection = ({ setSelectedIndustry, setIsIndustryPopupOpen, onConsultationClick }) => {
  const industries = [
    {
      id: "education",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Consulting",
      subtitle: "Universities & Educational Institutions",
      description: "Transform educational institutions with strategic planning, technology integration, and operational excellence. MIFECO has supported educational institutions like International House in New York City to modernize IT services and align operations with strategic goals.",
      image: businessTeam,
      services: [
        "IT Governance & Policy Framework",
        "Digital Learning & Cloud Platforms (Office 365, Power BI)",
        "Unified Communications & CRM",
        "Analytics for Resident and Alumni Engagement",
        "Workflow Integration Across Housing, Financial Aid, and Fundraising"
      ],
      clients: ["International House NYC (Sebastian Fries, President & CEO)", "University of California Berkeley", "Minnesota State University", "Emma L. Bowen Community Service Center"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "healthcare",
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Consulting",
      subtitle: "Hospitals & Health Systems",
      description: "Optimize healthcare delivery through strategic planning, operational efficiency, and technology implementation. At Cayuga Medical Center, MIFECO led a comprehensive IS assessment focused on closing infrastructure gaps and aligning technology with patient care goals.",
      image: modernOffice,
      services: [
        "IT Governance and Compliance Readiness",
        "EMR Integration & Workflow Optimization",
        "Incident Response Design",
        "Stakeholder-Centered IS Service Redesign",
        "Strategic Planning for Health Systems"
      ],
      clients: ["Cayuga Medical Center (Martin Stallone, MD, President & CEO)", "Upper Manhattan Mental Health Center", "ECFMG (Educational Commission for Foreign Medical Graduates)"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "technology",
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology Consulting",
      subtitle: "Software & Technology Companies",
      description: "Accelerate technology innovation and market penetration through strategic guidance. With global manufacturer SEKISUI SPI, MIFECO implemented enterprise-wide transformation efforts across operations in Bloomsburg and Holland, MI.",
      image: modernOffice,
      services: [
        "ERP Expansion & IQMS Dashboards",
        "CRM Integration with Sales Automation",
        "Microsoft 365 + SharePoint Digital Workplace",
        "Manufacturing Tech-IT Coordination",
        "Digital Transformation"
      ],
      clients: ["SEKISUI SPI (Ronn Cort, COO & President)", "IBM Watson", "Telephonics Corporation", "Cority IQS"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "space",
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Industry Consulting",
      subtitle: "Space Technology & Innovation",
      description: "Lead the space economy with cutting-edge consulting services for space technology companies, research institutions, and government agencies. Our award-winning expertise in Mars exploration and space systems sets us apart.",
      image: marsRover,
      services: [
        "Space Mission Planning",
        "Mars Technology Development",
        "Space Systems Engineering",
        "Regulatory Compliance Strategy",
        "Space Industry Market Analysis"
      ],
      clients: ["Mars Technology Institute", "NASA Collaborations", "Telephonics Corporation", "Dunmore Corporation (Ronn Cort, President)", "Tallman Equipment (Charlie Vicari, CEO)", "Spartan Emergency Response"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      featured: true
    }
  ];

  const stats = [
    { number: "25+", label: "Industry Clients", icon: <Building2 className="w-6 h-6" /> },
    { number: "30+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "100%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "4", label: "Key Industries", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Industry Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Specialized Industry Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep industry knowledge combined with strategic expertise to deliver transformational results 
            across education, healthcare, technology, and space sectors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={index} className={`relative ${industry.bgColor} rounded-3xl p-8 lg:p-12`}>
              {industry.featured && (
                <div className="absolute -top-4 left-8">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">
                    🏆 Award-Winning Expertise
                  </Badge>
                </div>
              )}
              
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center text-white`}>
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{industry.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Key Services:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Notable Clients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client, clientIndex) => (
                        <Badge key={clientIndex} variant="secondary" className="text-sm">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="btn-gradient text-white"
                    onClick={() => {
                      setSelectedIndustry(industry.id);
                      setIsIndustryPopupOpen(true);
                    }}
                  >
                    Learn More About {industry.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
                    <img
                      src={industry.image}
                      alt={`${industry.title} consulting services`}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to Transform Your Industry?</CardTitle>
              <CardDescription className="text-lg">
                Whether you're in education, healthcare, technology, or space, our industry-specific expertise 
                can help you achieve breakthrough results. Let's discuss how we can accelerate your success.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Button size="lg" className="btn-gradient text-white" onClick={onConsultationClick}>
                  Schedule Industry Consultation
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Free 30-minute consultation to discuss your industry-specific challenges and opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
