import { useView } from '../context/ViewContext';
import { awardsData } from '../data/content';

const Awards = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Awards</h2>
      <div className="space-y-6">
        {awardsData.map((award, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={award.title}>
                {award.title.includes('Hackathon') ? '🏆' : 
                 award.title.includes('Scholarship') ? '🎓' : 
                 award.title.includes('Competition') ? '🥇' : '🌟'}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{award.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{award.date}</p>
            <p className="text-gray-600 mt-1">{award.organization}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {(isTechnical ? award.technical : award.nonTechnical).map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards; 