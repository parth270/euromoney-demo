import React, { useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useSelect } from "@react-three/drei";
import { Perf } from "r3f-perf";
// import { Model } from "../model/E-Congress_Center2";
import { Model } from "../model/E-Congress_Center_V9";
import Disk from "../../discs";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { Power4 } from "gsap";
import { ExactNegate } from "../../../utils/helper";

import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTransition,
  setAnimation,
  setCurrId,
  setId,
  setKeyTrans,
  setKeynote,
  setShow,
} from "../../../services/three";
import useSound from "use-sound";

const DisksContainer = ({ bind1 }) => {
  const { camera } = useThree();
  const [enabled, setEnabled] = useState(true);
  const [target, setTarget] = useState([0, 0, 0]);
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);

  // React.useEffect(() => {
  //   if (check) {
  //     if (state.show) {
  //       dispatch(setAnimation(false));
  //       setEnabled(false);
  //       const Curr = camera.rotation.y;
  //       const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
  //       gsap.to(camera.rotation, {
  //         x: 0,
  //         y: Curr + req,
  //         z: 0,
  //         duration: 1.2,
  //         ease: Power1.easeInOut,
  //       });
  //       gsap.to(camera.position, {
  //         x: 0,
  //         y: 0,
  //         z: 10,
  //         duration: 2.7,
  //         onComplete: () => {
  //           setTarget([0, 0, 0]);
  //           setEnabled(true);
  //           dispatch(setAnimation(true));
  //         },
  //         ease: Power4.easeOut,
  //       });
  //     }
  //   }
  //   setCheck(true);
  // }, [state.show]);
  const [Check, setCheck1] = useState(false);

  React.useEffect(() => {
    if (Check) {
      if (state.transitionBreak) {
        setEnabled(false);
        const Curr = camera.rotation.y;
        const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
        gsap.to(camera.rotation, {
          x: 0,
          y: Curr + req,
          z: 0,
          duration: 0.8,
          ease: Power1.easeInOut,
        });
        console.log(state.transitions);
        const fnc = (item, i) => {
          gsap.to(camera.position, {
            x: item.pos[0],
            y: item.pos[1],
            z: item.pos[2],
            duration: item.duration ? item.duration : 2.7,
            onComplete: () => {
              setTarget([item.target[0], item.target[1], item.target[2]]);
              if (state.transitions.length - 1 === i) {
                setEnabled(true);
                setAnimation(true);
                dispatch(setCurrId(item.currId));
                dispatch(removeTransition());
              }
            },
            ease: Power4.easeOut,
          });
        };
        state.transitions.map((item, i) => {
          setTimeout(
            () => {
              fnc(item, i);
            },
            item.timer ? item.timer * i : 2700 * i
          );
        });
      }
    }
    setCheck1(true);
  }, [state.transitionBreak]);

  console.log(state.id);

  const [play, { stop }] = useSound("/background_music.mp3");
  React.useEffect(() => {
    if (!state.keynote) {
      play();
    } else {
      stop();
    }
  }, [state.keynote]);

  return (
    <>
      {state.show && (
        <Disk
          position={[208.606476 - 213.8, -6.250947 + 3.5, 14 - 13.039297]}
          onClick={() => {
            if (state.animation) {
              dispatch(setAnimation(false));
              dispatch(setId(1));

              setEnabled(false);
              dispatch(setShow(false));
              console.log("clicking");
              const Curr = camera.rotation.y;
              const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
              gsap.to(camera.rotation, {
                x: 0,
                y: Curr + req,
                z: 0,
                duration: 1.2,
                ease: Power1.easeInOut,
              });
              gsap.to(camera.position, {
                x: 208.606476 - 213.8,
                y: -6.250947 + 3.5,
                z: 16 - 13.039297,
                duration: 2.7,
                onComplete: () => {
                  setTarget([
                    208.606476 - 213.8,
                    -6.250947 + 3.5,
                    13 - 13.039297,
                  ]);
                  dispatch(setCurrId(1));
                  setEnabled(true);
                  dispatch(setAnimation(true));
                },
                ease: Power4.easeOut,
              });
            }

            // setStart(true);
          }}
          scale={[1, 1, 1]}
        />
      )}
      {state.show && (
        <Disk
          position={[209.122757 - 213.8, -1.090009, 14 - 38.0476]}
          scale={[2, 2, 2]}
          onClick={() => {
            if (state.animation) {
              dispatch(setAnimation(false));
              dispatch(setId(3));
              dispatch(setShow(false));
              setEnabled(false);
              console.log("clicking");
              const Curr = camera.rotation.y;
              const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
              gsap.to(camera.rotation, {
                x: 0,
                y: Curr + req,
                z: 0,
                duration: 1.2,
                ease: Power1.easeInOut,
              });
              gsap.to(camera.position, {
                x: 209.122757 - 213.8,
                y: -1.090009,
                z: 16 - 38.0476,
                duration: 2.7,
                onComplete: () => {
                  setTarget([209.122757 - 213.8, -1.090009, 13 - 38.0476]);
                  setEnabled(true);
                  dispatch(setCurrId(3));

                  dispatch(setAnimation(true));
                },
                ease: Power4.easeOut,
              });
            }
            // setStart(true);
          }}
        />
      )}
      {state.show && (
        <Disk
          position={[220.222757 - 213.8, -1.090009, 14 - 38.0476]}
          scale={[2, 2, 2]}
          onClick={() => {
            if (state.animation) {
              dispatch(setAnimation(false));
              dispatch(setId(2));
              dispatch(setShow(false));
              setEnabled(false);
              console.log("clicking");
              const Curr = camera.rotation.y;
              const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
              gsap.to(camera.rotation, {
                x: 0,
                y: Curr + req,
                z: 0,
                duration: 1.2,
                ease: Power1.easeInOut,
              });
              gsap.to(camera.position, {
                x: 220.222757 - 213.8,
                y: -1.090009,
                z: 16 - 38.0476,
                duration: 2.7,
                onComplete: () => {
                  setTarget([220.222757 - 213.8, -1.090009, 14 - 38.0476]);
                  setEnabled(true);
                  dispatch(setCurrId(2));

                  dispatch(setKeynote(true));
                  dispatch(setKeyTrans(true));
                  dispatch(setAnimation(true));
                },
                ease: Power4.easeOut,
              });
            }
            // setStart(true);
          }}
        />
      )}
      {state.show && (
        <Disk
          position={[220.122757 - 213.8, 7.090009, 14 - 38.0476]}
          scale={[2, 2, 2]}
          onClick={() => {
            if (state.animation) {
              dispatch(setAnimation(false));
              dispatch(setId(4));
              dispatch(setShow(false));
              setEnabled(false);
              console.log("clicking");
              const Curr = camera.rotation.y;
              const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
              gsap.to(camera.rotation, {
                x: 0,
                y: Curr + req,
                z: 0,
                duration: 1.2,
                ease: Power1.easeInOut,
              });
              gsap.to(camera.position, {
                x: 220.122757 - 213.8,
                y: 7.090009,
                z: 17 - 38.0476,
                duration: 2.7,
                onComplete: () => {
                  setTarget([220.122757 - 213.8, 7.090009, 14 - 38.0476]);
                  dispatch(setCurrId(4));
                  setEnabled(true);
                  dispatch(setAnimation(true));
                },
                ease: Power4.easeOut,
              });
            }
            // setStart(true);
          }}
        />
      )}
      <Disk
        onClick={() => {
          if (state.animation) {
            dispatch(setAnimation(false));
            dispatch(setId(0));
            setEnabled(false);
            const Curr = camera.rotation.y;
            const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, 0);
            gsap.to(camera.rotation, {
              x: 0,
              y: Curr + req,
              z: 0,
              duration: 1.2,
              ease: Power1.easeInOut,
            });
            gsap.to(camera.position, {
              x: 0,
              y: 0,
              z: 10,
              duration: 2.7,
              onComplete: () => {
                setTarget([0, 0, 0]);
                setEnabled(true);
                dispatch(setAnimation(true));
              },
              ease: Power4.easeOut,
            });
          }
          // setStart(true);
        }}
        position={[-0.14, -2, 15.5]}
        scale={[1, 1, 1]}
      />
      {enabled && (
        <OrbitControls
          enabled={enabled}
          target={[target[0], target[1], target[2]]}
        />
      )}
      {/* <Disk position={[0, 0, 0]} scale={[1, 1, 1]} /> */}
    </>
  );
};

const Scene = () => {
  React.useEffect(() => {});
  // const gltf = useLoader(GLTFLoader, "/E-Congress_Center2.glb");
  // console.log(gltf, "please check here!");

  const [start, setStart] = useState(false);
  const [check, setCheck] = useState(false);
  const { camera } = useThree();

  return (
    <>
      <DisksContainer />
      {/* <primitive object={gltf.scene} position={[-213.8, -10, 10]} /> */}
      <Model position={[-213.8, -10, 10]} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.1} />
    </>
  );
};

export default Scene;
