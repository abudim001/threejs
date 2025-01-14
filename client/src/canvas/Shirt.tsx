import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    easing.damp;
  });

  return (
    <group>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        // castShadow
        // material-roughness={10}
        // dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            map={fullTexture}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            map={logoTexture}
            position={[0, 0.004, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
