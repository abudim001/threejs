import React, { Children, useRef } from "react";

import { Group } from "three";
import state from "../store";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<Group>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260; // Screen width breakpoint
    const isMobile = window.innerWidth <= 600; // Mobile screen detection

    // Determine the target position based on screen size and intro state
    let targetPosition: [number, number, number] = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 1.6];
      if (isMobile) targetPosition = [0, 0.2, 1.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 1.5];
      else targetPosition = [0, 0, 1];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    if (group.current) {
      easing.dampE(
        group.current?.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
