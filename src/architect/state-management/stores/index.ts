import { createContext, useContext } from "react";
import NewsStore from "./NewsStore";
import DiaryStore from "./DiaryStore";



const store = {
  newsStore: NewsStore,
  diaryStore: DiaryStore,

};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;