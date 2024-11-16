import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">AMLYL</span>
            </div>
            <p className="text-slate-400">Connecting lenders and borrowers for a better financial future.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-slate-400 hover:text-primary-400 transition">How it Works</a></li>
              <li><a href="#benefits" className="text-slate-400 hover:text-primary-400 transition">Benefits</a></li>
              <li><a href="#statistics" className="text-slate-400 hover:text-primary-400 transition">Statistics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} AMLYL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}