import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function CubeMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhongMaterial
          color="#3b82f6"
          emissive="#1e40af"
          shininess={100}
          wireframe={false}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.55, 1.55, 1.55]} />
        <meshPhongMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          shininess={50}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
      <pointLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, -5, 5]} intensity={1} />
      <ambientLight intensity={0.8} />
    </group>
  );
}

const Cube3D = ({ scale = 1 }) => {
  return (
    <Canvas style={{ width: '100%', height: '300px' }}>
      <PerspectiveCamera makeDefault position={[2, 2, 2]} />
      <CubeMesh />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      <color attach="background" args={['#f0f9ff']} />
    </Canvas>
  );
};

export default Cube3D;
