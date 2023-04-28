import React from "react";

const RealViewPage = React.lazy(() => import("../views/real-view"));

const RealView = () => {
  return <RealViewPage />;
};

export default RealView;
