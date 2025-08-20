import React, { useState } from 'react';
import { X, FileText, Shield, Users, Building, Award, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ContentModal = ({ isOpen, onClose, contentType }) => {
  if (!isOpen) return null;

  const contentData = {
    'about': {
      title: 'About MIFECO',
      subtitle: 'Transforming Businesses Through Strategic Excellence',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold mb-4">Our Story</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Founded in 2018, MIFECO emerged from a vision to bridge the gap between innovative ideas and practical business solutions. Our founders, seasoned consultants with decades of experience across multiple industries, recognized that many organizations struggle not from lack of talent or resources, but from the absence of strategic clarity and execution excellence.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              What began as a boutique consulting firm focused on strategic planning has evolved into a comprehensive business transformation partner, serving clients from startups to Fortune 500 companies. Our unique approach combines deep industry expertise with cutting-edge technology solutions, enabling us to deliver results that exceed expectations.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Today, MIFECO stands as a trusted advisor to organizations worldwide, with a particular expertise in space industry consulting that has earned us recognition from prestigious institutions like The Mars Society. Our award-winning team continues to push the boundaries of what's possible in business consulting and software innovation.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              To empower organizations with the strategic insights, innovative solutions, and execution capabilities needed to achieve breakthrough performance and sustainable competitive advantage. We believe that every business has untapped potential, and our mission is to unlock that potential through expert guidance and transformative solutions.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              To be the world's most trusted partner for business transformation, recognized for our ability to turn complex challenges into competitive advantages. We envision a future where every organization we touch becomes a leader in their industry, driving innovation and creating value for all stakeholders.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Our Values</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-2">Excellence</h4>
                <p class="text-blue-800 text-sm">We pursue excellence in everything we do, from strategic insights to software development, ensuring our clients receive world-class solutions.</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-900 mb-2">Innovation</h4>
                <p class="text-purple-800 text-sm">We embrace innovation as a core driver of success, continuously exploring new methodologies and technologies to benefit our clients.</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-900 mb-2">Integrity</h4>
                <p class="text-green-800 text-sm">We operate with unwavering integrity, building trust through transparency, honesty, and ethical business practices.</p>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-900 mb-2">Partnership</h4>
                <p class="text-orange-800 text-sm">We view our clients as partners, working collaboratively to achieve shared goals and long-term success.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Leadership Team</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Robert Mills, President & CEO</h4>
                <p class="text-gray-700 text-sm mb-2">
                  With over 20 years of experience in strategic consulting and space industry innovation, Robert leads MIFECO's vision and strategic direction. A Michigan State University graduate, he serves as Board Director at Blacksands and Board of Advisors at Mars Technology Institute. Robert is a 2022 winner of the Mars Society Telerobotic competition, demonstrating his expertise in space technology and AI applications.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Strategic Planning</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Space Industry</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">AI & Innovation</span>
                  <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Mars Technology</span>
                </div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Cindy Buckner, Administrator & Technical Writer</h4>
                <p class="text-gray-700 text-sm mb-2">
                  Cindy brings exceptional organizational skills and technical writing expertise to MIFECO's operations. She ensures seamless project coordination and creates comprehensive documentation that supports our consulting engagements and software development initiatives.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Technical Writing</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Project Administration</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Documentation</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Board of Advisors</h3>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Sebastian Fries, Strategic Advisor</h4>
                <p class="text-gray-700 text-sm mb-2">
                  President & CEO of International House New York, Sebastian brings extensive experience in international education and organizational transformation. His leadership in modernizing educational institutions and fostering global collaboration provides valuable strategic insights for our education sector consulting practice.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Educational Leadership</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">International Relations</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Organizational Development</span>
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Martin Stallone, MD, Healthcare Advisor</h4>
                <p class="text-gray-700 text-sm mb-2">
                  President & CEO of Cayuga Medical Center, Dr. Stallone brings deep expertise in healthcare administration and medical technology integration. His experience in hospital operations and healthcare innovation provides strategic guidance for our healthcare consulting initiatives.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Healthcare Administration</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Medical Technology</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Hospital Operations</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Strategic Partners</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Charlie Vicari</h4>
                <p class="text-gray-700 text-sm mb-1">CEO, Tallman Equipment Co Inc</p>
                <p class="text-gray-600 text-xs">Equipment & Technology Solutions</p>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Chad Kelley</h4>
                <p class="text-gray-700 text-sm mb-1">CFO, Tallman Equipment Co Inc</p>
                <p class="text-gray-600 text-xs">Financial Strategy & Operations</p>
              </div>
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Miguel Jimenez</h4>
                <p class="text-gray-700 text-sm mb-1">CIO, Tallman Equipment Co Inc</p>
                <p class="text-gray-600 text-xs">Information Technology & Systems</p>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">John Downey</h4>
                <p class="text-gray-700 text-sm mb-1">Marketing Director, Tallman Equipment</p>
                <p class="text-gray-600 text-xs">Marketing & Business Development</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Awards & Recognition</h3>
            <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Award class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-orange-900">Mars Society First Place Award</h4>
                  <p class="text-orange-700">Telerobotic Mars Expedition Design Competition</p>
                </div>
              </div>
              <p class="text-orange-800 text-sm">
                Recognized for outstanding innovation in space exploration technology and strategic planning for Mars mission development. This prestigious award highlights MIFECO's expertise in cutting-edge space industry consulting.
              </p>
            </div>
          </div>
        </div>
      `
    },
    'privacy': {
      title: 'Privacy Policy',
      subtitle: 'Your Privacy is Our Priority',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <p class="text-green-800 font-medium">
              Effective Date: January 1, 2025 | Last Updated: January 1, 2025
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-3">Information We Collect</h3>
            <p class="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, schedule consultations, purchase software, or contact us for support. This includes contact information, professional details, and payment information.
            </p>
            <p class="text-gray-700 mb-4">
              We also automatically collect certain information when you use our website, including usage data, device information, and location data through cookies and similar technologies.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">How We Use Your Information</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Providing and improving our consulting services and software products</li>
              <li>Processing payments and managing your account</li>
              <li>Communicating with you about our services and updates</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Complying with legal obligations and protecting our rights</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Information Sharing</h3>
            <p class="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, and when required by law or to protect our rights and safety.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Data Security</h3>
            <p class="text-gray-700 mb-4">
              We implement comprehensive security measures including encryption, access controls, and regular security audits to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Your Rights</h3>
            <p class="text-gray-700 mb-4">
              You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications and withdraw consent for certain processing activities.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">Contact Us</h4>
            <p class="text-blue-800 text-sm">
              For questions about this privacy policy or our privacy practices, contact us at privacy@mifeco.com or +1 (555) 123-4567.
            </p>
          </div>
        </div>
      `
    },
    'terms': {
      title: 'Terms of Service',
      subtitle: 'Terms and Conditions of Use',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      content: `
        <div class="space-y-6">
          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="text-purple-800 font-medium">
              Effective Date: January 1, 2025 | Last Updated: January 1, 2025
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Agreement to Terms</h3>
            <p class="text-gray-700 mb-4">
              By accessing and using MIFECO's website, purchasing our software products, or engaging our consulting services, you agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and MIFECO.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Description of Services</h3>
            <p class="text-gray-700 mb-4">
              MIFECO provides professional business consulting services and software solutions, including strategic planning, digital transformation, growth optimization, and specialized software products for research and engineering.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Acceptable Use Policy</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Do not violate any laws or regulations in your use of our services</li>
              <li>Do not infringe upon intellectual property rights of others</li>
              <li>Do not engage in any conduct that restricts others' use of our services</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Intellectual Property Rights</h3>
            <p class="text-gray-700 mb-4">
              All content, features, and functionality of our services are owned by MIFECO and protected by intellectual property laws. Software purchases grant you a limited license to use the software in accordance with the applicable End User License Agreement.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Payment Terms</h3>
            <p class="text-gray-700 mb-4">
              Consulting fees are based on the scope of work outlined in applicable agreements. Software purchases are processed through secure payment systems. All fees are non-refundable unless otherwise specified in our refund policy.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-3">Limitation of Liability</h3>
            <p class="text-gray-700 mb-4">
              Our services are provided "as is" without warranties. Our total liability shall not exceed the amount you paid to us in the twelve months preceding any claim.
            </p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">Important Notice</h4>
            <p class="text-red-800 text-sm">
              These Terms may be modified at any time. Continued use of our services constitutes acceptance of any modifications. Please review these Terms periodically.
            </p>
          </div>
        </div>
      `
    },
    'careers': {
      title: 'Careers at MIFECO',
      subtitle: 'Join Our Team of Excellence',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold mb-4">Why Work at MIFECO?</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              At MIFECO, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning where every team member can thrive and make a meaningful impact on our clients' success.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Join a team that's at the forefront of business consulting and software innovation, working with prestigious clients across multiple industries including the cutting-edge space sector.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Our Culture</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-2">Innovation-Driven</h4>
                <p class="text-blue-800 text-sm">We encourage creative thinking and innovative solutions to complex business challenges.</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-900 mb-2">Collaborative</h4>
                <p class="text-purple-800 text-sm">We work together as a team, sharing knowledge and supporting each other's growth.</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-900 mb-2">Growth-Oriented</h4>
                <p class="text-green-800 text-sm">We invest in our people's professional development and career advancement.</p>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-900 mb-2">Impact-Focused</h4>
                <p class="text-orange-800 text-sm">We measure success by the positive impact we create for our clients and communities.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Benefits & Perks</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-gray-700">Competitive salary and performance-based bonuses</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700">Comprehensive health, dental, and vision insurance</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">401(k) retirement plan with company matching</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span class="text-gray-700">Flexible work arrangements and remote work options</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-gray-700">Professional development and training opportunities</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Generous paid time off and sabbatical programs</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Current Openings</h3>
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-lg mb-2">Senior Business Consultant</h4>
                <p class="text-gray-600 mb-2">Full-time • Remote/Hybrid • $120,000 - $150,000</p>
                <p class="text-gray-700 text-sm mb-3">
                  Lead strategic consulting engagements for Fortune 500 clients. Requires 7+ years of consulting experience and expertise in digital transformation.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Strategy</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Leadership</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Client Management</span>
                </div>
              </div>

              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-lg mb-2">Software Engineer - AI/ML</h4>
                <p class="text-gray-600 mb-2">Full-time • On-site • $100,000 - $130,000</p>
                <p class="text-gray-700 text-sm mb-3">
                  Develop and enhance our AI-powered software products. Requires expertise in machine learning, Python, and software architecture.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Python</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Machine Learning</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">AI Development</span>
                </div>
              </div>

              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-lg mb-2">Space Industry Analyst</h4>
                <p class="text-gray-600 mb-2">Full-time • Hybrid • $90,000 - $110,000</p>
                <p class="text-gray-700 text-sm mb-3">
                  Research and analyze space industry trends, support client engagements in aerospace sector. Requires background in aerospace engineering or related field.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Aerospace</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Research</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p class="text-gray-700 mb-4">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our growing team.
            </p>
            <div class="space-y-2">
              <p class="text-sm text-gray-600">Send your resume and cover letter to:</p>
              <p class="font-semibold text-blue-600">careers@mifeco.com</p>
            </div>
          </div>
        </div>
      `
    }
  };

  const content = contentData[contentType];
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

        <div className="p-6">
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      </div>
    </div>
  );
};

export default ContentModal;

