import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home: React.FC = () => {
  return (
    <main className="h-screen w-screen flex flex-col relative bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block md:block">
        <Scene/>
      </div>
      <div className="z-10">
        <Navbar className='bg-transparent' titleStyle='text-white'/>
      </div>
      <span className='text-4xl text-center font-neue-montreal pt-[42vh] text-transparent bg-clip-text bg-gradient-to-l from-white via-gray-500 to-purple-900'>
        Hi I&apos;m Ravi
      </span>
      <div className="flex-grow"></div>
    </main>
  );
};

export default Home;