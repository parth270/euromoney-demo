import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrId, setId } from "../services/model";
import { Power4 } from "gsap";
import { Tween } from "react-gsap";
import Model1 from "../components/model/keynote/model-1";
import Model2 from "../components/model/keynote/model-2";
import Model3 from "../components/model/keynote/model-3";
import Model4 from "../components/model/keynote/model-4";
import AudioPlayer from "react-h5-audio-player";

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

const Aud = () => {
  const ref = useRef();
  const [src, setSrc] = useState("/eng.mp3");
  const [srcId, setSrcId] = useState(0);
  const opt = ["eng", "jap", "portugese"];
  React.useEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      const thatDiv = ref.current.container.current;
      const first = thatDiv.children[1];
      console.log(first);
      first.className = "flex w-[100%]";
      first.children[0].className =
        "font-medium text-[12px] text-[#fff] flex w-[70px] justify-between absolute w-[161px] items-center";
      first.children[1].className =
        "flex w-[160px] justify-center absolute px-[50px]";
      first.children[1].children[0].style.display = "none";
      first.children[1].children[2].style.display = "none";
      first.children[1].children[1].className = "scale-150";
      first.children[1].children[1].children[0].className = "svg-white";
      first.children[1].children[1].children[1].className = "svg-white";
      first.children[1].children[1].children[2].className = "svg-white";
    }
  });

  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  React.useEffect(() => {
    const onPointerDown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });
  return (
    <div className="w-[340px] flex relative items-center justify-between">
      <AudioPlayer
        ref={ref}
        className="aud-check"
        src={src}
        listenInterval={10}
        onPlay={(e) => console.log("onPlay")}
      />
      <div
        onClick={() => {
          setClicked(true);
        }}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          zIndex: 9999999999999,
        }}
        className="w-[140px] cursor-pointer relative h-[34px] relative translate-y-[8px] rounded-sm bg-[#00000017] flex items-center justify-center font-medium text-[14px] text-[#fff]  right-0 "
      >
        <p className="cursor-pointer uppercase translate-x-[-3px] text-[14px] tracking-wide">
          {opt[srcId]}
        </p>
        <img
          src="/down.svg"
          className={` ${
            clicked ? "rotate-180" : ""
          } absolute right-[13px] w-[10px] translate-y-[1px]`}
          alt=""
        />
        {clicked && (
          <div
            className="w-[100%] min-h-[34px] py-[5px] px-[5px] bg-[#222] rounded-sm absolute top-[38px]"
            style={{
              zIndex: 1000000000000,
            }}
          >
            <div
              onClick={() => {
                setSrcId(0);
                setSrc("/eng.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              eng
            </div>
            <div
              onClick={() => {
                setSrcId(1);
                setSrc("/jap.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              jap
            </div>
            <div
              onClick={() => {
                setSrcId(2);
                setSrc("/portu.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm flex items-center justify-center "
            >
              portugese
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const state = useSelector((state) => state.model);

  return (
    <div
      className="w-[100%] h-[80px] bg-[#21363D] px-[40px] flex items-center absolute justify-between"
      style={{ zIndex: 1000000000000 }}
    >
      <img src="/logo-1.png" className="w-[180px]" alt="" />
      {state.currId === 2 && <Aud />}
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
