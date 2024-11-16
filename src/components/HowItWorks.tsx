import React from 'react';
import { UserPlus, Search, Handshake, Wallet } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-10">
          <svg width="800" height="800" viewBox="0 0 500 500" fill="currentColor" className="text-primary-200">
            <path d="M250 100c-30 0-60 20-90 60-30-40-60-60-90-60s-60 20-90 60v240c30-40 60-60 90-60s60 20 90 60c30-40 60-60 90-60s60 20 90 60c30-40 60-60 90-60V160c-30 0-60 20-90 60-30-40-60-60-90-60z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to start your lending journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <UserPlus className="h-8 w-8" />,
              title: "Create Account",
              description: "Sign up and complete your profile verification"
            },
            {
              icon: <Search className="h-8 w-8" />,
              title: "Browse Listings",
              description: "Find the perfect investment opportunity"
            },
            {
              icon: <Handshake className="h-8 w-8" />,
              title: "Invest",
              description: "Choose your investment amount and terms"
            },
            {
              icon: <Wallet className="h-8 w-8" />,
              title: "Earn Returns",
              description: "Receive monthly payments with interest"
            }
          ].map((step, index) => (
            <div key={index} className="relative flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-primary-200 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}