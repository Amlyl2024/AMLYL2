import React from 'react';
import { Shield, Clock, PiggyBank, Users } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 transform opacity-10">
          <svg width="600" height="600" viewBox="0 0 500 500" fill="currentColor" className="text-primary-200">
            <path d="M250 200c-30 0-60 20-90 60-30-40-60-60-90-60s-60 20-90 60v140c30-40 60-60 90-60s60 20 90 60c30-40 60-60 90-60s60 20 90 60c30-40 60-60 90-60V260c-30 0-60 20-90 60-30-40-60-60-90-60z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Experience the advantages of peer-to-peer lending</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Shield className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">Bank-grade security measures to protect your investments and personal information</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Clock className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Process</h3>
            <p className="text-gray-600">Fast approval and disbursement process, with minimal paperwork required</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <PiggyBank className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Better Returns</h3>
            <p className="text-gray-600">Higher interest rates for lenders and lower rates for borrowers</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Users className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">Join a growing community of investors and borrowers helping each other succeed</p>
          </div>
        </div>
      </div>
    </section>
  );
}