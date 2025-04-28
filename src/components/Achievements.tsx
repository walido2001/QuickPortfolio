const Achievements = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Awards & Leadership</h2>
      <div className="space-y-6">
        {/* Extracurriculars */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Extracurricular Activities</h3>
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
        </div>

        {/* Awards */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Awards</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label="trophy">🏆</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">York Engineering Consulting Competition 2023</h4>
                  <p className="text-gray-600">1st Place</p>
                  <p className="text-gray-600 mt-1">Presented a cloud-migration strategy allowing the client to uninterruptedly and safely move data from in-house servers to the cloud.</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label="medal">🥈</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">UNHacks Hackathon 2021</h4>
                  <p className="text-gray-600">2nd Place</p>
                  <p className="text-gray-600 mt-1">Pitched a poster-media application to the university that minimizes the growing on-campus poster paper waste by 90%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements 