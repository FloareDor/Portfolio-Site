import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import { Mesh } from 'three';

export default function SmallModel() {
  const mesh = useRef<Mesh>(null);
  const { nodes } = useGLTF("/donut.glb");
  const { viewport } = useThree();
  const [isRotating, setIsRotating] = useState(true);

  useFrame(() => {
    if (mesh.current && isRotating) {
      mesh.current.position.z = -5;
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.z += 0.005;
    }
  });

  useEffect(() => {
    const handleClick = () => {
      setIsRotating((prevIsRotating) => !prevIsRotating);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const materialPropsfinal = {
    thickness: 1.7,
    roughness: 0.4,
    transmission: 1.0,
    ior: 1.1,
    chromaticAberration: 0.02,
    backside: true,
  };

  return (
    <group scale={1 * (viewport.width / 3.5)}>
      <Text
        fontSize={1.5}
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -6]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hi I&apos;m Ravi
      </Text>
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialPropsfinal} />
      </mesh>
    </group>
  );
}