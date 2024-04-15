import React from 'react';
import Navbar from '@/components/navbar/navbar';
import ProjectGrid from '@/components/projectPage/ProjectGrid';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const LeftBrain: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: '/images/left/graphics.png',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: '/images/left/avl.png',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      image: '/images/left/graphics.png',
    },
  ];

  const projects = projectsData.map((project) => ({
    ...project,
    isLeft: true,
  }));

  return (
    <div className="flex flex-col gap-14 sm:gap-24 md:gap-24 lg:gap-24">
      <Navbar />
      <div className="container mx-auto pt-20 px-4 lg:pt-36 md:lg:pt-36 sm:lg:pt-36">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default LeftBrain;