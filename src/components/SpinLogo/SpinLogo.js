import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function SpinningModel({ url, isDarkMode }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ 
          color: isDarkMode ? '#000000' : '#ffffff',
          metalness: 0.3,
          roughness: 0.1,
        });
      }
    });
  }, [scene, isDarkMode]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={ref} scale={1} position={[0, 0, 1]} />;
}

export default function Background3D({ isDarkMode }) {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={10} />
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <SpinningModel url="/models/or-4-comp.glb" isDarkMode={isDarkMode} />
    </Canvas>
  );
}
