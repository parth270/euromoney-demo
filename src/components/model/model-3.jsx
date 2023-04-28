import React from "react";
import Chart from "../ChartsReal";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";
import BarChart from "../ChartsReal/index2";

const ContactContainer = ({ title, content, high }) => {
  return (
    <div className="flex mt-[15px] w-[100%] border-t-[1px] border-dashed border-[#000] py-[20px] flex items-center justify-between">
      <p className="text-[15px] font-bold uppercase whitespace-nowrap">
        {title}:
      </p>
      <div className="w-[300px]">
        <p className="text-[15px] font-medium ml-[10px] uppercase">{content}</p>
        <p className="ml-[10px] text-[#00a079] cursor-pointer">{high}</p>
      </div>
    </div>
  );
};

const Model = ({ id }) => {
  const title = "Contact Us";
  const content = [
    `BCA Research Proprietary Indicators help shape your investment conviction, identify new opportunities/risks and mold your investment views. Our Indicators are derived from groups of historical data series which have been processed and analyzed over extended periods of time.`,
    `To give confidence and context to the indicators over and above their efficacy when used by our strategists, we have outlined the Validation Process that was undertaken to validate their accuracy. `,
  ];
  console.log(id);
  const state = useSelector((state) => state.three);
  return (
    <>
      {state.id === 4 && (
        <div
          className="w-[100%] flex justify-center  absolute top-[110px] h-[560px]"
          style={{ zIndex: 1000 }}
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
            <div className="w-[100%] max-w-[1330px] h-[100%] backdrop-blur-xl px-[50px] flex justify-between items-center bg-[#ffffff17]">
              <div className="w-[100%] flex flex-col justify-center ">
                <h1 className="text-[#000] whitespace-nowrap border-l-[8px] border-[#0d383f] pl-[10px] font-medium text-[32px] mb-[20px]">
                  {title}:
                </h1>
                <div className="w-[100%] overflow-y-auto scroll-bar-cool flex flex-col h-[400px] pr-[50px]">
                  <p className="text-[#000] text-[18px] mt-[10px] font-medium">
                    Please take a moment to provide some insight into your
                    inquiry and our team and will follow up as soon as possible.
                  </p>
                  <button className=" w-[110px] font-medium rounded-sm tracking-wide shrink-0 h-[36px] text-[#fff] mt-[15px] bg-[#00a079]">
                    Contact Us
                  </button>
                  <ContactContainer
                    title={" Media Inquiries"}
                    content="    1001 de Maisonneuve West, Suite 1510 Montreal, Quebec,
                    Canada H3A 1X8"
                    high="       1 800 724 2942 +1 514 499 9550 (North America)"
                  />
                  <ContactContainer
                    title={"   Headquarters Montreal, Canada"}
                    content="8 Bouverie Street London, UK EC4Y 8AX"
                    high="+44 (0)207 556 6008"
                  />
                  <ContactContainer
                    title={"London,UK"}
                    content="8 Bouverie Street London, UK EC4Y 8AX"
                    high="+44 (0)207 556 6008"
                  />
                  <ContactContainer
                    title={"New York,USA"}
                    content="1270 Ave of the Americas

                    11th Floor Suite 1100
                    
                    NY 10020 USA
                    
                    "
                    high="+1 212-224-3300"
                  />
                  <ContactContainer
                    title={"West Coast,USA"}
                    high="
                    +1 214 212 7765"
                  />
                  <ContactContainer
                    title={"Hong Kong,China"}
                    content="12/F, V-Point

                    18 Tang Lung Street
                    
                    Causeway Bay, Hong Kong
                    
                 
                    "
                    high="   +852 2912 8055"
                  />
                  <ContactContainer
                    title={"New York,USA"}
                    content="1270 Ave of the Americas

                    11th Floor Suite 1100
                    
                    NY 10020 USA
                    
                    "
                    high="+1 212-224-3300"
                  />
                  <ContactContainer
                    title={"Sydney,Australia"}
                    content="Suite 305,

                    3 Spring Street
                    
                    Sydney, Australia
                    
                    
                    "
                    high="+1 212-224-3300"
                  />
                  <ContactContainer
                    title={"Cape Town,  South Africa"}
                    content="16 Ebenezer Road

                    The Foundry
                    
                    Cape Town
                    
                    8000
                    
                    South Africa
                    "
                    high="
                    +27 21 276 1927
                    +27 83 317 1908"
                  />
                  <ContactContainer
                    title={"São Paulo,Brazil"}
                    content="16 Ebenezer Road

                    The Foundry
                    
                    Cape Town
                    
                    8000
                    
                    South Africa
                    "
                    high="+ 55 11 982813005"
                  />
                  <ContactContainer
                    title={"Marina Boulevard Singapore"}
                    content="1 Marina Boulevard, 

                    Level 20 Suite #2020,
                    
                    Singapore, 018989
                    "
                    high="+ 55 11 982813005"
                  />
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
