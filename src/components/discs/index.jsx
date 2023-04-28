import React, { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Disk = (props) => {
  const three = useThree();
  const ref = useRef();
  const [state, setState] = useState(false);
  React.useEffect(() => {
    // ref.current.lookAt(0, 0, 10);
  });
  return (
    <group
      {...props}
      ref={ref}
      onPointerOver={() => {
        setState(true);
        ref.current.scale.x = props.scale[0] * 1.1;
        ref.current.scale.y = props.scale[1] * 1.1;
        ref.current.scale.z = props.scale[2] * 1.1;
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        ref.current.scale.x = props.scale[0] * 1;
        ref.current.scale.y = props.scale[1] * 1;
        ref.current.scale.z = props.scale[2] * 1;
        document.body.style.cursor = "initial";
        setState(false);
      }}
    >
      <mesh>
        <circleGeometry args={[0.13, 32]} />
        <meshBasicMaterial color={"#fff"} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[0.2, 32]} />
        <meshBasicMaterial color={"#49a181"} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Disk;
