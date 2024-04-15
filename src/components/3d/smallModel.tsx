import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import { useControls } from 'leva'
import { Mesh } from 'three';

export default function SmallModel() {
	const mesh = useRef<Mesh>(null);
	const { nodes } = useGLTF("/donut.glb");
	const { viewport } = useThree();
	
	useFrame(() => {
        if (mesh.current) {
            mesh.current.position.z = -5;
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
            mesh.current.rotation.z += 0.005;
        }
		
	})

    // const materialProps = useControls({
    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    //     transmission: {value: 1, min: 0, max: 1, step: 0.1},
    //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    //     chromaticAberration: { value: 0.02, min: 0, max: 1},
    //     backside: { value: true},
	// })
	
	const materialPropsfinal = {
        thickness: 1.7,
        roughness: 0.4,
        transmission: 1.0,
        ior: 1.1,
        chromaticAberration: 0.02,
        backside: true,
    }

	return (
		
		<group scale={1 * (viewport.width / 3.5)}>
			<Text fontSize={1.5} font="/fonts/PPNeueMontreal-Bold.otf" position={[0,0,-6]} color="white" anchorX="center" anchorY="middle">
				Hi I&apos;m Ravi
			</Text>
			<mesh ref={mesh} {...nodes.Torus}>
				<MeshTransmissionMaterial {...materialPropsfinal}/>
			</mesh>
	</group>
	)
}
