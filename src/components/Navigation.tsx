
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleMode: () => void;
}

const Navigation = ({ darkMode, toggleMode }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-black/90 backdrop-blur-sm' : 'bg-sky-400/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-xl font-bold ${darkMode ? 'text-sky-400' : 'text-black'}`}>
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`story-link font-medium transition-colors duration-200 ${
                  darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mode Toggle */}
          <button
            onClick={toggleMode}
            className={`hidden md:block px-4 py-2 rounded-lg transition-all duration-200 ${
              darkMode 
                ? 'bg-sky-400 text-black hover:bg-sky-300' 
                : 'bg-black text-sky-400 hover:bg-gray-800'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${darkMode ? 'text-sky-400' : 'text-black'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 ${darkMode ? 'border-sky-400' : 'border-black'} border-t`}>
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleMode}
                className={`self-start px-4 py-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-sky-400 text-black hover:bg-sky-300' 
                    : 'bg-black text-sky-400 hover:bg-gray-800'
                }`}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
