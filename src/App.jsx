import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import JarvisOrb from "./components/JarvisOrb";

import "./App.css";

function App() {
  return (
    <div className="jarvis-interface">

      <div className="title">
        <span className="status-dot"></span>
        JARVIS CORE
      </div>

      <div className="subtitle">
        ARTIFICIAL INTELLIGENCE SYSTEM
      </div>

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45
        }}
        dpr={[1, 2]}
      >

        <ambientLight intensity={0.2} />

        <JarvisOrb />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />

      </Canvas>

      <div className="system-status">

        <div>CORE STATUS <span>ONLINE</span></div>
        <div>NEURAL ENGINE <span>ACTIVE</span></div>
        <div>PERCEPTION <span>READY</span></div>
        <div>VOICE INTERFACE <span>STANDBY</span></div>

      </div>

    </div>
  );
}

export default App;