// import React from "react";

import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";

// import BearBox from "./components/BearBox";
const App = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="mb-9">Zustan Tutorial</h1>
      <div className="flex flex-row gap-10 rounded-lg p-5">
        {/* <BearBox /> */}
        <CatBox />
        <CatBox2 />
      </div>
    </div>
  );
};

export default App;
