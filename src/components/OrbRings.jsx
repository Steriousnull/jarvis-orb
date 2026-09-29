import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({
  radius,
  rotation,
  speed
}) {

  const ring = useRef();

  useFrame((state, delta) => {

    if (!ring.current) return;

    ring.current.rotation.x +=
      delta * speed;

    ring.current.rotation.z +=
      delta * speed * 0.4;

  });

  return (

    <mesh
      ref={ring}
      rotation={rotation}
    >

      <torusGeometry
        args={[
          radius,
          0.008,
          8,
          128
        ]}
      />

      <meshBasicMaterial
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />

    </mesh>

  );
}

export default function OrbRings() {

  return (
    <group>

      <Ring
        radius={2.45}
        rotation={[0, 0, 0]}
        speed={0.25}
      />

      <Ring
        radius={2.15}
        rotation={[Math.PI / 2, 0, 0]}
        speed={-0.35}
      />

      <Ring
        radius={1.85}
        rotation={[0.8, 0.3, 0]}
        speed={0.45}
      />

      <Ring
        radius={1.55}
        rotation={[1.2, 0.8, 0.2]}
        speed={-0.55}
      />

    </group>
  );
}