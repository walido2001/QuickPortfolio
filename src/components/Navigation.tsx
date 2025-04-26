import { useState } from 'react';
import { useView } from '../context/ViewContext';

const Navigation = () => {
  const { isTechnical, toggleView } = useView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a section
    }
  };

  const sections = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'notable-projects', label: 'Notable Projects' },
    { id: 'extracurriculars', label: 'Extracurriculars' },
    { id: 'other-projects', label: 'Other Projects' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* View toggle - always visible */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isTechnical ? 'text-gray-400' : 'text-white'}`}>
                Non-Technical
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isTechnical}
                  onChange={toggleView}
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <span className={`text-sm font-medium ${!isTechnical ? 'text-gray-400' : 'text-white'}`}>
                Technical
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 