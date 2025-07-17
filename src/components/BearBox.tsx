import React from "react";
import { useBearStore } from "../store/bearStore";
const BearBox = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <div className="flex justify-center items-center flex-col gap-5 ">
      <h1>Bear Box</h1>
      <p>{bears}</p>
      <div className="flex justify-between gap-7">
        <button
          onClick={increasePopulation}
          className=" flex flex-col gap-3 bg-green-600 p-5 rounded-lg"
        >
          Add Bear
        </button>
        <button
          onClick={removeAllBears}
          className=" flex flex-col gap-3 bg-green-600 p-5 rounded-lg"
        >
          Clear Bear
        </button>
      </div>
    </div>
  );
};

export default BearBox;
