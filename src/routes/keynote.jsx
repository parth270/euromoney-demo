import React from "react";

const KeynotePage = React.lazy(() => import("../views/Keynote"));

const Keynote = () => {
  return <KeynotePage />;
};

export default Keynote;
