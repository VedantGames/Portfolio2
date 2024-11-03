import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'

function Controller() {
  const controller = useGLTF('/scene.gltf');

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = e => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setX(xPct);
    setY(yPct);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 0, 0], fov: 80 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '500px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Suspense>
        <mesh>
          <hemisphereLight intensity={0.3} groundColor={'purple'} />
          <pointLight intensity={60} position={[100, 40, -40]} color={[255, 0, 10]}/>
          <pointLight intensity={60} position={[-100, 40, -40]} color={[10, 10, 255]} />
          <primitive
            object={controller.scene}
            position={[0, 0, -100]}
            rotation={[0.2-y, 0-x, 0]}
          />
        </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default Controller
