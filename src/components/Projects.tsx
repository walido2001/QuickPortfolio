const Projects = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Other Projects</h2>
      <div className="space-y-6">
        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="magnifying glass">🔍</span>
            <a 
              href="https://github.com/walido2001/YuLookUp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              YuLookUp
            </a>
          </div>
          <p className="text-sm text-gray-500">Jan - April 2023</p>
          <p className="text-gray-600 mt-1">Java, JavaFX, Gradle, GSON, Selenium</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Collaborated in team of 3 on building an academic tool helping student navigate through course information</li>
            <li>Worked on integrating a google-looking search engine to browse through course data increasing student efficiency by 40%</li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="video game">🎮</span>
            <a 
              href="https://github.com/walido2001/AsteroidGame" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Asteroid Game
            </a>
          </div>
          <p className="text-sm text-gray-500">November 2021</p>
          <p className="text-gray-600 mt-1">Verilog HDL, DE-10 lite FPGA, Digital Logic Design Principles</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Collaborated on developing a modified Asteroid game using Verilog and a DE-10 Lite board, using digital logic and hardware principles to build a module allowing the board to utilize 7 Segment displays</li>
            <li>Programmed the modules dealing with the board-display connection, in-game mechanics such as asteroid destruction and score/health adjustments</li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label="books">📚</span>
            <a 
              href="https://github.com/walido2001/course-prerequisite-navigator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Course Prerequisite Navigator
            </a>
          </div>
          <p className="text-sm text-gray-500">August 2021</p>
          <p className="text-gray-600 mt-1">Python, Flask, Bootstrap, Selenium Web Scraping</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Developed a web app using Flask serving as a backend backed with a Bootstrap frontend to search and visualize student course prerequisites 90% more effectively than traditional methods</li>
            <li>Web scraped and cleaned over 250 courses' data using Selenium scripts and stored them in JSON files</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects 