import { useView } from '../context/ViewContext';
import { otherProjectsData } from '../data/content';

const OtherProjects = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Other Projects</h2>
      <div className="space-y-6">
        {otherProjectsData.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={project.title}>
                {project.title.includes('App') ? '📱' : 
                 project.title.includes('Website') ? '🌐' : 
                 project.title.includes('Game') ? '🎮' : '🔧'}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{project.date}</p>
            <p className="text-gray-600 mt-1">{project.description}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {(isTechnical ? project.technical : project.nonTechnical).map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects; 