import React from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  return (
    <>
      <AccumulativeShadows
        temporal
        frames={100}
        alphaTest={0.4}
        scale={3}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}
        opacity={1.3}
        color="light-cyan"
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.5}
          ambient={0.1}
          position={[7, 7, -10]}
        />
        <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.5}
          ambient={0.55}
          position={[-7, 7, -10]}
        />
      </AccumulativeShadows>

      {/* Reduced ambient light intensity */}
      <ambientLight intensity={0.5} />
    </>
  );
};

export default Backdrop;
