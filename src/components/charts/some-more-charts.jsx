import React from "react";
import BarChart from "./charts/bar";
import LineChart from "./charts/stacked-line-chart";

const SomeExtraCharts = () => {
  return (
    <div className="w-[100%] flex min-h-[100vh] px-[5%] py-[60px]">
      <div className="w-[50%] h-[100%] ">
        <div className="w-[100%] border-l-[10px] border-[#009e79] pl-[30px]">
          <h1 className="text-[#0d383f] text-[26px]  font-bold uppercase mt-[5px] tracking-md pr-[20px]">
            Can The Rest Of The World Catch A Cold If Japan Sneezes?
          </h1>
        </div>
        <div className="w-[100]  tracking-wide pl-[50px] mt-[40px] pr-[60px]">
          <p className="text-[#0d383f] text-[18px] mt-[18px] font-medium">
            If history was always a good guide to the future, then we would live
            in a world sans inflection points. However, that is not the case,
            implying that inflation in Japan could eventually make a historic
            comeback once the global economy recovers from the next recession.
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[18px] font-medium">
            As we argued in a recent report, this resurgence in inflation will
            be driven by a pickup in aggregate demand, thanks to a corporate
            releveraging cycle, ascendent real wage inflation, and land prices
            turning the corner - trends that have already taken root (Chart 2).
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[18px] font-medium">
            Our colleagues at the Global Fixed Income Strategy (GFIS) and
            Foreign Exchange Strategy (FES) published a report last month making
            the point that a dysfunctional bond market will force the BOJ to
            abandon Yield Curve Control (YCC), but rate hikes are not on the
            horizon for now. We agree with this assessment.
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[18px] font-medium">
            Firstly, it is worth noting that history is replete with examples of
            markets getting inflation forecasts horribly wrong (Chart 3).
            Markets ought to be efficient but are often not, especially when it
            comes to predicting and pricing in turning points. Secondly, it is
            true that past episodes of rising Japanese Government Bond (JGB)
            yields have not had a major impact on global financial markets
            (Table 1).
          </p>
          <p className="text-[#0d383f] text-[18px] mt-[18px] font-medium">
            Global equity markets have been largely unaffected by swings in JGB
            yields while bond markets have shown some impact. But the past can
            be a good guide to the future only if the starting conditions are
            comparable. Looking at episodes where JGB yields increased from the
            2000s to project market outcomes for the next decade would be
            equivalent to using the US-Japanese diplomatic clashes of the 1920s
            to forecast how far this rivalry would go during World War II. This
            time will be very different because:
          </p>
        </div>
      </div>
      <div className="w-[50%] h-[100%] ">
        <div className="w-[100%] border-l-[10px] border-[#009e79] pl-[30px] ml-[22px]">
          <h4 className=" font-bold capitalize text-[#0d3840] text-[32px] font-mono w-[100%] ">
            Chart-3
          </h4>
          <h1 className="text-[#0d383f] text-[26px]  font-bold uppercase tracking-md mb-[100px] ">
            Markets Don’t Always Get Their Inflation Forecast Right
          </h1>
        </div>
        <div className="pr-[50px] pl-[40px] w-[100%]">
          <LineChart
            min={0}
            max={4}
            start={0}
            yTitle={"% "}
            xTitle={""}
            float={true}
            title={""}
          />
          <LineChart
            min={-2}
            max={1.5}
            start={-2}
            yTitle={"% "}
            xTitle={""}
            float={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SomeExtraCharts;
