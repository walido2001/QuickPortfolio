import { useView } from '../context/ViewContext';

const Header = () => {
  const { isTechnical, toggleView } = useView();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="px-8 py-12 animate-slide-in-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/profile-photo.jpg"
              alt="Walid AlDari"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl animate-slide-in-left"
            />
            <div className="animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              <h1 className="text-4xl font-bold">Walid AlDari</h1>
              <h2 className="text-xl text-gray-400 mt-2">Software Engineer</h2>
              <div className="mt-4 text-gray-400">
                <p>Bachelor of Engineering, Software Engineering with a focus on Big Data</p>
                <p>York University • GPA: 3.6/4.0</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${!isTechnical ? 'text-gray-400' : 'text-white'}`}>
              Technical
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={!isTechnical}
                onChange={toggleView}
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className={`text-sm font-medium ${isTechnical ? 'text-gray-400' : 'text-white'}`}>
              Non-Technical
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 px-8 py-3 flex justify-center gap-6">
        <button 
          onClick={() => scrollToSection('education')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('awards')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Awards
        </button>
        <button 
          onClick={() => scrollToSection('notable-projects')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Notable Projects
        </button>
        <button 
          onClick={() => scrollToSection('extracurriculars')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Extracurriculars
        </button>
        <button 
          onClick={() => scrollToSection('other-projects')}
          className="text-gray-900 font-medium hover:no-underline"
        >
          Other Projects
        </button>
      </div>
    </div>
  )
}

export default Header 