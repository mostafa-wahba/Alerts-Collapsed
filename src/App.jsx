import React, { useContext } from "react";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { CiMenuKebab } from "react-icons/ci";
import { MainContext } from "./Context/MainContext";

const App = () => {
  const { showFilter, setShowFilter } = useContext(MainContext);
  return (
    <>
      <main className="d-flex h-100 w-100 justify-content-center align-items-center">
        <nav className="position-fixed start-0 top-0">
          <Sidebar />
        </nav>
        <div id="home" className="d-flex vh-100 row g-0 align-items-start">
          <Home />
        </div>
        <span
          onClick={() => {
            console.log(showFilter);
            setShowFilter(!showFilter);
            console.log(showFilter);
          }}
          className="filter-btn position-absolute d-flex rounded-5 d-xxl-none"
        >
          <CiMenuKebab />
        </span>
      </main>
    </>
  );
};

export default App;
