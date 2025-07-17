// import React from "react";

import CatBox from "./components/CatBox";

// import BearBox from "./components/BearBox";
const App = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1 className="mb-9">Zustan Tutorial</h1>
      <div className="flex flex-col gap-3 border rounded-lg p-5">
        {/* <BearBox /> */}
        <CatBox />
      </div>
    </div>
  );
};

export default App;
