import React, { useContext } from "react";
import Filter from "../Filter/Filter";
import Alerts from "../Alerts/Alerts";
import { MainContext } from "../../Context/MainContext";

export default function Home() {
  const { showFilter } = useContext(MainContext);

  return (
    <>
      <section className="col-9">
        <Alerts />
      </section>
      <aside
        id="Filter"
        className="col-3"
        style={{ right: showFilter ? "0" : "" }}
      >
        <Filter />
      </aside>
    </>
  );
}
