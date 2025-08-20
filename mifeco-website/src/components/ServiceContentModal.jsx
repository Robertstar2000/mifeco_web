import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle, Target, TrendingUp, Users, Lightbulb, Award, Building2 } from 'lucide-react';

const ServiceContentModal = ({ isOpen, onClose, serviceType }) => {
  if (!isOpen || !serviceType) return null;

  const serviceContent = {
    'strategic-planning': {
      title: 'Strategic Planning',
      subtitle: 'Transform Your Business Strategy with Expert Guidance',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Strategic planning is the cornerstone of business success, and at MIFECO, we specialize in developing comprehensive strategies that align with your organization\'s vision, market opportunities, and competitive landscape.',
      approach: 'Our methodology combines proven frameworks with innovative thinking to create strategies that are both visionary and practical. We work closely with leadership teams to understand their unique challenges, market position, and growth aspirations.',
      services: [
        'Vision and Mission Development',
        'Market Analysis and Competitive Intelligence', 
        'Strategic Goal Setting',
        'Implementation Planning',
        'Performance Measurement'
      ],
      benefits: [
        'Revenue growth of 200-400%',
        'Market share expansion',
        'Sustainable competitive advantages',
        'Improved organizational alignment',
        'Enhanced decision-making capabilities'
      ],
      caseStudy: {
        client: 'Global Manufacturing Corp',
        challenge: 'Struggling with legacy systems and disconnected operations across 23 countries',
        result: 'Achieved $67 million in annual operational savings and 34% improvement in production efficiency'
      }
    },
    'digital-transformation': {
      title: 'Digital Transformation',
      subtitle: 'Accelerate Your Digital Journey with Proven Expertise',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Digital transformation is essential for survival and growth in today\'s rapidly evolving business landscape. Our services help organizations leverage technology to reimagine operations and enhance customer experiences.',
      approach: 'Our digital transformation approach encompasses technology, processes, people, and culture. We don\'t just implement new systems; we transform how organizations operate, compete, and deliver value.',
      services: [
        'Technology Architecture Design',
        'Process Optimization',
        'Data Analytics and AI Implementation',
        'Cloud Migration',
        'Cybersecurity Framework'
      ],
      benefits: [
        'Cost reductions of 30-50%',
        'Productivity improvements of 40-60%',
        'Enhanced customer satisfaction',
        'Improved operational agility',
        'Future-ready technology infrastructure'
      ],
      caseStudy: {
        client: 'Metropolitan University System',
        challenge: 'Outdated technology infrastructure and fragmented administrative processes',
        result: 'Increased student enrollment by 23% and improved satisfaction scores to 4.6/5'
      }
    },
    'growth-optimization': {
      title: 'Growth Optimization',
      subtitle: 'Unlock Your Organization\'s Growth Potential',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Growth optimization identifies and capitalizes on opportunities to accelerate sustainable growth. Our services help organizations break through growth barriers and achieve their full potential.',
      approach: 'We develop comprehensive growth strategies that consider market dynamics, competitive positioning, resource capabilities, and risk factors to ensure growth initiatives are both ambitious and achievable.',
      services: [
        'Revenue Optimization',
        'Market Expansion Strategy',
        'Operational Efficiency',
        'Partnership Development',
        'Innovation Management'
      ],
      benefits: [
        'Growth rates 2-3x industry average',
        'Improved profitability',
        'Enhanced market position',
        'Sustainable competitive advantages',
        'Optimized resource utilization'
      ],
      caseStudy: {
        client: 'TechNova Solutions',
        challenge: 'Promising AI startup struggling to scale operations and secure funding',
        result: 'Secured $15 million Series A funding and increased monthly recurring revenue by 450%'
      }
    },
    'team-development': {
      title: 'Team Development',
      subtitle: 'Build High-Performance Teams That Drive Results',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Team development is critical to organizational success. Our services help organizations build high-performance teams that consistently deliver exceptional results.',
      approach: 'We focus on developing leadership capabilities, improving team dynamics, and creating cultures that support high performance, innovation, and employee engagement.',
      services: [
        'Leadership Development',
        'Team Performance Optimization',
        'Communication Enhancement',
        'Conflict Resolution',
        'Performance Management Systems'
      ],
      benefits: [
        'Improved employee satisfaction',
        'Higher retention rates',
        'Enhanced collaboration',
        'Increased productivity',
        'Stronger organizational culture'
      ],
      caseStudy: {
        client: 'Regional Medical Center',
        challenge: 'Declining staff morale and inefficient team workflows',
        result: 'Improved staff efficiency by 42% and achieved 98% patient satisfaction rating'
      }
    }
  };

  const content = serviceContent[serviceType];
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${content.color} flex items-center justify-center text-white`}>
              {content.icon}
            </div>
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
          {/* Overview */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{content.description}</p>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">{content.approach}</p>
          </div>

          {/* Key Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Benefits</h3>
            <div className="space-y-3">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Success Story</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-900">Client: </span>
                <span className="text-gray-700">{content.caseStudy.client}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Challenge: </span>
                <span className="text-gray-700">{content.caseStudy.challenge}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Result: </span>
                <span className="text-gray-700">{content.caseStudy.result}</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
            <p className="mb-4">Let's discuss how our {content.title.toLowerCase()} expertise can transform your organization.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Download Service Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContentModal;

