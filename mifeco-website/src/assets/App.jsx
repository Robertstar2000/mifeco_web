import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  Lightbulb, 
  Award, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Play, 
  Download, 
  Calendar, 
  MessageSquare, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';

// Import components
import SEOHead from './components/SEOHead';
import PricingSection from './components/PricingSection';
import IndustriesSection from './components/IndustriesSection';
import ServicePopup from './components/ServicePopup';
import CalendarScheduler from './components/CalendarScheduler';
import VideoModal from './components/VideoModal';
import SoftwareSection from './components/SoftwareSection';
import ContentModal from './components/ContentModal';
import IndustryPopup from './components/IndustryPopup';
import ServiceContentModal from './components/ServiceContentModal';
import ConsultationBookingModal from './components/ConsultationBookingModal';

// Import images
import heroIllustration from './assets/mifeco_hero_illustration.jpg';
import businessTeam from './assets/business_consulting_team.jpg';
import marsRover from './assets/mars_rover_technology.jpg';
import modernOffice from './assets/modern_office_technology.jpg';
import marsSocietyAward from './assets/mars_society_award.jpg';
import mifecoClients from './assets/mifeco-clients.jpeg';
import strategicPlanningIcon from './assets/strategic_planning_icon.jpg';
import demoVideo from './assets/mifeco_demo_video_new.mp4';
import mtiLogo from './assets/mti_logo.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [contentModal, setContentModal] = useState({ isOpen: false, type: null });
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isIndustryPopupOpen, setIsIndustryPopupOpen] = useState(false);
  const [serviceContentModal, setServiceContentModal] = useState({ isOpen: false, serviceType: null });
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies that align with your business objectives and market opportunities.",
      color: "from-blue-500 to-blue-600",
      link: "/strategic-planning",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Optimization",
      description: "Identify and capitalize on growth opportunities through data-driven insights and market analysis.",
      color: "from-purple-500 to-purple-600",
      link: "/growth-optimization",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions and digital workflows.",
      color: "from-pink-500 to-pink-600",
      link: "/digital-transformation",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Development",
      description: "Build high-performing teams through leadership training and organizational development.",
      color: "from-green-500 to-green-600",
      link: "/team-development",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Measure and optimize performance with advanced analytics and KPI tracking systems.",
      color: "from-orange-500 to-orange-600",
      link: "/performance-analytics",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to ensure sustainable operations.",
      color: "from-red-500 to-red-600",
      link: "/risk-management",
    },
  ];

  const testimonials = [
    {
      name: "Sebastian Fries",
      role: "President & CEO, International House New York",
      content: "MIFECO's strategic guidance transformed our IT governance and digital infrastructure. Their education sector expertise helped us modernize operations and improve resident satisfaction significantly.",
      rating: 5
    },
    {
      name: "Ronn Cort",
      role: "COO & President, SEKISUI Polymer Innovations",
      content: "The team's technical depth and manufacturing expertise helped us streamline our digital transformation initiatives. MIFECO delivered exceptional results in our technology integration project.",
      rating: 5
    },
    {
      name: "Martin Stallone, MD",
      role: "President & CEO, Cayuga Medical Center",
      content: "MIFECO's healthcare consulting expertise exceeded our expectations. Their comprehensive IS assessment and infrastructure planning significantly improved our patient care capabilities and operational efficiency.",
      rating: 5
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEOHead />
        
        {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-custom shadow-lg' : 'bg-white/95 backdrop-blur-custom'
      } border-b`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-4xl font-black">
              <span className="text-red-500">M</span>
              <span className="text-orange-500">I</span>
              <span className="text-yellow-500">F</span>
              <span className="text-green-500">E</span>
              <span className="text-blue-500">C</span>
              <span className="text-purple-500">O</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isIndustriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <a href="#education" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <div className="font-medium">Education Consulting</div>
                    <div className="text-sm text-gray-500">Universities & Educational Institutions</div>
                  </a>
                  <a href="#healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <div className="font-medium">Healthcare Consulting</div>
                    <div className="text-sm text-gray-500">Hospitals & Health Systems</div>
                  </a>
                  <a href="#technology" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <div className="font-medium">Technology Consulting</div>
                    <div className="text-sm text-gray-500">Software & Technology Companies</div>
                  </a>
                  <a href="#space" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <div className="font-medium">Space Industry Consulting</div>
                    <div className="text-sm text-gray-500">Space Technology & Innovation</div>
                  </a>
                </div>
              )}
            </div>
            <button 
              onClick={() => setContentModal({ isOpen: true, type: 'about' })}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => setContentModal({ isOpen: true, type: 'careers' })}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Careers
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button className="btn-gradient text-white" onClick={() => setIsConsultationModalOpen(true)}>
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#software" className="block text-gray-600 hover:text-blue-600 transition-colors">Software</a>
              <a href="#industries" className="block text-gray-600 hover:text-blue-600 transition-colors">Industries</a>
              <button 
                onClick={() => setContentModal({ isOpen: true, type: 'about' })}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => setContentModal({ isOpen: true, type: 'careers' })}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                Careers
              </button>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 section-padding">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="accent-dot"></div>
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-800 border-0 text-lg px-6 py-2 shadow-lg">
                    🚀 Transform Your Business Today
                  </Badge>
                  <div className="accent-dot"></div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-shadow">
                  <span className="gradient-text block mb-2">
                    Strategic Solutions
                  </span>
                  <span className="text-gray-900">
                    That Drive <span className="text-gradient-pink">Results</span>
                  </span>
                </h1>
                <div className="section-divider w-24"></div>
                <p className="text-xl lg:text-2xl text-gray-900 leading-relaxed font-semibold">
                  Unlock your business potential with our comprehensive consulting services. From strategy development
                  to digital transformation, we deliver <span className="text-gradient-blue font-bold">measurable outcomes</span> that accelerate growth and maximize ROI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="btn-gradient text-white text-lg px-10 py-4 shadow-2xl"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-4 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg backdrop-blur-sm" 
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-6 h-6 mr-3" />
                  Watch Demo
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  onClick={() => document.getElementById('software').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="w-6 h-6 mr-3" />
                  Buy AI Solutions
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="icon-container w-16 h-16 mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient-blue mb-1">25+</div>
                  <div className="text-sm text-gray-600 font-medium">Prestigious Clients</div>
                </div>
                <div className="text-center group">
                  <div className="icon-container w-16 h-16 mx-auto mb-3" style={{background: 'linear-gradient(135deg, #8b5cf6, #ec4899)'}}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient-purple mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center group">
                  <div className="icon-container w-16 h-16 mx-auto mb-3" style={{background: 'linear-gradient(135deg, #ec4899, #f59e0b)'}}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient-pink mb-1">30+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative hero-animation">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative z-10 border-gradient rounded-3xl p-2">
                <img
                  src={heroIllustration}
                  alt="Business Strategy Illustration"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex justify-center">
              <img
                src={mifecoClients}
                alt="MIFECO Client Logos including Watson, Berkeley, Columbia University, Telephonics, ECFMG, Cayuga Health System, and more"
                className="rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity max-w-full h-auto"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div>Educational Institutions</div>
              <div>Healthcare Organizations</div>
              <div>Technology Companies</div>
              <div>Government Agencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Awards & Recognition</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Award-Winning Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to innovation and excellence has been recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <img
                src={marsSocietyAward}
                alt="Mars Society First Place Award"
                className="mx-auto rounded-lg shadow-lg mb-4 max-w-full h-auto"
              />
              <h3 className="text-xl font-bold mb-2">🏆 Mars Society Winner</h3>
              <p className="text-gray-600">First Place - Telerobotic Mars Expedition Design Competition 2022</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">🏅 InnoCentive Awards</h3>
              <p className="text-gray-600">3x Winner - Innovation Challenge Recognition</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">📰 Media Recognition</h3>
              <p className="text-gray-600">Featured in Wired Magazine for Technology Innovation</p>
            </div>

            <div className="text-center">
              <img
                src={mtiLogo}
                alt="Mars Technology Institute Logo"
                className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">🚀 MTI Affiliate</h3>
              <p className="text-gray-600">
                <a 
                  href="https://www.marstechtinstitute.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Mars Technology Institute
                </a> - Advancing Mars exploration technology
              </p>
            </div>
          </div>

          {/* MTI Affiliation Details */}
          <div className="mt-12 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mars Technology Institute Partnership</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                MIFECO is proud to be an affiliate of the Mars Technology Institute (MTI), a leading research organization 
                dedicated to advancing technologies for Mars exploration and colonization. Through this partnership, we contribute 
                to breakthrough innovations in space technology, life support systems, and autonomous exploration capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🔬</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Research Collaboration</h4>
                <p className="text-sm text-gray-600">Joint research projects in Mars exploration technology and systems engineering</p>
              </div>
              
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🛰️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Technology Development</h4>
                <p className="text-sm text-gray-600">Contributing to next-generation Mars mission technologies and innovations</p>
              </div>
              
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🌌</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Space Innovation</h4>
                <p className="text-sm text-gray-600">Advancing the future of human presence on Mars through strategic consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="accent-dot"></div>
              <Badge className="bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 border-0 text-lg px-6 py-2 shadow-lg">
                Our Services
              </Badge>
              <div className="accent-dot"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Comprehensive Business</span>
              <br />
              <span className="text-gray-900">Solutions</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              From strategic planning to digital transformation, we offer end-to-end solutions that drive sustainable
              growth and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group card-hover relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        {service.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-50"></div>
                    </div>
                    <CardTitle className="text-2xl mb-3 font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-700 mb-6 font-medium leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="ghost" 
                      className={`p-0 h-auto bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:bg-gradient-to-r hover:${service.color} hover:text-white hover:bg-clip-border px-4 py-2 rounded-lg transition-all duration-300 font-semibold`}
                      onClick={() => setSelectedService(service.title)}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Service Features Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Strategic Focus</h3>
              <p className="text-sm text-gray-600">Tailored strategies for your unique business needs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">100% success rate with measurable outcomes</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-sm text-gray-600">Quick turnaround with actionable insights</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">30+ years of industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection 
        setSelectedIndustry={setSelectedIndustry}
        setIsIndustryPopupOpen={setIsIndustryPopupOpen}
        onConsultationClick={() => setIsConsultationModalOpen(true)}
      />

      {/* Software Section */}
      <SoftwareSection />

      {/* Pricing Section */}
      <PricingSection onConsultationClick={() => setIsConsultationModalOpen(true)} />

      {/* Space Industry Section */}
      <section className="section-padding space-bg relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">Space Industry Expertise</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Leading the Space Economy</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              MIFECO is uniquely positioned at the intersection of strategic consulting and space technology innovation,
              serving the rapidly expanding $1.8T space economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Mars Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Award-winning expertise in Mars exploration technology, including telerobotic systems and 
                  long-duration life support systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Space Supply Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Direct relationships with key space industry suppliers including Dunmore, Tallman Equipment, 
                  and Blacksands for comprehensive market access.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Research Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Collaborative relationships with Columbia University, UC Berkeley, and Mars Technology Institute 
                  for cutting-edge research and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="accent-dot"></div>
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 text-lg px-6 py-2 shadow-lg">
                Client Success
              </Badge>
              <div className="accent-dot"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">What Our Clients</span>
              <br />
              <span className="text-gray-900">Say</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Hear from the leaders who have transformed their organizations with MIFECO's strategic guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-emerald-500 to-teal-500'
              ];
              const bgColors = [
                'bg-gradient-to-br from-blue-50 to-cyan-50',
                'bg-gradient-to-br from-purple-50 to-pink-50',
                'bg-gradient-to-br from-emerald-50 to-teal-50'
              ];
              return (
                <div key={index} className={`relative ${bgColors[index]} rounded-3xl p-8 card-hover shadow-xl`}>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-full"></div>
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div key={i} className={`w-6 h-6 rounded-full bg-gradient-to-r ${colors[index]} flex items-center justify-center`}>
                              <Star className="w-4 h-4 text-white fill-current" />
                            </div>
                          ))}
                        </div>
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${colors[index]} flex items-center justify-center shadow-lg`}>
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <CardDescription className="text-gray-700 text-base italic font-medium leading-relaxed">
                        "{testimonial.content}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors[index]} flex items-center justify-center text-white font-bold text-lg`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gradient-blue mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gradient-purple mb-2">25+</div>
              <div className="text-sm text-gray-600 font-medium">Success Stories</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-gradient-pink mb-2">30+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Project Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Get Started</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our experts and discover how MIFECO can accelerate your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">(248) 207-1524</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">mifecoinc@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-600">Florida and Michigan</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Get in touch with our team to discuss your business challenges and opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Company" />
                <Input placeholder="Phone Number" type="tel" />
                <textarea
                  className="w-full p-3 border rounded-lg resize-none"
                  rows={4}
                  placeholder="Tell us about your project..."
                ></textarea>
                <Button size="lg" className="btn-gradient text-white" onClick={() => setIsConsultationModalOpen(true)}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-red-500">M</span>
                  <span className="text-orange-500">I</span>
                  <span className="text-yellow-500">F</span>
                  <span className="text-green-500">E</span>
                  <span className="text-blue-500">C</span>
                  <span className="text-purple-500">O</span>
                </span>
              </div>
              <p className="text-gray-400">
                Strategic consulting services that drive measurable results for startups and growing companies.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Strategic Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Growth Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Space Industry</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => setContentModal({ isOpen: true, type: 'about' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setContentModal({ isOpen: true, type: 'careers' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Careers
                  </button>
                </li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li>
                  <button 
                    onClick={() => setContentModal({ isOpen: true, type: 'privacy' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setContentModal({ isOpen: true, type: 'terms' })}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIFECO. All rights reserved. | Make Your Business Better</p>
          </div>
        </div>
      </footer>
      
      {/* Service Popup */}
      <ServicePopup 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      
      {/* Calendar Scheduler */}
      <CalendarScheduler 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc={demoVideo}
        title="MIFECO Strategic Consulting Demo"
      />
      {/* Content Modal */}
      <ContentModal 
        isOpen={contentModal.isOpen} 
        onClose={() => setContentModal({ isOpen: false, type: null })} 
        contentType={contentModal.type}
      />
      
      {/* Industry Popup */}
      <IndustryPopup 
        isOpen={isIndustryPopupOpen} 
        onClose={() => setIsIndustryPopupOpen(false)} 
        industry={selectedIndustry}
      />
      {/* Service Content Modal */}
      <ServiceContentModal 
        isOpen={serviceContentModal.isOpen} 
        onClose={() => setServiceContentModal({ isOpen: false, serviceType: null })} 
        serviceType={serviceContentModal.serviceType}
      />
      
      {/* Consultation Booking Modal */}
      <ConsultationBookingModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
      </div>
    </HelmetProvider>
  );
}

export default App;
