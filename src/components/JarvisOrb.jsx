import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import OrbParticles from "./OrbParticles";
import OrbRings from "./OrbRings";
import Core from "./Core";

export default function JarvisOrb() {

  const group = useRef();

  useFrame((state, delta) => {

    if (!group.current) return;

    group.current.rotation.y += delta * 0.08;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.05;

  });

  return (
    <group ref={group}>

      <OrbParticles />

      <OrbRings />

      <Core />

    </group>
  );
}