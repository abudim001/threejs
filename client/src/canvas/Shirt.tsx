import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb") as any;

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        castShadow={true}
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
            // depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
