import { useEffect, useLayoutEffect, useState } from "react";
import Project from "./Project";
import { projectsData } from "./projectsData";

const Projects = () => {
  const [projects, setProjects] = useState();
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setLoading(true);
    setProjects(projectsData);
  }, []);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list grid">
        {projects && !isLoading ? (
          projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              imgM={project.imageMobile}
              imgD={project.imageDesktop}
              desc={project.description}
              tech={project.technology}
              ll={project.liveLink}
              cl={project.codeLink}
            />
          ))
        ) : (
          <div>The page is loading</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
