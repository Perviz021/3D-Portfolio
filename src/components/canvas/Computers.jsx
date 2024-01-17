import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { HemisphereLight, PointLight } from "three";

import CanvasLoader from "../Loader";

const Computers = () => {
  // importing gltf model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // in 3js write mesh instead of div
  return (
    <mesh>
      {/* Adding lightness */}
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75} //make it smaller
        position={[0, -3.25, -1.5]} //changing x y z positions
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Canvas loader work while model loading */}

      <Suspense fallback={<CanvasLoader />}>
        {/* Enabling to move the model left and right*/}
        <OrbitControls
          // zoom is not allowed
          enableZoom={false}
          // moving model in a specific angle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
