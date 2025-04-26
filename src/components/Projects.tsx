import { useView } from '../context/ViewContext';
import { projectsData } from '../data/content';

const Projects = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Other Projects</h2>
      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={isTechnical ? project.title.technical : project.title.nonTechnical}>
                {(isTechnical ? project.title.technical : project.title.nonTechnical).includes('LookUp') ? '🔍' : 
                 (isTechnical ? project.title.technical : project.title.nonTechnical).includes('Game') ? '🎮' : 
                 (isTechnical ? project.title.technical : project.title.nonTechnical).includes('Navigator') ? '📚' : '💡'}
              </span>
              <a 
                href={`https://github.com/walido2001/${(isTechnical ? project.title.technical : project.title.nonTechnical).toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                {isTechnical ? project.title.technical : project.title.nonTechnical}
              </a>
            </div>
            <p className="text-sm text-gray-500">{project.date}</p>
            <p className="text-gray-600 mt-1">{project.technologies}</p>
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

export default Projects; 