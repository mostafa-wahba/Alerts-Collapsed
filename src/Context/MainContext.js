import { createContext, useState } from "react";
export const MainContext = createContext();
export default function MainContextProvider(props) {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <MainContext.Provider value={{ showFilter, setShowFilter }}>
      {props.children}
    </MainContext.Provider>
  );
}
