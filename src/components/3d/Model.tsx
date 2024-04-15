import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import { Mesh } from 'three';

export default function Model() {
  const mesh = useRef<Mesh>(null);
  const { nodes } = useGLTF("/donut.glb");
  const { viewport } = useThree();
  const [materialProps, setMaterialProps] = useState({
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  });

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.z = 0;
      mesh.current.rotation.x += 0.00035;
      mesh.current.rotation.y += 0.00035;
      mesh.current.rotation.z += 0.00005;
    }
  });

  useEffect(() => {
    const handleClick = () => {
      setMaterialProps((prevProps) => ({
        ...prevProps,
        roughness: Math.random(),
      }));
    };

    const handleScroll = (event: WheelEvent) => {
      const delta = event.deltaY * 0.001;
      setMaterialProps((prevProps) => ({
        ...prevProps,
        thickness: Math.max(0, Math.min(3, prevProps.thickness + delta)),
      }));
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <group scale={50 * (viewport.width / 3.5)}>
      {/* <Text
        fontSize={1.5}
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -6]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hi I&apos;m Ravi
      </Text> */}
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}