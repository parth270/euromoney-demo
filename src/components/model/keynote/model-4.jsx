import React, { useEffect, useRef, useState } from "react";
import Chart from "../../ChartsReal";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";

const Model = () => {
  const title = "Executive Summary";
  const content = [
    `Inflation in Japan will likely recede over the next year or so but could stage a dramatic rebound later this decade. This could lead to much higher Japanese bond yields than what investors are currently anticipating.`,
    `Decades of low rates in Japan created a centrifugal force of funds flowing from Japan to the rest of the world. Higher JGB yields could trigger the opposite force.`,
    `Japanese savers today own a staggering $6.5 trillion of foreign assets. This means that once the market realizes that JGB yields are set to structurally rise (something that has not happened in more than three decades), then this could kick up a storm in global markets. • The risk is that the reversal in capital flows could be disruptive because the accumulation of these foreign assets took place over decades, but their sale could be concentrated over a short period. • Strategic investors should remain short JGBs and long the yen to profit from the BOJ’s coming tectonic pivot. • With Japan being the largest foreign holder of US long-term securities, US Treasury yields could rise as Japan repatriates capital back home, with potentially negative knock-on effects on US stocks too.`,
    ,
    `The risk is that the reversal in capital flows could be disruptive because the
 accumulation of these foreign assets took place over decades, but their sale
 could be concentrated over a short period.`,
    `• Strategic investors should remain short JGBs and long the yen to profit from the
 BOJ’s coming tectonic pivot.`,
    `With Japan being the largest foreign holder of US long-term securities, US
 Treasury yields could rise as Japan repatriates capital back home, with
 potentially negative knock-on effects on US stocks too. `,
  ];
  const state = useSelector((state) => state.model);
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
  const [play, setPlay] = useState(true);
  return (
    <>
      {state.id === 4 && (
        <div
          className="w-[100%] flex justify-center  absolute top-[110px] h-[560px]"
          style={{ zIndex: 1009 }}
        >
          <Tween
            from={{
              clipPath: "inset(0px 670px 1px 680px)",
            }}
            to={{
              clipPath: !(state.currId === 4)
                ? "inset(0px 670px 1px 680px)"
                : "inset(0px 0vw 1px 0px)",
            }}
            ease={Power4.easeInOut}
            duration={0.7}
          >
            <div className="w-[100%] max-w-[1330px] h-[100%] relative backdrop-blur-xl px-[50px] flex justify-between items-center bg-[#ffffff99]">
              <video
                className="w-[400px] absolute bottom-0 right-0 cursor-pointer "
                autoPlay
                style={{
                  zIndex: 1000,
                }}
                playsInline
                onClick={() => {
                  if (!play) {
                    videoEl.current.play();
                    setPlay(true);
                  } else {
                    videoEl.current.pause();
                    setPlay(false);
                  }
                }}
                loop
                src={"/avatar-2.webm"}
                ref={videoEl}
              ></video>
              <div className="w-[60%] flex flex-col justify-center ">
                <h1 className="text-[#000] border-l-[8px] border-[#0d383f] pl-[30px] font-medium text-[35px] mb-[10px]">
                  {title}:
                </h1>
                <div className="w-[100%] overflow-y-auto scroll-bar-cool h-[400px] pr-[50px]">
                  {content.map((item, i) => {
                    return (
                      <p
                        key={i}
                        className="text-[#000] text-[18px] mt-[10px] font-medium"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="w-[40%] h-[400px] ">
                <Chart />
              </div>
            </div>
          </Tween>
        </div>
      )}
    </>
  );
};

export default Model;
