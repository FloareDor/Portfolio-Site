import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

const Project: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = {
    id: 1,
    title: 'Project 1',
    description: 'A detailed description of Project 1.',
    image: '/images/left/graphics.png',
    technologies: ['React', 'Next.js', 'TypeScript'],
    githubLink: 'https://github.com/username/project1',
	liveLink: 'https://project1.com',
	blog: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
	nisl eget aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl
	nisl sit amet nisl. Nullam auctor, nisl eget aliquam ultricies, nunc
	nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.`,
	videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            {/* <p className="text-xl text-gray-600 mb-6">{project.description}</p> */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <ul className="list-disc list-inside">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-lg text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-800 text-white rounded-lg flex items-center space-x-2 hover:bg-neutral-700 transition duration-300"
                >
                  <FontAwesomeIcon icon={faLink} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
		  </div>
		  <div className="flex flex-col min-h-screen "suppressHydrationWarning={true}>
			<div className="container mx-auto px-4 py-8">

				<div className="mb-8" suppressHydrationWarning={true}>
				<h2 className="text-2xl font-semibold mb-2">Project Description</h2>
				<p className="text-lg text-gray-600 whitespace-pre-line">{project.description}</p>
				</div>
				<div className='flex flex-col '>

					<h2 className="text-2xl font-semibold mb-2">Some Info</h2>
						<p className="text-lg text-gray-600 whitespace-pre-line">{project.blog}</p>
						<div className="mb-8">
						<ReactPlayer url={project.videoLink} width="100%" height="400px" />
						</div>
				</div>
			</div>
		</div>
    </div>
  );
};

export default Project;