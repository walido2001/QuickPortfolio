const Extracurriculars = () => {
  return (
    <div className="space-y-6">
      <div className="border-l-2 border-gray-200 pl-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="finance">💰</span>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">VC Finance & Consulting Lead</h4>
            <p className="text-gray-600">York Engineering Competition</p>
            <p className="text-sm text-gray-500">Jul. 2024 – Nov. 2024</p>
          </div>
        </div>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Met with executives to handle financial needs and ensure transactions are logged through Excel guaranteeing financial safety.</li>
          <li>Lead the consulting competition by preparing the consulting case and judging guidelines and evaluated over 10 teams' strategies.</li>
          <li>Proposed a marketing strategy resulting in 15% increase in participation of the consulting competition compared to previous years.</li>
          <li>Oversaw a team of sponsorship juniors leading to a 70% increase in funding from various big time sponsors such as Scotiabank and Redbull.</li>
        </ul>
      </div>

      <div className="border-l-2 border-gray-200 pl-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="computer">💻</span>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">IT Director</h4>
            <p className="text-gray-600">Lassonde Engineering Society</p>
            <p className="text-sm text-gray-500">Sep. 2021 – Apr. 2022</p>
          </div>
        </div>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Built a course prerequisite tool using Flask, Selenium, and Bootstrap to cut prerequisite search time by 70%.</li>
          <li>Worked with another Director to implement official site features and handle supervisor requests through SquareSpace.</li>
          <li>Proposed various new site features increasing web traffic by 10%.</li>
        </ul>
      </div>

      <div className="border-l-2 border-gray-200 pl-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="mentor">👥</span>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Mentor</h4>
            <p className="text-gray-600">UNHacks Hackathon 2021</p>
            <p className="text-sm text-gray-500">November 2021</p>
          </div>
        </div>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Aided over 10 teams in preparing slide decks for pitching, exploring various stakeholders, narrowing scope of research, and precisely formulating problem statements to tackle UN-oriented cases.</li>
        </ul>
      </div>
    </div>
  )
}

export default Extracurriculars 