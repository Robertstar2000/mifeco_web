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
      stripeProductId: "price_consultation"
    },
    {
      name: "Strategic Planning",
      price: "$2,500",
      period: "per project",
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
      stripeProductId: "price_strategic_planning"
    },
    {
      name: "Digital Transformation",
      price: "$5,000",
      period: "per project",
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
      stripeProductId: "price_digital_transformation"
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
            <Card
              key={index}
              className={`relative card-hover ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-gradient text-white' 
                      : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => handlePayment(plan.stripeProductId, plan.name, plan.price)}
                >
                  {plan.popular ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get Started Now
                    </>
                  ) : (
                    'Choose Plan'
                  )}
                </Button>
              </CardContent>
            </Card>
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
            <p className="text-gray-600 text-sm">98% client satisfaction rate with measurable ROI</p>
          </div>
          <div className="space-y-2">
            <Users className="w-8 h-8 text-purple-600 mx-auto" />
            <h3 className="font-semibold">Expert Team</h3>
            <p className="text-gray-600 text-sm">15+ years of combined consulting experience</p>
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

