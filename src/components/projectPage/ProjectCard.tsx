import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  	id: number;
  	title: string;
  	description: string;
	image: string;
	isLeft: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, isLeft }) => {
  const href = isLeft ? `/left-brain/${id}` : `/right-brain/${id}`;
  const isGif = image.endsWith('.gif');

  return (
    <Link href={href}>
      <div className="relative bg-black shadow-md rounded-lg overflow-hidden">
        <div className="relative h-36 lg:h-48 md:h-48 sm:h-48">
          {isGif ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl text-white font-semibold mb-2">{title}</h2>
          <p className="text-gray-300 hidden lg:block md:block sm:block">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;