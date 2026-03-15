import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function SnakeMesh() {
  const groupRef = useRef();
  const particlesRef = useRef([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const segmentCount = 15;
  const segments = [];

  for (let i = 0; i < segmentCount; i++) {
    const scale = 1 - i * 0.05;
    const hue = (i / segmentCount + Math.random() * 0.1) % 1;

    segments.push(
      <mesh key={i} position={[0, 0, i * 0.15]} ref={i === 0 ? groupRef : null}>
        <sphereGeometry args={[scale * 0.3, 16, 16]} />
        <meshPhongMaterial
          color={new THREE.Color().setHSL(hue, 0.8, 0.6)}
          emissive={new THREE.Color().setHSL(hue, 0.8, 0.3)}
          shininess={100}
        />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      {segments}
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} />
      <ambientLight intensity={0.6} />
    </group>
  );
}

const Snake3D = ({ scale = 1 }) => {
  return (
    <Canvas style={{ width: '100%', height: '300px' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <SnakeMesh />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <color attach="background" args={['#f0f9ff']} />
    </Canvas>
  );
};

export default Snake3D;
