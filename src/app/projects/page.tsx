import ProjectCard from "../../components/ProjectCard";
import { Project } from "@/types/project";

import exampleProjects from "../../data/example-projects.json"

async function loadProjects(): Promise<Project[]> {
  try {
    // Optional import if present
    const projects: Project[] = (await import("../../data/projects.json")).default;
    console.log(Array.isArray(projects));
    return projects;
  } catch (error) {
    console.log(error);
    console.warn("projects.json not found, using default values.");
    return exampleProjects;
  }
}

const Projects: React.FC = async () => {
  const projects = await loadProjects();
  return (
    <div>
      <main>
        <h1>My Projects</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
