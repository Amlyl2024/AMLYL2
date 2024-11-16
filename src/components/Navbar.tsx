import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-gray-900">AMLYL</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">How it Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition">Benefits</a>
            <a href="#statistics" className="text-gray-700 hover:text-primary-600 transition">Statistics</a>
            <Link
              to="/apply"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary-600">How it Works</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Benefits</a>
            <a href="#statistics" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Statistics</a>
            <Link
              to="/apply"
              className="block w-full text-center mt-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}