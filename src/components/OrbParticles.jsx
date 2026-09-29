import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function OrbParticles() {

  const points = useRef();

  const particleCount = 5000;

  const positions = useMemo(() => {

    const data = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {

      const radius = 2.2;

      const theta = Math.random() * Math.PI * 2;

      const phi =
        Math.acos(
          THREE.MathUtils.randFloatSpread(2)
        );

      const r =
        radius *
        Math.cbrt(Math.random());

      const x =
        r *
        Math.sin(phi) *
        Math.cos(theta);

      const y =
        r *
        Math.sin(phi) *
        Math.sin(theta);

      const z =
        r *
        Math.cos(phi);

      data[i * 3] = x;
      data[i * 3 + 1] = y;
      data[i * 3 + 2] = z;
    }

    return data;

  }, []);

  useFrame((state, delta) => {

    if (!points.current) return;

    points.current.rotation.y += delta * 0.12;

    points.current.rotation.z += delta * 0.03;

  });

  return (

    <points ref={points}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />

    </points>

  );
}