import React from "react";
import AreaChart from "../components/charts/area-chart";
import ExtraCharts from "../components/charts/extra-charts";
import SomeExtraCharts from "../components/charts/some-more-charts";

function Index() {
  return (
    <div className="w-[100%] min-h-[100%] overflow-y-auto scroll-bar-cool">
      <AreaChart />
      <ExtraCharts />
      <SomeExtraCharts />
    </div>
  );
}

export default Index;
