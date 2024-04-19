import React from 'react';
import ProjectCard from './ProjectCard';

export interface Project {
  	id: number;
  title: string;
  technologies: string[];
  	description: string;
	image: string;
	isLeft: boolean;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="pt-2 lg:pt-0 md:pt-16 sm:pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;