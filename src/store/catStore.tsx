import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  inCreBigCate: () => void;
  inCreSmallCate: () => void;
  summary: () => void;
};

export const useCatStore = create<TCatStoreState>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0,
    },
    inCreBigCate: () =>
      set((state) => {
        state.cats.bigCats += 1;
      }),
    inCreSmallCate: () =>
      set((state) => {
        state.cats.smallCats += 1;
      }),
    summary: () => {
      const total = get().cats.bigCats + get().cats.smallCats;
      return `There are ${total} cats in total.`;
    },
  }))
);
