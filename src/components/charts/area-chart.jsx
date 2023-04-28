import React, { useRef } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJSReact.CanvasJS.addColorSet("custom-11", [
    "#00b287",
    "#0d383f",
  "#a39382",
]);

export const Chart = () => {
  //   const toggleDataSeries = (e) => {
  //     if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
  //       e.dataSeries.visible = false;
  //     } else {
  //       e.dataSeries.visible = true;
  //     }
  //     this.chart.render();
  //   };
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      title: "to US($)",
    },
    toolTip: {
      shared: true,
    },
    colorSet:"custom-11",
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
      //   itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "stackedArea",
        name: "Japan",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
          { x: new Date(1990, 0), y: 48 },
          { x: new Date(2000, 0), y: 100 },
          { x: new Date(2010, 0), y: 119 },
          { x: new Date(2016, 0), y: 107 },
        ],
      },
      {
        type: "stackedArea",
        name: "China",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
          { x: new Date(1990, 0), y: 7 },
          { x: new Date(2000, 0), y: 45 },
          { x: new Date(2010, 0), y: 243 },
          { x: new Date(2016, 0), y: 450 },
        ],
      },
      {
        type: "stackedArea",
        name: "India",
        showInLegend: true,

        xValueFormatString: "YYYY",
        dataPoints: [
          { x: new Date(1990, 0), y: 6 },
          { x: new Date(2000, 0), y: 22 },
          { x: new Date(2010, 0), y: 49 },
          { x: new Date(2016, 0), y: 91 },
        ],
      },
    ],
  };

  const ref = useRef();
  console.log(ref.current);
  return (
    <div className="w-[50%] h-[100%] flex items-center pl-[50px] ">
      <CanvasJSChart options={options} ref={ref} />
    </div>
  );
};

const AreaChart = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col overflow-hidden px-[5%]">
      <h1 className="text-[#072a35] text-[34px] font-mono font-bold text-center mt-[50px] tracking-[1px]">
        The $6.5 Trillion Question: How Will A Turn In Japan’s Rate Cycle Affect
        Global Markets?
      </h1>
      <div className="w-[100%] h-[100vh] flex justify-between">
        <div className="w-[50%] h-[100%] px-[50px] flex flex-col  py-[50px]">
          <h1 className="text-[#4f758b] font-medium text-[35px] mb-[10px]">
            Executive Summary:
          </h1>
          <div className="w-[100%] h-[340px] overflow-y-auto scroll-bar-cool pr-[50px]">
            <p className="text-[#0d383f] text-[18px] mt-[10px] font-medium">
              Inflation in Japan will likely recede over the next year or so but
              could stage a dramatic rebound later this decade. This could lead
              to much higher Japanese bond yields than what investors are
              currently anticipating.
            </p>
            <p className="text-[#0d383f] text-[18px] mt-[10px] font-medium">
              Decades of low rates in Japan created a centrifugal force of funds
              flowing from Japan to the rest of the world. Higher JGB yields
              could trigger the opposite force.
            </p>
            <p className="text-[#0d383f] text-[18px] mt-[10px] font-medium">
              Japanese savers today own a staggering $6.5 trillion of foreign
              assets. This means that once the market realizes that JGB yields
              are set to structurally rise (something that has not happened in
              more than three decades), then this could kick up a storm in
              global markets. • The risk is that the reversal in capital flows
              could be disruptive because the accumulation of these foreign
              assets took place over decades, but their sale could be
              concentrated over a short period. • Strategic investors should
              remain short JGBs and long the yen to profit from the BOJ’s coming
              tectonic pivot. • With Japan being the largest foreign holder of
              US long-term securities, US Treasury yields could rise as Japan
              repatriates capital back home, with potentially negative knock-on
              effects on US stocks too.
            </p>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default AreaChart;
