import React, { useRef } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJSReact.CanvasJS.addColorSet("custom-11", [
  "#00b287",
  "#0d383f",
  "#a39382",
]);

export default function Chart() {
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
    colorSet: "custom-11",
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
    <div className="w-[100%] h-[100%] flex items-center pl-[50px] ">
      <CanvasJSChart options={options} ref={ref} />
    </div>
  );
}
