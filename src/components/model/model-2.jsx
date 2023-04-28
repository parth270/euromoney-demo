import React from "react";
import Chart from "../ChartsReal";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";
import BarChart from "../ChartsReal/index2";

const Model = ({ id }) => {
  const title = "BCA Research Proprietary Indicators";
  const content = [
    `BCA Research Proprietary Indicators help shape your investment conviction, identify new opportunities/risks and mold your investment views. Our Indicators are derived from groups of historical data series which have been processed and analyzed over extended periods of time.`,
    `To give confidence and context to the indicators over and above their efficacy when used by our strategists, we have outlined the Validation Process that was undertaken to validate their accuracy. `,
  ];
  console.log(id);
  const state = useSelector((state) => state.three);
  return (
    <>
      {state.id === 3 && (
        <div
          className="w-[100%] flex justify-center  absolute top-[110px] h-[560px]"
          style={{ zIndex: 1000 }}
        >
          <Tween
            from={{
              clipPath: "inset(0px 670px 1px 680px)",
            }}
            to={{
              clipPath: !(state.currId === 3)
                ? "inset(0px 670px 1px 680px)"
                : "inset(0px 0vw 1px 0px)",
            }}
            ease={Power4.easeInOut}
            duration={0.7}
          >
            <div className="w-[100%] max-w-[1330px] h-[100%] backdrop-blur-xl px-[50px] flex justify-between items-center bg-[#ffffff17]">
              <div className="w-[100%] flex flex-col justify-center ">
                <h1 className="text-[#000] whitespace-nowrap border-l-[8px] border-[#0d383f] pl-[10px] font-medium text-[32px] mb-[20px]">
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
                  <h4 className="text-[#000] text-[22px] mt-[10px] font-medium">
                    Product Highlights
                  </h4>
                  <ul className="list-disc text-[#000] text-[14px] mt-[10px] font-medium ">
                    <li className="mt-[5px]">
                      Used by our team of strategists to help guide them in
                      their analysis of financial markets.
                    </li>
                    <li className="mt-[5px]">
                      Updated based on the frequency of the underlying data
                      source.
                    </li>
                    <li className="mt-[5px]">
                      Based on over 300,000 data sets for our insights analysis,
                      including the creation of our proprietary indicators.
                    </li>
                    <li className="mt-[5px]">
                      Used in concert with our written research to amplify macro
                      insights and recommended market actions.
                    </li>
                  </ul>
                  <h4 className="text-[#000] text-[22px] mt-[10px] font-medium">
                    Client Testimonial
                  </h4>
                  <p className="text-[#000] text-[18px] mt-[10px] font-medium">
                    "By integrating BCA Research Proprietary Indicators into our
                    investment framework, we have been able to add another
                    dimension to our market modelling. The indicators provide a
                    comprehensive perspective across the markets and have proven
                    predictive capability. Through data download and
                    notifications we have been able to seamlessly integrate this
                    valuable information into our internal processes."
                  </p>
                </div>
              </div>
              {/* <div className="w-[48%] h-[500px] ">
                <BarChart />
              </div> */}
            </div>
          </Tween>
        </div>
      )}
    </>
  );
};

export default Model;
