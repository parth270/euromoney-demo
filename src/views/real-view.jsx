import React, { Suspense } from "react";
import CanvasContainer from "../components/three";
import IndexLayout from "../layouts";
import Keynote from "./Keynote";

const Loader = () => {
  React.useEffect(() => {
    console.log("loading");
    return () => {
      console.log("loading done");
    };
  });

  return (
    <div className="w-[100%] fixed top-0 left-0 h-[100vh] bg-[#21363d] flex items-center justify-center" style={{
      zIndex:999999999999999
    }}>
      <img src="/logo-1.png" alt="" />
    </div>
  );
};

const RealView = () => {
  return (
    <IndexLayout>
      <Keynote />
      <div
        className="w-[100%] h-[100%] absolute select-none "
        style={{ zIndex: 10 }}
      >
        <Suspense fallback={<Loader />}>
          <CanvasContainer />
        </Suspense>
      </div>
    </IndexLayout>
  );
};

export default RealView;
