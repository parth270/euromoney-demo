import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrId, setId } from "../services/model";
import { Power4 } from "gsap";
import { Tween } from "react-gsap";
import Model1 from "../components/model/keynote/model-1";
import Model2 from "../components/model/keynote/model-2";
import Model3 from "../components/model/keynote/model-3";
import Model4 from "../components/model/keynote/model-4";

const poss = [
  {
    pos: [208.606476 - 213.8, -6.250947 + 3.5, 16 - 13.039297],
    target: [208.606476 - 213.8, -6.250947 + 3.5, 13 - 13.039297],
  },
  {
    pos: [220.222757 - 213.8, -1.090009, 16 - 38.0476],
    target: [220.222757 - 213.8, -1.090009, 14 - 38.0476],
  },
  {
    pos: [209.122757 - 213.8, -1.090009, 16 - 38.0476],
    target: [209.122757 - 213.8, -1.090009, 13 - 38.0476],
  },
  {
    pos: [220.122757 - 213.8, 7.590009, 17 - 38.0476],
    target: [220.122757 - 213.8, 7.590009, 12 - 38.0476],
  },
];

const Navbar = () => {
  return (
    <div
      className="w-[100%] h-[80px] bg-[#21363D] px-[40px] flex items-center absolute"
      style={{ zIndex: 100 }}
    >
      <img src="/logo-1.png" className="w-[180px]" alt="" />
    </div>
  );
};

const Footer = () => {
  const state = useSelector((state) => state.model);
  const dispatch = useDispatch();

  return (
    <div
      className="w-[100%] h-[120px] absolute flex items-center justify-center bottom-0"
      style={{
        zIndex: 1020,
      }}
    >
      <div
        className="h-[80px] rounded-[49px] w-[50%] flex items-center justify-around  px-[100px]"
        style={{
          backdropFilter: " blur(41px)",
          webkitBackdropFilter: "blur(41px)",
          background:
            "0% 0% no-repeat padding-box padding-box rgb(233 233 233)",
        }}
      >
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            dispatch(setCurrId(1));
            if (state.id) {
              setTimeout(() => {
                dispatch(setId(1));
              }, 1000);
            } else {
              dispatch(setId(1));
            }
          }}
        >
          Standard
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            dispatch(setCurrId(2));
            if (state.id) {
              setTimeout(() => {
                dispatch(setId(2));
              }, 1000);
            } else {
              dispatch(setId(2));
            }
          }}
        >
          Narrated
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            dispatch(setCurrId(3));
            if (state.id) {
              setTimeout(() => {
                dispatch(setId(3));
              }, 1000);
            } else {
              dispatch(setId(3));
            }
          }}
        >
          Video Driven
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            dispatch(setCurrId(4));
            if (state.id) {
              setTimeout(() => {
                dispatch(setId(4));
              }, 1000);
            } else {
              dispatch(setId(4));
            }
          }}
        >
          Avatars
        </p>
      </div>
    </div>
  );
};

const IndexLayout = ({ children }) => {
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();
  const videoEl = useRef();
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="w-[100%] h-[100vh]">
      <Navbar />
      {state.id && (
        <div
          className="w-[29px] cursor-pointer flex items-center justify-center h-[29px] rounded-md bg-[#fff] absolute top-[100px] right-[40px]"
          style={{ zIndex: 1100 }}
          onClick={() => {
            dispatch(setCurrId(null));
            setTimeout(() => {
              dispatch(setId(null));
            }, 1000);
          }}
        >
          <img src="/Cross.svg" alt="" />
        </div>
      )}
      <Model1 />
      <Model2 />
      <Model3 />
      <Model4 />
      <div className="w-[100%] h-[100vh] overflow-hidden">
        <div className="absolute w-[100%] h-[100vh] flex items-center justify-center">
          <video
            className="w-[750px] h-[550px] "
            autoPlay
            style={{
              zIndex: 1000,
            }}
            playsInline
            loop
            muted
            src={"/BG-KEYNOTE.mp4"}
            ref={videoEl}
          ></video>
        </div>
        <img src="/bg.png" alt="" className="pointer-events-none" />
      </div>

      <Footer />
    </div>
  );
};

export default IndexLayout;
