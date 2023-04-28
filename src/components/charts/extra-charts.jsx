import React from "react";
import BarChart from "./charts/bar";
import LineChart from "./charts/line-chart";

const ExtraCharts = () => {
  return (
    <div className="w-[100%] flex min-h-[200vh] px-[5%] py-[60px]">
      <div className="w-[50%] h-[100%] ">
        <div className="w-[100%] border-l-[10px] border-[#009e79] pl-[30px]">
          <h4 className=" font-bold capitalize text-[#0d3840] text-[32px] font-mono w-[100%] pr-[20px]">
            Chart-1
          </h4>
          <h1 className="text-[#0d383f] text-[26px]  font-bold uppercase mt-[5px] tracking-md pr-[20px]">
            Markets Expect Policy Rates To Stay Unusually Low In Japan
          </h1>
        </div>
        <div className="w-[100%] h-[700px]  mt-[50px] pl-[50px] pr-[60px]">
          <BarChart />
        </div>
        <div className="w-[100] mt-[80px] tracking-wide pl-[50px] pr-[60px]">
          <p className="text-[#0d383f] text-[18px] mt-[31px] font-medium">
            If history was always a good guide to the future, then we would live
            in a world sans inflection points. However, that is not the case,
            implying that inflation in Japan could eventually make a historic
            comeback once the global economy recovers from the next recession.
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[31px] font-medium">
            As we argued in a recent report, this resurgence in inflation will
            be driven by a pickup in aggregate demand, thanks to a corporate
            releveraging cycle, ascendent real wage inflation, and land prices
            turning the corner - trends that have already taken root (Chart 2).
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[31px] font-medium">
            Our colleagues at the Global Fixed Income Strategy (GFIS) and
            Foreign Exchange Strategy (FES) published a report last month making
            the point that a dysfunctional bond market will force the BOJ to
            abandon Yield Curve Control (YCC), but rate hikes are not on the
            horizon for now. We agree with this assessment.
          </p>
        </div>
      </div>
      <div className="w-[50%] h-[100%] ">
        <div className="w-[100%] border-l-[10px] border-[#009e79] pl-[30px] ml-[22px]">
          <h4 className=" font-bold capitalize text-[#0d3840] text-[32px] font-mono w-[100%] ">
            Chart-2
          </h4>
          <h1 className="text-[#0d383f] text-[26px]  font-bold uppercase tracking-md mb-[100px] ">
            Inflation In Japan Could Stage A Dramatic Rebound Later This Decade
          </h1>
        </div>
        <div className="pr-[50px] pl-[40px] w-[100%]">
          <LineChart
            min={100}
            start={100}
            max={120}
            yTitle={"% of GDP"}
            xTitle={""}
            title={"JAPAN NONFINANCIAL CORPORATE DEBT"}
          />
          <LineChart
            min={59}
            max={63}
            start={59}
            yTitle={"% "}
            xTitle={""}
            float={true}
            title={"LABOR FORCE PARTICIPATION RATE"}
          />
          <LineChart
            min={250}
            max={450}
            start={250}
            yTitle={"% "}
            xTitle={""}
            title={"NUMBER OF LAND TRANSACTIONS:WHOLE NATION"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraCharts;
