import React, { Suspense } from "react";
import CanvasContainer from "../components/three";
import IndexLayout from "../layouts";

const RealView = () => {
  return (
    <IndexLayout>
      
      <div
        className="w-[100%] h-[100%] absolute select-none "
        style={{ zIndex: 10 }}
      >
        <Suspense fallback={null}>
          <CanvasContainer />
        </Suspense>
      </div>
    </IndexLayout>
  );
};

export default RealView;
