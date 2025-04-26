import { useView } from '../context/ViewContext';
import { projectsData } from '../data/content';

interface Project {
  title: {
    technical: string;
    nonTechnical: string;
  };
  technologies: string;
  date: string;
  technical: string[];
  nonTechnical: string[];
}

const OtherProjects = () => {
  const { isTechnical } = useView();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Other Projects</h2>
      <div className="space-y-6">
        {projectsData.map((project: Project, index: number) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={isTechnical ? project.title.technical : project.title.nonTechnical}>
                {project.title.technical.includes('LookUp') ? '🔍' : 
                 project.title.technical.includes('Game') ? '🎮' : 
                 project.title.technical.includes('Navigator') ? '🗺️' : '🔧'}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                {isTechnical ? project.title.technical : project.title.nonTechnical}
              </h3>
            </div>
            <p className="text-sm text-gray-500">{project.date}</p>
            <p className="text-gray-600 mt-1">{project.technologies}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {(isTechnical ? project.technical : project.nonTechnical).map((point: string, pointIndex: number) => (
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