import { useCatStore } from "../store/catStore";
const CatBox = () => {
  const {
    cats: { bigCats, smallCats },
    inCreBigCate,
    inCreSmallCate,
    summary,
  } = useCatStore();
  console.log(summary());
  return (
    <div className="flex justify-center items-center flex-col gap-5 ">
      <h1>Cat Box</h1>
      <p>BigCat:{bigCats}</p>
      <p>SmallCat:{smallCats}</p>
      <div className="flex justify-between gap-7">
        <button
          onClick={inCreBigCate}
          className=" flex flex-col gap-3 bg-green-600 p-5 rounded-lg"
        >
          Add BigCat
        </button>
        <button
          onClick={inCreSmallCate}
          className=" flex flex-col gap-3 bg-green-600 p-5 rounded-lg"
        >
          Add SmallCat
        </button>
      </div>
    </div>
  );
};

export default CatBox;
