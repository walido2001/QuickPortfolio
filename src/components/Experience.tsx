import { useView } from '../context/ViewContext';
import { experienceData } from '../data/content';

const Experience = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">Professional Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {experience.company.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                <p className="text-gray-600">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {(isTechnical ? experience.technical : experience.nonTechnical).map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 