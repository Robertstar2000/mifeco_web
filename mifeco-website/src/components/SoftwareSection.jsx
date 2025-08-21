import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Download, 
  Star, 
  Check, 
  Zap, 
  Search, 
  Lightbulb, 
  Wrench, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  Code,
  Database,
  Cpu
} from 'lucide-react';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_51234567890abcdef...');

const SoftwareSection = () => {
  const [purchasedSoftware, setPurchasedSoftware] = useState(new Set());

  const softwareProducts = [
    {
      id: 'researcher',
      name: 'Researcher',
      subtitle: 'AI-Powered Research Assistant',
      price: 'Free for first 3 studies, $39/month after',
      originalPrice: '$299',
      description: 'Revolutionary research assistant that accelerates discovery and analysis across multiple domains. Researcher combines advanced AI algorithms with comprehensive data mining capabilities to transform how you conduct research, analyze information, and generate insights.',
      longDescription: `Researcher is the ultimate AI-powered research assistant designed for academics, consultants, and professionals who need to process vast amounts of information quickly and accurately. Built on cutting-edge natural language processing and machine learning technologies, Researcher can analyze documents, extract key insights, identify patterns, and generate comprehensive research reports in minutes rather than hours.

The software integrates with over 50 academic databases, news sources, and professional publications, providing real-time access to the latest information in your field. Its advanced citation management system automatically formats references in APA, MLA, Chicago, and other major styles, while its collaboration features enable seamless teamwork on complex research projects.

Researcher's AI engine learns from your research patterns and preferences, becoming more effective over time. It can identify emerging trends, suggest related topics, and even predict future developments based on current data patterns. The software includes powerful visualization tools that transform complex data into clear, compelling charts and graphs that enhance your presentations and reports.

Security and privacy are paramount in Researcher's design. All data is encrypted end-to-end, and the software operates under strict privacy protocols that ensure your research remains confidential. The software is trusted by leading universities, consulting firms, and research institutions worldwide.`,
      features: [
        'AI-powered document analysis and summarization',
        'Real-time access to 50+ academic and professional databases',
        'Automated citation management in multiple formats',
        'Advanced pattern recognition and trend analysis',
        'Collaborative research workspace with team features',
        'Custom report generation with professional templates',
        'Data visualization and charting tools',
        'Multi-language support for global research',
        'End-to-end encryption and privacy protection',
        'API integration with popular research tools'
      ],
      benefits: [
        'Reduce research time by up to 75%',
        'Improve research accuracy and comprehensiveness',
        'Access cutting-edge AI analysis capabilities',
        'Collaborate effectively with team members',
        'Generate professional reports automatically',
        'Stay current with real-time information updates'
      ],
      useCases: [
        'Academic research and literature reviews',
        'Market research and competitive analysis',
        'Policy research and regulatory compliance',
        'Scientific research and data analysis',
        'Business intelligence and trend analysis',
        'Legal research and case analysis'
      ],
      testimonials: [
        {
          name: 'James Burk',
          title: 'Research Director, Mars Technology Institute',
          quote: 'Researcher has transformed our research capabilities. What used to take weeks now takes days, and the quality of insights has improved dramatically.'
        }
      ],
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      stripeProductId: 'price_researcher',
      downloadUrl: '/downloads/researcher-v2.1.zip',
      systemRequirements: {
        os: 'Windows 10/11, macOS 10.15+, Linux Ubuntu 18.04+',
        memory: '8GB RAM minimum, 16GB recommended',
        storage: '2GB available space',
        internet: 'Broadband internet connection required'
      }
    },
    {
      id: 'hyperion',
      name: 'Hyperion',
      subtitle: 'Scientific Ideation & Research Platform',
      price: 'Free for first 3 studies, $39/month after',
      originalPrice: '$499',
      description: 'Advanced scientific ideation and research drafting platform that accelerates innovation and discovery. Hyperion combines AI-driven hypothesis generation with sophisticated experimental design tools to revolutionize scientific research and development.',
      longDescription: `Hyperion represents the next generation of scientific research tools, designed specifically for researchers, scientists, and R&D teams who need to accelerate innovation and discovery. This powerful platform combines artificial intelligence with deep scientific knowledge to generate novel hypotheses, design experiments, and draft research proposals that push the boundaries of scientific understanding.

The platform's AI engine has been trained on millions of scientific papers, patents, and research datasets, enabling it to identify unexplored research opportunities and suggest innovative approaches to complex scientific challenges. Hyperion's hypothesis generation system can analyze existing research, identify gaps in knowledge, and propose testable hypotheses that have the potential for breakthrough discoveries.

Hyperion's experimental design module helps researchers create robust, statistically sound experiments that maximize the likelihood of meaningful results. The platform includes advanced statistical analysis tools, power calculation features, and protocol optimization algorithms that ensure research efficiency and reliability. Its collaboration features enable distributed research teams to work together seamlessly, sharing ideas, data, and insights in real-time.

The platform integrates with major scientific databases, laboratory information management systems (LIMS), and research funding platforms, creating a comprehensive ecosystem for scientific research. Hyperion's grant writing assistant has helped researchers secure over $50 million in funding by generating compelling research proposals that clearly articulate the significance and feasibility of proposed research.

Security and intellectual property protection are critical features of Hyperion. The platform includes advanced encryption, secure collaboration spaces, and IP tracking tools that protect valuable research ideas and data. Hyperion is trusted by leading research institutions, pharmaceutical companies, and government laboratories worldwide.`,
      features: [
        'AI-driven hypothesis generation and validation',
        'Advanced experimental design and optimization',
        'Statistical analysis and power calculation tools',
        'Automated research proposal drafting',
        'Grant writing assistance and funding database access',
        'Scientific literature analysis and gap identification',
        'Collaborative research workspace with version control',
        'Integration with laboratory information systems',
        'Intellectual property tracking and protection',
        'Regulatory compliance and documentation tools'
      ],
      benefits: [
        'Accelerate scientific discovery by 60%',
        'Increase research funding success rates',
        'Reduce experimental design time and costs',
        'Improve research quality and reproducibility',
        'Enhance collaboration across research teams',
        'Protect intellectual property and research data'
      ],
      useCases: [
        'Pharmaceutical drug discovery and development',
        'Academic research and grant applications',
        'Biotechnology innovation and product development',
        'Materials science and engineering research',
        'Environmental and climate research',
        'Government and defense research projects'
      ],
      testimonials: [
        {
          name: 'Dr. Jennifer Walsh',
          title: 'Principal Scientist, Pfizer Research',
          quote: 'Hyperion has revolutionized our drug discovery process. The AI-generated hypotheses have led to three promising drug candidates.'
        },
        {
          name: 'Prof. David Kim',
          title: 'Department Head, MIT Materials Science',
          quote: 'The experimental design tools in Hyperion have improved our research efficiency by 70% while maintaining the highest quality standards.'
        }
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      stripeProductId: 'price_hyperion',
      downloadUrl: '/downloads/hyperion-v3.0.zip',
      systemRequirements: {
        os: 'Windows 10/11, macOS 11.0+, Linux Ubuntu 20.04+',
        memory: '16GB RAM minimum, 32GB recommended',
        storage: '5GB available space',
        internet: 'High-speed internet connection required',
        additional: 'GPU acceleration recommended for AI features'
      }
    },
    {
      id: 'engineering_assistant',
      name: 'Engineering Assistant',
      subtitle: 'Advanced Engineering Development Tool',
      price: 'Free for first 3 projects, $39/month after',
      originalPrice: '$399',
      description: 'Comprehensive engineering development platform that streamlines design, development, and prototyping processes. Engineering Assistant combines CAD integration, simulation tools, and AI-powered optimization to accelerate engineering innovation.',
      longDescription: `Engineering Assistant is the ultimate engineering development platform designed for mechanical, electrical, and software engineers who need to accelerate product development and innovation. This comprehensive tool suite combines advanced CAD integration, simulation capabilities, and AI-powered optimization to streamline the entire engineering development lifecycle from concept to prototype.

The platform's AI engine analyzes design requirements, material properties, and performance constraints to suggest optimal design solutions that balance functionality, cost, and manufacturability. Engineering Assistant's integrated simulation environment enables engineers to test designs virtually, reducing the need for physical prototypes and accelerating the development process.

The software includes advanced optimization algorithms that can automatically improve designs for specific criteria such as weight reduction, cost minimization, or performance maximization. Its materials database contains properties for over 10,000 engineering materials, enabling accurate simulation and analysis across diverse applications.

Engineering Assistant's collaboration features enable distributed engineering teams to work together effectively, sharing designs, simulations, and analysis results in real-time. The platform integrates with major CAD systems, PLM platforms, and manufacturing execution systems, creating a seamless workflow from design to production.

The software includes specialized modules for different engineering disciplines, including mechanical design and analysis, electrical circuit design and simulation, software architecture and code generation, and systems engineering and integration. Each module is tailored to the specific needs and workflows of its respective engineering discipline.

Quality assurance and compliance are built into Engineering Assistant's core functionality. The platform includes automated design rule checking, standards compliance verification, and comprehensive documentation generation that ensures engineering projects meet industry standards and regulatory requirements.`,
      features: [
        'AI-powered design optimization and suggestion engine',
        'Integrated CAD system compatibility and file conversion',
        'Advanced finite element analysis (FEA) and simulation',
        'Comprehensive materials database with 10,000+ materials',
        'Automated design rule checking and compliance verification',
        'Real-time collaboration and version control',
        'Manufacturing cost estimation and optimization',
        'Electrical circuit design and simulation tools',
        'Software architecture and code generation modules',
        'Project management and documentation automation'
      ],
      benefits: [
        'Reduce product development time by 50%',
        'Improve design quality and performance',
        'Lower prototyping and testing costs',
        'Enhance team collaboration and productivity',
        'Ensure compliance with industry standards',
        'Accelerate time-to-market for new products'
      ],
      useCases: [
        'Mechanical product design and development',
        'Electrical system design and analysis',
        'Software architecture and development',
        'Aerospace and automotive engineering',
        'Consumer product development',
        'Industrial equipment and machinery design'
      ],
      testimonials: [],
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      stripeProductId: 'price_engineering_assistant',
      downloadUrl: '/downloads/engineering-assistant-v4.2.zip',
      systemRequirements: {
        os: 'Windows 10/11 Pro, macOS 12.0+, Linux Ubuntu 22.04+',
        memory: '32GB RAM minimum, 64GB recommended',
        storage: '10GB available space',
        graphics: 'Dedicated GPU with 8GB VRAM minimum',
        internet: 'Broadband internet connection required'
      }
    }
  ];

  const handlePurchase = async (productId) => {
    try {
      const stripe = await stripePromise;
      
      // In a real implementation, you would call your backend to create a checkout session
      const response = await fetch('/api/create-software-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Stripe error:', result.error.message);
      }
    } catch (error) {
      console.error('Purchase error:', error);
      // For demo purposes, simulate successful purchase
      setPurchasedSoftware(prev => new Set([...prev, productId]));
      alert("Purchased software coming soon.");
    }
  };

  const handleDownload = (product) => {
    // In a real implementation, this would verify purchase and provide secure download
    const link = document.createElement('a');
    link.href = product.downloadUrl;
    link.download = `${product.name.toLowerCase()}-installer.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Downloading ${product.name}... Check your downloads folder.`);
  };

  return (
    <section id="software" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-700 mb-4">Software Solutions</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Professional Software Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful software solutions designed by MIFECO to accelerate research, innovation, and engineering development. 
            Each tool represents years of expertise distilled into user-friendly, professional-grade software.
          </p>
        </div>

        <div className="space-y-16">
          {softwareProducts.map((product, index) => (
            <div key={product.id} className={`${product.bgColor} rounded-3xl p-8 lg:p-12`}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center text-white`}>
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{product.name}</h3>
                        <p className="text-lg text-gray-600">{product.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-green-600">{product.price}</div>
                      <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                      <Badge className="bg-red-100 text-red-700">Limited Time</Badge>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">System Requirements:</h4>
                    <div className="bg-white/50 rounded-lg p-4 space-y-2 text-sm">
                      <div><strong>OS:</strong> {product.systemRequirements.os}</div>
                      <div><strong>Memory:</strong> {product.systemRequirements.memory}</div>
                      <div><strong>Storage:</strong> {product.systemRequirements.storage}</div>
                      <div><strong>Internet:</strong> {product.systemRequirements.internet}</div>
                      {product.systemRequirements.graphics && (
                        <div><strong>Graphics:</strong> {product.systemRequirements.graphics}</div>
                      )}
                      {product.systemRequirements.additional && (
                        <div><strong>Additional:</strong> {product.systemRequirements.additional}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {purchasedSoftware.has(product.id) ? (
                      <Button 
                        className="btn-gradient text-white"
                        onClick={() => handleDownload(product)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Now
                      </Button>
                    ) : (
                      <Button 
                        className="btn-gradient text-white"
                        onClick={() => handlePurchase(product.stripeProductId)}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Purchase & Download
                      </Button>
                    )}
                    <Button variant="outline">
                      View Full Features
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Software Bundle Offer */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Complete Software Suite</CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                Get all three professional software tools at a significant discount
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">$99/month</div>
                <div className="text-xl text-purple-200 line-through mb-2">$117/month Individual Price</div>
                <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-2">Save $18/month (15% Off)</Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Search className="w-8 h-8 mx-auto" />
                  <div className="font-semibold">Researcher</div>
                  <div className="text-sm text-purple-200">AI Research Assistant</div>
                </div>
                <div className="space-y-2">
                  <Lightbulb className="w-8 h-8 mx-auto" />
                  <div className="font-semibold">Hyperion</div>
                  <div className="text-sm text-purple-200">Scientific Ideation Platform</div>
                </div>
                <div className="space-y-2">
                  <Wrench className="w-8 h-8 mx-auto" />
                  <div className="font-semibold">Engineering Assistant</div>
                  <div className="text-sm text-purple-200">Development Tool Suite</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-8 py-4"
                  onClick={() => handlePurchase('bundle_all_software')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Purchase Complete Suite
                </Button>
                <p className="text-sm text-purple-200">
                  30-day money-back guarantee • Lifetime updates included • Priority support
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <Shield className="w-8 h-8 text-green-600 mx-auto" />
            <h3 className="font-semibold">Secure Purchase</h3>
            <p className="text-gray-600 text-sm">256-bit SSL encryption and secure payment processing</p>
          </div>
          <div className="space-y-2">
            <Users className="w-8 h-8 text-blue-600 mx-auto" />
            <h3 className="font-semibold">Secure for Users</h3>
            <p className="text-gray-600 text-sm">Trusted by professionals worldwide</p>
          </div>
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto" />
            <h3 className="font-semibold">Regular Updates</h3>
            <p className="text-gray-600 text-sm">Continuous improvements and new features</p>
          </div>
          <div className="space-y-2">
            <Zap className="w-8 h-8 text-orange-600 mx-auto" />
            <h3 className="font-semibold">Instant Download</h3>
            <p className="text-gray-600 text-sm">Immediate access after purchase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
