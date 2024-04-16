import React from 'react';
import Navbar from '@/components/navbar/navbar';
import ProjectGrid from '@/components/projectPage/ProjectGrid';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Project extends ProjectData {
  isLeft: boolean;
}

const RightBrain: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects/right/right-projects.json');
        const data: Record<string, ProjectData> = await response.json();
        const projectsData = Object.values(data).map((project) => ({
          ...project,
          isLeft: false,
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-14 sm:gap-24 md:gap-24 lg:gap-24">
      <Navbar />
      <div className="container mx-auto pt-20 px-4 lg:pt-36 md:lg:pt-36 sm:lg:pt-36">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default RightBrain;