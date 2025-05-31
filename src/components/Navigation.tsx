
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  darkMode: boolean;
  toggleMode: () => void;
}

const Navigation = ({ darkMode, toggleMode }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', isExternal: false },
    { name: 'About Me', href: '#about', isExternal: false },
    { name: 'Projects', href: '#projects', isExternal: false },
    { name: 'Blog', href: '/blog', isExternal: false },
    { name: 'Contact', href: '#contact', isExternal: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-black/90 backdrop-blur-sm' : 'bg-sky-400/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-sky-400' : 'text-black'}`}>
            <Link to="/">Portfolio</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`story-link font-medium text-sm lg:text-base transition-colors duration-200 ${
                    darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`story-link font-medium text-sm lg:text-base transition-colors duration-200 ${
                    darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mode Toggle */}
          <button
            onClick={toggleMode}
            className={`hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${
              darkMode 
                ? 'bg-sky-400 text-black hover:bg-sky-300' 
                : 'bg-black text-sky-400 hover:bg-gray-800'
            }`}
          >
            <i className={`${darkMode ? 'fas fa-sun' : 'fas fa-moon'} w-4 h-4`}></i>
            <span className="hidden lg:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${darkMode ? 'text-sky-400' : 'text-black'}`}
          >
            <i className={`${isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} w-6 h-6`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 ${darkMode ? 'border-sky-400' : 'border-black'} border-t`}>
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
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
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors duration-200 ${
                      darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-black hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button
                onClick={toggleMode}
                className={`self-start flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-sky-400 text-black hover:bg-sky-300' 
                    : 'bg-black text-sky-400 hover:bg-gray-800'
                }`}
              >
                <i className={`${darkMode ? 'fas fa-sun' : 'fas fa-moon'} w-4 h-4`}></i>
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
