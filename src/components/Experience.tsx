const Experience = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
      <div className="space-y-6">
        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              YorkU
            </div>
            <div>
              <h3 className="text-xl font-semibold">Teaching Assistant</h3>
              <p className="text-gray-600">Lassonde School Of Engineering - York University</p>
              <p className="text-sm text-gray-500">Jan. 2023 – Aug. 2024</p>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Taught and led classes of up to 80 students maintaining a supportive learning environment.</li>
            <li>Tailored over 30 presentations for various classes to ensure proper material delivery and maintaining 75% class attendance average.</li>
            <li>Graded over 300 student papers meticulously following rubrics set by the Professors to maintain a 60% class average.</li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">U</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-gray-600">UMMA</p>
              <p className="text-sm text-gray-500">Jun. 2023 – Aug. 2023</p>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Collaborated with a UI/UX designer to design a landing page in Figma and build it with ReactJS to deliver the startup's vision ensuring alignment with the business requirements, professional tone, and iterative feedback from the cofounders.</li>
            <li>Assisted in the technical system design of the neo-banking architecture, ensuring scalability, high availability, and cost-efficiency while adhering to the constraints and best practices in distributed systems and cloud computing.</li>
            <li>Aided the cofounder in maintaining an existing Excel file of investors, startup incubators, and VCs, aiding efforts in fundraising.</li>
          </ul>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              Holman
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-gray-600">Holman Automotive</p>
              <p className="text-sm text-gray-500">Sep. 2022 – Dec. 2022</p>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Contributed to the development of a data analysis tool utilizing a ReactJS front-end coupled with an ASP.NET API following REST principles to visualize and summarize customer behavioral patterns of web app usage and increase their readability by 70%.</li>
            <li>Built a CRUD-based ReactJS web application connected to an ExpressJS server that stores on a MongoDB database that maintains a directory of the company's endpoints to reduce developer's API links' search duration by 50%.</li>
            <li>Presented the data tool to company VPs and technical managers articulating it's business implications and technical structure.</li>
            <li>Improved code quality through active addressing of team comments along with pushing out biweekly Pull Requests using Team Foundation Server with Git.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience 