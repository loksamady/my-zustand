import { useCatStore } from "../store/catStore";
const CatBox2 = () => {
  const {
    cats: { bigCats },
    inCreBigCate,
  } = useCatStore();
  return (
    <div className="flex justify-center items-center flex-col border p-11 gap-5 ">
      <h1>Cat Box</h1>
      <p>BigCat:{bigCats}</p>
      <div className="flex justify-between gap-7">
        <button
          onClick={inCreBigCate}
          className=" flex flex-col gap-3 bg-green-600 p-5 rounded-lg"
        >
          Add BigCat
        </button>
      </div>
    </div>
  );
};

export default CatBox2;
