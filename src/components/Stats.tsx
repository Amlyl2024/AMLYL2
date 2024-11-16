import React from 'react';
import { Users, Banknote, TrendingUp } from 'lucide-react';

export default function Stats() {
  return (
    <section id="statistics" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Banknote className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">$250M</h3>
            <p className="text-gray-600">Total Funded</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">12%</h3>
            <p className="text-gray-600">Avg. Returns</p>
          </div>
        </div>
      </div>
    </section>
  );
}