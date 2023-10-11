import { createContext, useContext } from "react";
import NewsStore from "./NewsStore";

const store = {
  newsStore: NewsStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;