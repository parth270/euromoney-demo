import React, { Component } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StackedLineChart({
  yTitle,
  xTitle,
  min,
  max,
  title,
  float,
  start,
}) {
  function getRandomNumber() {
    if (float) {
      return parseFloat((Math.random() * (max - min) + start).toFixed(2));
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + start;
    }
  }
  const dataSpline = [];
  for (let i = 0; i < 50; i++) {
    dataSpline.push({ x: i + 1, y: getRandomNumber() });
  }
  const dataSpline1 = [];
  for (let i = 0; i < 50; i++) {
    dataSpline1.push({ x: i + 1, y: getRandomNumber() });
  }
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "",
    },
    axisY: {
      title: yTitle,
      includeZero: false,
      suffix: "%",
    },
    axisX: {
      title: xTitle,
      prefix: "",
      interval: 4,
    },
    height: 350,
    data: [
      {
        type: "spline",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: dataSpline,
        lineColor: "#00b287",
      },
      {
        type: "spline",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: dataSpline1,
        lineColor: "#0d383f",
      },
    ],
  };

  return (
    <div className="w-[100%] mb-[50px]">
      <h1 className="text-center text-[#0d383f] font-medium text-[18px]">
        {title}
      </h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}
