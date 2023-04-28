import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// import Loader from "../../utils/Loader";
import Scene from "./Scene";

const CanvasContainer = ({ curr1 }) => {
  const [devicePixelRatio, setDevicePixelRatio] = React.useState();

  React.useEffect(() => {
    const pixel = window.devicePixelRatio;
    setDevicePixelRatio(pixel);
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, 27],
        fov: 65,
      }}
      dpr={devicePixelRatio}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
      shadows={true}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
};

export default CanvasContainer;
