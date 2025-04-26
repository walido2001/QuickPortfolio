import { useView } from '../context/ViewContext';
import { skillsData } from '../data/content';

const Skills = () => {
  const { isTechnical } = useView();
  const data = isTechnical ? skillsData.technical : skillsData.nonTechnical;

  return (
    <section className="mb-8 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Skills</h2>
      <div className="space-y-6">
        {data.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{section.title}</h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    isTechnical 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 