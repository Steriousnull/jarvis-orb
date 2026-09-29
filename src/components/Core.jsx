import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Core() {

  const core = useRef();

  useFrame((state) => {

    if (!core.current) return;

    const pulse =
      1 +
      Math.sin(
        state.clock.elapsedTime * 2
      ) * 0.08;

    core.current.scale.set(
      pulse,
      pulse,
      pulse
    );

  });

  return (

    <group>

      {/* Outer energy sphere */}

      <mesh>

        <sphereGeometry
          args={[0.75, 64, 64]}
        />

        <meshBasicMaterial
          transparent
          opacity={0.08}
          wireframe
        />

      </mesh>


      {/* Core */}

      <mesh ref={core}>

        <sphereGeometry
          args={[0.32, 64, 64]}
        />

        <meshBasicMaterial />

      </mesh>


      {/* Core rings */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry
          args={[
            0.48,
            0.025,
            16,
            100
          ]}
        />

        <meshBasicMaterial
          transparent
          opacity={0.9}
        />

      </mesh>


      <mesh rotation={[0, Math.PI / 2, 0]}>

        <torusGeometry
          args={[
            0.48,
            0.018,
            16,
            100
          ]}
        />

        <meshBasicMaterial
          transparent
          opacity={0.7}
        />

      </mesh>

    </group>

  );
}