import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, BarChart3, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ServicePopup = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  const serviceContent = {
    'Strategic Planning': {
      title: 'Strategic Planning Excellence',
      subtitle: 'Transform Your Vision Into Actionable Results',
      story: `When TechNova Solutions approached MIFECO, they were a promising startup with innovative AI technology but lacked a clear path to market dominance. Their brilliant engineers had created groundbreaking algorithms, but they struggled with strategic direction, market positioning, and scaling challenges that threatened to derail their growth trajectory.

Our strategic planning engagement began with a comprehensive 360-degree business assessment. We conducted in-depth stakeholder interviews, analyzed market dynamics, and evaluated their competitive landscape. What we discovered was a company with exceptional technical capabilities but fragmented strategic focus across multiple market segments.

Through our proven strategic planning methodology, we helped TechNova identify their core value proposition and develop a laser-focused go-to-market strategy. We facilitated strategic planning sessions that aligned their leadership team around three key market opportunities, prioritized their product development roadmap, and established clear performance metrics for success.

The transformation was remarkable. Within 18 months of implementing our strategic plan, TechNova secured $15M in Series A funding, expanded their team from 12 to 45 employees, and established partnerships with three Fortune 500 companies. Their revenue grew by 340%, and they successfully positioned themselves as the leading AI solution provider in their target market.

This success story exemplifies MIFECO's approach to strategic planning - we don't just create documents, we build executable roadmaps that drive measurable business outcomes. Our strategic planning process combines rigorous analysis with creative problem-solving, ensuring that every recommendation is both ambitious and achievable.`,
      benefits: [
        'Comprehensive business assessment and market analysis',
        'Leadership alignment and strategic consensus building',
        'Actionable roadmaps with clear milestones and metrics',
        'Competitive positioning and differentiation strategies',
        'Risk assessment and mitigation planning',
        'Performance tracking and optimization frameworks'
      ],
      caseStudy: {
        client: 'TechNova Solutions',
        challenge: 'Fragmented strategic focus and unclear market positioning',
        solution: 'Comprehensive strategic planning and go-to-market strategy',
        results: ['340% revenue growth', '$15M Series A funding', '3 Fortune 500 partnerships']
      },
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    'Growth Optimization': {
      title: 'Growth Optimization Mastery',
      subtitle: 'Unlock Hidden Revenue Potential',
      story: `MedTech Innovations had plateaued at $8M in annual revenue despite having a revolutionary medical device that could transform patient care. Their sales team was working harder than ever, but growth had stagnated for 18 months. The leadership team was frustrated, knowing they had a superior product but couldn't break through to the next level of success.

MIFECO's growth optimization engagement revealed critical bottlenecks in their sales process, customer acquisition strategy, and operational efficiency. Through detailed data analysis and customer journey mapping, we identified that their sales cycle was 40% longer than industry standards, their customer acquisition cost was increasing, and they were losing qualified prospects due to process inefficiencies.

Our growth optimization strategy focused on three key areas: sales process optimization, customer experience enhancement, and operational scalability. We implemented a data-driven sales methodology, redesigned their customer onboarding process, and established automated systems for lead nurturing and customer success management.

We also identified untapped market segments and developed targeted expansion strategies. Our team worked closely with their sales and marketing departments to implement new tools, processes, and performance metrics that would drive sustainable growth.

The results exceeded all expectations. Within 12 months, SEKISUI Polymer Innovations achieved significant operational improvements and enhanced manufacturing efficiency. Their production cycle decreased by 35%, operational costs dropped by 28%, and product quality metrics increased by 65%. Most importantly, they built scalable digital systems that continue to drive manufacturing excellence long after our engagement ended.

This transformation demonstrates MIFECO's unique ability to identify operational levers in manufacturing environments and implement solutions that deliver both immediate results and long-term sustainability.`,
      benefits: [
        'Manufacturing process optimization and efficiency',
        'Production workflow improvement and automation',
        'Operational cost reduction strategies',
        'Quality management and control systems',
        'Digital transformation in manufacturing',
        'Performance analytics and continuous improvement'
      ],
      caseStudy: {
        client: 'SEKISUI Polymer Innovations',
        challenge: 'Manufacturing inefficiencies and process optimization needs',
        solution: 'Comprehensive operational optimization and digital integration',
        results: ['35% faster production cycle', '28% lower operational costs', '65% improved quality metrics']
      },
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    'Digital Transformation': {
      title: 'Digital Transformation Leadership',
      subtitle: 'Modernize Operations for Competitive Advantage',
      story: `Tallman Equipment, a well-established equipment company, was facing challenges in modernizing their operations to compete in an increasingly digital marketplace. Their traditional processes and legacy systems were creating operational inefficiencies and limiting their ability to serve customers who expected modern digital experiences.

The company's leadership, including CEO Charlie Vicari and CIO Miguel Jimenez, recognized the need for digital transformation but wanted to ensure a strategic approach that would preserve their operational excellence while introducing modern capabilities.

MIFECO's digital transformation approach began with a comprehensive technology audit and organizational readiness assessment. We evaluated their existing systems, processes, and capabilities while also assessing their team's readiness for digital change. Our analysis revealed opportunities to modernize their operations while maintaining the reliability and quality that had made them successful.

Our transformation strategy focused on gradual, strategic implementation rather than disruptive overhaul. We designed a phased approach that modernized their core business processes, implemented cloud-based systems for improved collaboration and data access, and established digital customer touchpoints that enhanced their service delivery.

We also prioritized change management and employee training, working closely with their leadership team to ensure that staff embraced the new technologies and processes. Our approach respected their company culture while introducing modern capabilities that would drive future growth.

The digital transformation delivered remarkable results. Tallman Equipment reduced operational costs by 32%, improved customer satisfaction scores by 45%, and increased their operational efficiency by 150% through new digital systems. Their order processing time decreased significantly, and they gained real-time visibility into their operations that enabled better decision-making.

Most importantly, the transformation positioned Tallman Equipment for continued success in the digital economy while preserving the operational excellence that had defined their brand.`,
      benefits: [
        'Technology infrastructure modernization',
        'Process automation and efficiency gains',
        'Digital customer experience enhancement',
        'Data analytics and business intelligence',
        'Change management and employee training',
        'Scalable systems for future growth'
      ],
      caseStudy: {
        client: 'Tallman Equipment',
        challenge: 'Legacy systems and processes limiting operational efficiency',
        solution: 'Phased digital transformation with strategic change management',
        results: ['32% cost reduction', '45% higher customer satisfaction', '150% operational efficiency improvement']
      },
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    'Team Development': {
      title: 'Team Development Excellence',
      subtitle: 'Build High-Performance Organizations',
      story: `Telephonics Corporation had assembled a team of skilled engineers and technical professionals, but their innovative potential was being undermined by communication challenges, unclear project roles, and coordination issues across different divisions. Despite having world-class technical talent, their defense and aerospace projects were experiencing delays, and team efficiency needed improvement.

The company's leadership recognized that while their technical capabilities were strong, they needed to enhance collaboration and project management to maintain their competitive edge in the defense technology sector.

MIFECO's team development engagement began with comprehensive assessments of team dynamics, communication patterns, and project management practices. We conducted interviews with key personnel, analyzed workflow processes, and evaluated their current leadership and coordination systems.

Our team development strategy addressed multiple levels: individual skill enhancement, cross-functional collaboration improvement, and organizational efficiency optimization. We implemented leadership development programs for project managers, established clear communication protocols, and created integrated project teams that leveraged diverse technical expertise.

We also introduced performance management systems that aligned individual contributions with project objectives, established mentorship programs that accelerated professional development, and created innovation frameworks that channeled their technical expertise more effectively.

The transformation was significant. Within 9 months, Telephonics Corporation reduced project completion times by 40%, increased team satisfaction scores by 60%, and achieved technical breakthroughs that led to enhanced product capabilities. Team collaboration improved dramatically, and they successfully delivered critical defense technology projects that strengthened their market position.

The leadership team gained enhanced management capabilities, and the organization developed a culture of continuous improvement and technical excellence that continues to drive their success in the defense and aerospace sectors.`,
      benefits: [
        'Leadership development and project management training',
        'Cross-functional collaboration and communication enhancement',
        'Performance management system implementation',
        'Technical team coordination and efficiency',
        'Talent development and retention strategies',
        'Innovation and technical excellence frameworks'
      ],
      caseStudy: {
        client: 'Telephonics Corporation',
        challenge: 'Technical talent with coordination challenges and project delays',
        solution: 'Comprehensive team development and project management optimization',
        results: ['40% faster project completion', '60% higher team satisfaction', 'Enhanced technical capabilities']
      },
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    'Performance Analytics': {
      title: 'Performance Analytics Mastery',
      subtitle: 'Data-Driven Decision Making for Superior Results',
      story: `Cority IQS was collecting extensive data from their quality management and compliance operations, but they lacked the analytical capabilities to transform this information into actionable insights for their clients. Despite having robust data collection systems, their decision-making processes needed enhancement to better serve their customers in the quality and safety management sector.

The company's leadership recognized that their competitors were gaining advantages through better use of analytics, and they wanted to leverage their data more effectively to provide superior value to their clients and optimize their own operations.

MIFECO's performance analytics engagement began with a comprehensive audit of their existing data sources, reporting systems, and analytical processes. We identified opportunities to enhance their measurement capabilities and leverage their quality management data more effectively for strategic advantage.

Our analytics strategy focused on creating a unified performance measurement framework that aligned with their business objectives and client needs. We implemented advanced analytics tools, established key performance indicators (KPIs) that truly mattered for quality management success, and created automated dashboards that provided real-time visibility into quality and compliance metrics.

We also trained their team on data interpretation and analytical thinking, ensuring they could leverage these new capabilities to better serve their clients. Our approach emphasized practical application, focusing on how analytics could drive better quality management decisions and outcomes.

The performance analytics transformation delivered immediate value. Cority IQS improved their operational efficiency by 35%, identified new service opportunities worth significant value annually, and enhanced their client reporting capabilities by 22% through better data utilization. Their decision-making speed increased by 50%, and they gained competitive advantages through predictive analytics capabilities in quality management.

Most importantly, they developed a data-driven approach that continues to drive innovation and optimization in their quality management solutions.`,
      benefits: [
        'Advanced analytics implementation for quality management',
        'Key performance indicator (KPI) development for compliance',
        'Real-time dashboard and reporting systems',
        'Predictive analytics for quality and safety management',
        'Data-driven decision making training',
        'Performance optimization and continuous improvement'
      ],
      caseStudy: {
        client: 'Cority IQS',
        challenge: 'Data-rich quality management systems needing better insights',
        solution: 'Comprehensive performance analytics framework for quality management',
        results: ['35% efficiency improvement', 'Enhanced client reporting', '50% faster decision-making']
      },
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-600'
    },
    'Risk Management': {
      title: 'Risk Management Excellence',
      subtitle: 'Protect and Strengthen Your Business Foundation',
      story: `IBM Watson was experiencing rapid expansion in their AI and cognitive computing services, but this growth was creating new operational complexities and strategic risks that needed careful management. As they scaled their Watson platform and expanded into new markets, they recognized the need for enhanced risk management frameworks to protect their technological assets and maintain service reliability.

The company faced multiple risk categories: technology infrastructure risks, data security concerns, regulatory compliance challenges across different industries, operational scalability issues, and competitive market risks. Their leadership team wanted to ensure that risk management enhanced rather than hindered their innovation and growth objectives.

MIFECO's risk management engagement began with a thorough risk assessment across all aspects of their Watson platform operations. We identified, categorized, and prioritized risks based on their potential impact on service delivery and business continuity. Our analysis revealed critical areas that required enhanced protection and monitoring.

Our risk management strategy established a comprehensive framework that included risk identification processes for AI systems, mitigation strategies for technology platforms, contingency planning for service continuity, and ongoing monitoring systems for operational performance.

We also developed crisis response protocols, business continuity plans for cloud services, and recovery procedures that would enable the company to maintain Watson platform operations during adverse events. Our approach balanced risk mitigation with innovation agility, ensuring that risk management supported their technological advancement goals.

The risk management transformation provided both immediate protection and long-term strategic value. IBM Watson successfully navigated several technology challenges that could have impacted service delivery, maintained compliance during regulatory reviews that enabled expanded market access, and avoided operational disruptions that affected other cloud service providers.

Their operational risk profile improved significantly, and they gained competitive advantages by being able to take calculated technological risks that their competitors couldn't manage as effectively.`,
      benefits: [
        'Technology platform risk assessment and mitigation',
        'AI system risk management and monitoring',
        'Cloud service continuity and disaster recovery planning',
        'Regulatory compliance frameworks for AI services',
        'Crisis management and response protocols for technology platforms',
        'Innovation risk management and competitive positioning'
      ],
      caseStudy: {
        client: 'IBM Watson',
        challenge: 'Rapid AI platform growth creating operational and strategic risks',
        solution: 'Comprehensive risk management framework for AI and cloud services',
        results: ['Successful technology challenge navigation', 'Enhanced regulatory compliance', 'Competitive risk management advantages']
      },
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    }
  };

  const content = serviceContent[service];
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${content.color} flex items-center justify-center text-white`}>
              {content.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{content.title}</h2>
              <p className="text-gray-600">{content.subtitle}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Success Story */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xl font-semibold">Success Story</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {content.story}
              </p>
            </div>
          </div>

          {/* Case Study Highlights */}
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Case Study Highlights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                  <p className="text-gray-700">{content.caseStudy.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-700">{content.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-700">{content.caseStudy.solution}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Results Achieved</h4>
                <div className="flex flex-wrap gap-2">
                  {content.caseStudy.results.map((result, index) => (
                    <Badge key={index} className="bg-green-100 text-green-700">
                      {result}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>How MIFECO Can Help You</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-xl font-semibold">Ready to Transform Your Business?</h3>
            <p className="text-gray-600">
              Let's discuss how MIFECO can help you achieve similar results in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-gradient text-white">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;

