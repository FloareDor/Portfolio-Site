import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  	id: number;
  	title: string;
  	description: string;
	image: string;
	isLeft: boolean;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;