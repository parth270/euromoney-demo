import React, { Suspense, useRef, useState } from "react";
import CanvasContainer from "../components/three";
import IndexLayout from "../layouts";
import Keynote from "./Keynote";
import { useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";

const Loader = ({ doIt }) => {
  React.useEffect(() => {
    console.log("loading");
    return () => {
      console.log("loading done");
      doIt();
    };
  });

  return (
    <div
      className="w-[100%] fixed top-0 left-0 h-[100vh] bg-[#21363d] flex items-center justify-center"
      style={{
        zIndex: 999999999999999,
      }}
    >
      <img src="/logo-1.png" alt="" />
    </div>
  );
};

const RealView = () => {
  const state = useSelector((state) => state.three);
  const ref = useRef();
  const [check, setCheck] = useState(false);
  React.useEffect(() => {
    if (state.keynote) {
      console.log("pause");
      ref.current.audio.current.pause();
    } else {
      if (check) {
        console.log("play");
        ref.current.audio.current.play();
      } else {
        setCheck(true);
        setTimeout(() => {
          ref.current.audio.current.play();
        }, 1700);
      }
    }
  }, [state.keynote]);
  return (
    <>
      <AudioPlayer
        ref={ref}
        autoPlay
        className="aud-check"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        src={"/background_music.mp3"}
        listenInterval={10}
      />
      <IndexLayout>
        <Keynote />
        <div
          className="w-[100%] h-[100%] absolute select-none "
          style={{ zIndex: 10 }}
        >
          <Suspense
            fallback={
              <Loader
                doIt={() => {
                  ref.current.audio.current.play();
                }}
              />
            }
          >
            <CanvasContainer />
          </Suspense>
        </div>
      </IndexLayout>
    </>
  );
};

export default RealView;
