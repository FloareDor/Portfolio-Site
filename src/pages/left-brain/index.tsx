import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import ProjectGrid, { Project } from '@/components/projectPage/ProjectGrid';

const LeftBrain: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects/left/left-projects.json');
        const data: Record<string, Project> = await response.json();
        // Newest first, so recent work is not buried behind years of older projects.
        const projectsData = Object.values(data)
          .map((project) => ({ ...project, isLeft: true }))
          .sort((a, b) => b.id - a.id);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-14 sm:gap-24 md:gap-24 lg:gap-24 bg-black">
      <Navbar />
      <div className="container mx-auto pt-20 px-4 lg:pt-36 md:lg:pt-36 sm:lg:pt-36">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default LeftBrain;