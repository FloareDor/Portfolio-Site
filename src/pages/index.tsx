import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import Box from '@/components/3d/box';
import Navbar from '@/components/navbar/navbar';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home: React.FC = () => {
  return (
    <main className="h-screen w-screen flex flex-col relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block md:block">
        <Scene/>
      </div>
      <div className="z-10">
        <Navbar />
      </div>
      <div className='text-white text-4xl text-center font-neue-montreal pt-[42vh]'>
        Hi I&apos;m Ravi
      </div>
      <div className="flex-grow"></div>
    </main>
  );
};

export default Home;