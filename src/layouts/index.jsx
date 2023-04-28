import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrId,
  setId,
  setKeyTrans,
  setKeynote,
  setShow,
  setTransition,
} from "../services/three";
import Model1 from "../components/model/model-1";
import Model2 from "../components/model/model-2";
import Model3 from "../components/model/model-3";
import { Power4 } from "gsap";
import { Tween } from "react-gsap";
import useSound from "use-sound";

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
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();

  const [play1] = useSound("/about.mp3");
  const [play2] = useSound("/research.mp3");
  const [play3] = useSound("/services.mp3");
  const [play4] = useSound("/contact.mp3");

  const About = () => {
    const arr = [];
    if (state.id) {
      arr.push({ ...poss[state.id - 1], duration: 0.5 });
    }
    arr.push({
      pos: [208.606476 - 213.8, -6.250947 + 3.5, 16 - 13.039297],
      target: [208.606476 - 213.8, -6.250947 + 3.5, 13 - 13.039297],
      timer: 500,
      currId: 1,
    });
    dispatch(setTransition(arr));
    dispatch(setCurrId(1));
    setTimeout(() => {
      dispatch(setId(1));
    }, 1000);
  };
  const Research = () => {
    const arr = [];
    if (state.id) {
      arr.push({ ...poss[state.id - 1], duration: 0.5 });
    }
    arr.push({
      pos: [220.222757 - 213.8, -1.090009, 16 - 38.0476],
      target: [220.222757 - 213.8, -1.090009, 14 - 38.0476],
      timer: 500,
      currId: 2,
    });
    dispatch(setTransition(arr));
    dispatch(setCurrId(2));
    setTimeout(() => {
      dispatch(setId(2));
    }, 1000);
    setTimeout(() => {
      dispatch(setKeynote(true));
      dispatch(setKeyTrans(true));
    }, 1500);
  };

  const Services = () => {
    const arr = [];
    if (state.id) {
      arr.push({ ...poss[state.id - 1], duration: 0.5 });
    }
    arr.push({
      pos: [209.122757 - 213.8, -1.090009, 16 - 38.0476],
      target: [209.122757 - 213.8, -1.090009, 13 - 38.0476],
      timer: 500,
      currId: 3,
    });
    dispatch(setTransition(arr));
    dispatch(setCurrId(3));
    setTimeout(() => {
      dispatch(setId(3));
    }, 1000);
  };

  const Contact = () => {
    dispatch(setId(4));
    const arr = [];
    if (state.id) {
      arr.push({ ...poss[state.id - 1], duration: 0.5 });
    }
    arr.push({
      pos: [220.122757 - 213.8, 7.590009, 17 - 38.0476],
      target: [220.122757 - 213.8, 7.590009, 12 - 38.0476],
      timer: 500,
      currId: 4,
    });
    dispatch(setTransition(arr));
    dispatch(setCurrId(4));
    setTimeout(() => {
      dispatch(setId(4));
    }, 1000);
  };
  return (
    <div
      className="w-[100%] h-[120px] absolute flex items-center justify-center bottom-0"
      style={{
        zIndex: 1000,
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
            if (state.animation) {
              play1();
              About();
            }
          }}
        >
          About
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            if (state.animation) {
              play2();
              Research();
            }
          }}
        >
          Research
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            if (state.animation) {
              play3();
              Services();
            }
          }}
        >
          Services
        </p>
        <p
          className="text-[#000] font-medium text-[16px] cursor-pointer hover:scale-110"
          onClick={() => {
            if (state.animation) {
              play4();
              Contact();
            }
          }}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

const IndexLayout = ({ children }) => {
  const state = useSelector((state) => state.three);
  const dispatch = useDispatch();

  return (
    <div className="w-[100%] h-[100vh]">
      <Navbar />

      {!state.show && (
        <div
          className="w-[29px] cursor-pointer flex items-center justify-center h-[29px] rounded-md bg-[#fff] absolute top-[100px] right-[40px]"
          onClick={() => {
            if (state.animation) {
              dispatch(setCurrId(null));
              setTimeout(() => {
                dispatch(setId(null));
              }, 1000);
              const arr = [];
              if (state.id) {
                if (state.id) {
                  arr.push({ ...poss[state.id - 1], duration: 0.5 });
                }
              }
              arr.push({
                pos: [0, 0, 10],
                target: [0, 0, 0],
                timer: 500,
              });
              dispatch(setTransition(arr));
              dispatch(setShow(true));
            }
          }}
          style={{ zIndex: 1100 }}
        >
          <img src="/Cross.svg" alt="" />
        </div>
      )}
      <Model1 id={state.currId} />
      <Model2 id={state.currId} />
      <Model3 id={state.currId} />
      {children}
      <Footer />
    </div>
  );
};

export default IndexLayout;
