import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from './auth/AuthModal';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Wanderlust</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/international" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">International</Link>
              <a href="#experiences" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiences</a>
              <button 
                onClick={() => navigate('/book')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
              <ThemeToggle />
              <button
                onClick={() => setShowAuthModal(true)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <UserCircle className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Home</Link>
              <Link to="/international" className="block px-3 py-2 text-gray-700 dark:text-gray-300">International</Link>
              <a href="#experiences" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Experiences</a>
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/book')}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}