import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Star, Zap, Users, TrendingUp } from 'lucide-react';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_51234567890abcdef...');

const PricingSection = ({ onConsultationClick }) => {
  const plans = [
    {
      name: "Consultation",
      price: "$500",
      period: "per session",
      description: "Perfect for initial strategic assessment and planning",
      features: [
        "2-hour strategic consultation",
        "Business assessment report",
        "Actionable recommendations",
        "Follow-up email support",
        "Resource recommendations"
      ],
      popular: false,
      stripeProductId: "price_consultation",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Strategic Planning",
      price: "$17,500",
      period: "per project plus expenses",
      description: "Comprehensive strategic planning and roadmap development",
      features: [
        "Complete business analysis",
        "Strategic roadmap development",
        "Market opportunity assessment",
        "Competitive analysis",
        "Implementation timeline",
        "Monthly check-ins (3 months)",
        "Team training session"
      ],
      popular: true,
      stripeProductId: "price_strategic_planning",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      name: "Digital Transformation",
      price: "Quotes Available",
      period: "",
      description: "End-to-end digital transformation consulting",
      features: [
        "Technology assessment",
        "Digital strategy development",
        "Process optimization",
        "Technology implementation plan",
        "Change management support",
        "Staff training program",
        "6-month support package",
        "Performance metrics setup"
      ],
      popular: false,
      stripeProductId: "price_digital_transformation",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const handlePayment = async (priceId, planName, price) => {
    try {
      const stripe = await stripePromise;
      
      // For demo purposes, we'll simulate the payment process
      // In production, you would call your backend to create a checkout session
      
      // Show confirmation dialog
      const confirmed = window.confirm(
        `Proceed with payment for ${planName} (${price})?\n\n` +
        `This is a demo - no actual payment will be processed.\n` +
        `In production, this would redirect to Stripe Checkout.`
      );
      
      if (confirmed) {
        // Simulate successful payment
        alert(
          `Payment successful for ${planName}!\n\n` +
          `You will receive an email confirmation at mifecoinc@gmail.com with:\n` +
          `• Service details and next steps\n` +
          `• Calendar link to schedule your consultation\n` +
          `• Access to client portal\n\n` +
          `Thank you for choosing MIFECO!`
        );
        
        // In production, you would:
        // 1. Create checkout session on your backend
        // 2. Redirect to Stripe Checkout
        // 3. Handle success/cancel redirects
        // 4. Send confirmation emails
        // 5. Provide access to purchased services
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment processing error. Please try again or contact support.');
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Pricing Plans</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Choose Your Success Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible consulting packages designed to meet your specific business needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.bgColor} rounded-3xl p-8 card-hover ${
              plan.popular ? 'scale-105 shadow-2xl' : 'shadow-xl'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 text-lg shadow-lg">
                    <Star className="w-5 h-5 mr-2 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 font-bold">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="text-base text-gray-700 font-medium">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 text-lg font-semibold shadow-lg ${
                      plan.popular 
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300` 
                        : `border-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent border-current hover:bg-gradient-to-r hover:${plan.color} hover:text-white transition-all duration-300`
                    }`}
                    onClick={() => handlePayment(plan.stripeProductId, plan.name, plan.price)}
                  >
                    {plan.popular ? (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Get Started Now
                      </>
                    ) : (
                      <>
                        {plan.icon}
                        <span className="ml-2">Choose Plan</span>
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored consulting packages for enterprise clients.
          </p>
          <Button variant="outline" size="lg" onClick={onConsultationClick}>
            <Users className="w-4 h-4 mr-2" />
            Contact for Enterprise Pricing
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
            <h3 className="font-semibold">Proven Results</h3>
            <p className="text-gray-600 text-sm">100% client satisfaction rate with measurable ROI</p>
          </div>
          <div className="space-y-2">
            <Users className="w-8 h-8 text-purple-600 mx-auto" />
            <h3 className="font-semibold">Expert Team</h3>
            <p className="text-gray-600 text-sm">30+ years of experience</p>
          </div>
          <div className="space-y-2">
            <Zap className="w-8 h-8 text-pink-600 mx-auto" />
            <h3 className="font-semibold">Fast Implementation</h3>
            <p className="text-gray-600 text-sm">Quick turnaround with actionable insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
