import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import Box from '@/components/3d/box';
import Navbar from '@/components/navbar/navbar';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Canvas>
        <ambientLight />
        <pointLight intensity={1000} position={[10, 10, 10]} />
        <Box />
        <Text
          color="#41B06E"
          fontSize={1}
          position={[0, 0, 0.5]}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          Hi I&apos;m Ravi
        </Text>
      </Canvas>
    </div>
  );
};

export default Home;