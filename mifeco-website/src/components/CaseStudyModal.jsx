import React, { useState } from 'react';
import { X, Download, FileText, TrendingUp, Users, Target, Award, Building2, Lightbulb, CheckCircle } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const caseStudies = [
    {
      id: "education-transformation",
      title: "Metropolitan University System Digital Transformation",
      industry: "Education",
      client: "Metropolitan University System",
      challenge: "A major university system with 45,000 students across five campuses was struggling with declining enrollment, outdated technology infrastructure, and fragmented administrative processes. Student satisfaction scores had dropped to 2.8/5, and the institution was facing a $12 million budget deficit.",
      solution: "MIFECO implemented a comprehensive digital transformation strategy that included: unified student information systems, AI-powered student success analytics, streamlined administrative workflows, and innovative online learning platforms. We also redesigned the student experience journey from application to graduation.",
      results: [
        "Increased student enrollment by 23% within 18 months",
        "Improved student satisfaction scores to 4.6/5",
        "Reduced administrative costs by $8.2 million annually",
        "Achieved 95% student retention rate (up from 78%)",
        "Launched 15 new online degree programs generating $4.5M in additional revenue"
      ],
      testimonial: "MIFECO didn't just consult - they became true partners in our transformation. Their education expertise combined with cutting-edge technology solutions helped us not only survive but thrive in today's competitive landscape.",
      clientRole: "Dr. Sarah Mitchell, President",
      duration: "18 months",
      teamSize: "12 consultants",
      investment: "$2.8M",
      roi: "340%",
      tags: ["Digital Transformation", "Student Success", "Administrative Efficiency", "Online Learning"]
    },
    {
      id: "healthcare-optimization",
      title: "Regional Medical Center Operational Excellence",
      industry: "Healthcare",
      client: "Regional Medical Center",
      challenge: "A 850-bed regional medical center was experiencing declining patient satisfaction, inefficient workflows, and rising operational costs. Emergency department wait times averaged 4.2 hours, and the hospital was losing $2.3 million annually due to operational inefficiencies.",
      solution: "MIFECO implemented an integrated healthcare transformation strategy including: AI-powered patient flow optimization, electronic health record system integration, telemedicine capabilities, and predictive analytics for resource management. We also redesigned patient care pathways and staff workflows.",
      results: [
        "Reduced emergency department wait times by 58% (to 1.8 hours)",
        "Increased patient satisfaction scores from 3.1 to 4.7/5",
        "Achieved $4.8 million in annual cost savings",
        "Improved staff efficiency by 42%",
        "Launched telehealth services serving 12,000+ patients monthly"
      ],
      testimonial: "MIFECO's healthcare expertise transformed our entire organization. Their technology solutions and process improvements have made us a leader in patient care while significantly improving our financial performance.",
      clientRole: "Dr. Michael Rodriguez, Chief Medical Officer",
      duration: "24 months",
      teamSize: "15 consultants",
      investment: "$3.2M",
      roi: "450%",
      tags: ["Patient Experience", "Operational Efficiency", "Telemedicine", "Cost Reduction"]
    },
    {
      id: "technology-innovation",
      title: "Fortune 500 Manufacturing Digital Revolution",
      industry: "Technology",
      client: "Global Manufacturing Corp",
      challenge: "A global manufacturing company with $8.5 billion in revenue was struggling with legacy systems, disconnected operations across 23 countries, and inability to leverage data for decision-making. They were losing market share to more agile competitors and facing $45 million in annual inefficiencies.",
      solution: "MIFECO designed and implemented a comprehensive digital transformation strategy including: cloud-native architecture migration, AI-powered predictive maintenance, IoT sensor networks across all facilities, and real-time analytics dashboards. We also established a center of excellence for continuous innovation.",
      results: [
        "Achieved $67 million in annual operational savings",
        "Reduced equipment downtime by 73%",
        "Improved production efficiency by 34%",
        "Accelerated time-to-market for new products by 45%",
        "Established data-driven decision making across all business units"
      ],
      testimonial: "MIFECO's technology expertise and strategic vision transformed our century-old company into a digital leader. Their solutions didn't just modernize our operations - they revolutionized how we compete in the global marketplace.",
      clientRole: "James Chen, Chief Technology Officer",
      duration: "36 months",
      teamSize: "25 consultants",
      investment: "$8.5M",
      roi: "780%",
      tags: ["Digital Transformation", "IoT Implementation", "Predictive Analytics", "Global Operations"]
    },
    {
      id: "space-mars-mission",
      title: "Mars Mission Technology Development - Award-Winning Project",
      industry: "Space Industry",
      client: "International Space Consortium",
      challenge: "A consortium of space agencies and private companies needed innovative solutions for autonomous Mars exploration, including advanced robotics, communication systems, and life support technologies. The project required breakthrough innovations in AI, materials science, and systems integration under extreme constraints.",
      solution: "MIFECO led the development of the Telerobotic Mars Expedition system, featuring: autonomous navigation AI, advanced communication protocols for Earth-Mars data transmission, innovative life support systems, and breakthrough materials for extreme environment operation. Our interdisciplinary team collaborated with leading space agencies and technology partners.",
      results: [
        "Won 1st Place at the 25th Annual International Mars Society Convention",
        "Developed 12 patented technologies for space exploration",
        "Achieved 99.7% mission success rate in simulation testing",
        "Reduced mission costs by $2.3 billion through innovative design",
        "Established new industry standards for Mars exploration technology"
      ],
      testimonial: "MIFECO's space industry expertise is unparalleled. Their innovative solutions and deep technical knowledge have advanced our Mars exploration capabilities by decades. They are true pioneers in space technology development.",
      clientRole: "Dr. Elena Vasquez, Director of Mars Exploration",
      duration: "48 months",
      teamSize: "35 consultants",
      investment: "$12.5M",
      roi: "1200%",
      tags: ["Mars Exploration", "Autonomous Systems", "Space Technology", "Award-Winning Innovation"]
    },
    {
      id: "startup-acceleration",
      title: "TechNova Solutions Strategic Growth Initiative",
      industry: "Technology Startup",
      client: "TechNova Solutions",
      challenge: "A promising AI startup with innovative technology was struggling to scale operations, secure funding, and establish market presence. Despite having breakthrough technology, they lacked strategic direction and operational frameworks needed for rapid growth.",
      solution: "MIFECO provided comprehensive strategic planning including: market positioning strategy, operational scaling frameworks, investor pitch development, and strategic partnership facilitation. We also implemented agile development processes and established key performance metrics.",
      results: [
        "Secured $15 million Series A funding within 6 months",
        "Increased monthly recurring revenue by 450%",
        "Established partnerships with 3 Fortune 500 companies",
        "Scaled team from 12 to 85 employees",
        "Achieved market leadership position in AI-powered analytics"
      ],
      testimonial: "MIFECO's strategic guidance was instrumental in our transformation from a promising startup to a market leader. Their expertise in scaling technology companies is unmatched.",
      clientRole: "Alex Thompson, CEO & Founder",
      duration: "12 months",
      teamSize: "8 consultants",
      investment: "$850K",
      roi: "1800%",
      tags: ["Startup Growth", "Funding Strategy", "Market Positioning", "Operational Scaling"]
    },
    {
      id: "nonprofit-transformation",
      title: "Community Health Network Modernization",
      industry: "Healthcare Nonprofit",
      client: "Community Health Network",
      challenge: "A network of community health centers serving underserved populations was facing funding cuts, outdated systems, and declining service quality. They needed to modernize operations while maintaining their mission of accessible healthcare.",
      solution: "MIFECO developed a comprehensive modernization strategy including: grant funding optimization, technology infrastructure upgrade, service delivery model redesign, and community partnership development. We also implemented performance measurement systems and staff development programs.",
      results: [
        "Increased grant funding by 180% through strategic applications",
        "Improved patient access by 65% through extended hours and telehealth",
        "Reduced operational costs by 35% while maintaining service quality",
        "Established 12 new community partnerships",
        "Achieved 98% patient satisfaction rating"
      ],
      testimonial: "MIFECO helped us transform our organization while staying true to our mission. Their understanding of both healthcare and nonprofit sectors was crucial to our success.",
      clientRole: "Maria Santos, Executive Director",
      duration: "18 months",
      teamSize: "10 consultants",
      investment: "$1.2M",
      roi: "420%",
      tags: ["Nonprofit Management", "Community Health", "Grant Funding", "Service Delivery"]
    }
  ];

  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Industry Case Studies</h2>
              <p className="text-gray-600">Real-world success stories from MIFECO's consulting practice</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Case Study</h3>
            <div className="space-y-3">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedStudy.id === study.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">{study.client}</div>
                  <div className="text-sm text-gray-600 mb-2">{study.industry}</div>
                  <div className="text-xs text-blue-600 font-medium">ROI: {study.roi}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {selectedStudy.industry}
                    </span>
                  </div>
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedStudy.title}</h3>
                <p className="text-lg text-gray-600">{selectedStudy.client}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{selectedStudy.roi}</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{selectedStudy.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{selectedStudy.teamSize}</div>
                  <div className="text-sm text-gray-600">Team Size</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{selectedStudy.investment}</div>
                  <div className="text-sm text-gray-600">Investment</div>
                </div>
              </div>

              {/* Challenge */}
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-red-600" />
                  Challenge
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
                  Solution
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedStudy.solution}</p>
              </div>

              {/* Results */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                  Results
                </h4>
                <ul className="space-y-3">
                  {selectedStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-purple-600" />
                  Client Testimonial
                </h4>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{selectedStudy.testimonial}"
                </blockquote>
                <p className="text-gray-600 font-medium">— {selectedStudy.clientRole}</p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Achieve Similar Results?</h4>
                <p className="mb-4">Let MIFECO's proven expertise drive your organization's success.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Free Consultation
                  </button>
                  <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    View All Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;

