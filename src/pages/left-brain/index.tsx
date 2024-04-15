import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';

const LeftBrain: React.FC = () => {
  const projects = [
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

  return (
    <div className="flex flex-col gap-14 sm:gap-24 md:gap-24 lg:gap-24">
      <Navbar />
      <div className="container mx-auto pt-20 px-4 lg:pt-36 md:lg:pt-36 sm:lg:pt-36">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href="/left-brain/1">
              <div className="relative bg-black shadow-md rounded-lg overflow-hidden">
                <div className="relative h-36 lg:h-48 md:h-48 sm:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="px-6 py-4">
                  <h2 className="text-xl text-white font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 hidden lg:block md:block sm:block">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBrain;