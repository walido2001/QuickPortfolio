import { useView } from '../context/ViewContext';
import { extracurricularsData } from '../data/content';

const Extracurriculars = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Extracurriculars</h2>
      <div className="space-y-6">
        {extracurricularsData.map((activity, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={activity.title}>
                {activity.title.includes('Club') ? '👥' : 
                 activity.title.includes('Volunteer') ? '🤝' : 
                 activity.title.includes('Team') ? '⚽' : '🎭'}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{activity.date}</p>
            <p className="text-gray-600 mt-1">{activity.organization}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {(isTechnical ? activity.technical : activity.nonTechnical).map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars; 