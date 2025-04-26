import { useView } from '../context/ViewContext';
import { extracurricularsData } from '../data/content';

const Extracurriculars = () => {
  const { isTechnical } = useView();

  return (
    <div className="space-y-6">
      {extracurricularsData.map((activity, index) => (
        <div key={index} className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label={activity.title}>
              {activity.title.includes('Finance') ? '💰' : activity.title.includes('IT') ? '💻' : '👥'}
            </span>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{activity.title}</h4>
              <p className="text-gray-600">{activity.organization}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {(isTechnical ? activity.technical : activity.nonTechnical).map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Extracurriculars; 