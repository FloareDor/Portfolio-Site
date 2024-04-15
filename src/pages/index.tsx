import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import Box from '@/components/3d/box';
import Navbar from '@/components/navbar/navbar';

import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/3d/Scene'), {
	ssr: false,
	loading: () => <p>Loading...</p>
});

const Home: React.FC = () => {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Navbar />
      <Scene/>
    </main>
  );
};

export default Home;