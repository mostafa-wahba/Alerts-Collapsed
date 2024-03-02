import React from "react";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SingleAlert from "../SingleAlert/SingleAlert";

export default function Alerts() {
  return (
    <>
      <div className="container py-4 px-xxl-5 d-flex flex-column gap-3 w-100">
        <div className="top-details row justify-content-center align-items-center flex-column flex-xxl-row w-100">
          <h1 className="title col-2">alerts</h1>
          <div className="search col-sm-12 col-xxl-10 d-flex justify-content-center align-items-start gap-2 p-0">
            <div className="search-bar">
              <input placeholder="Search By..." type="text" />
              <span className="search-icon">
                <FaSearch />
              </span>
            </div>
            <span className="notification-bell">
              <FaBell />
            </span>
          </div>
        </div>
        <div className="alerts-list d-flex flex-column justify-content-center align-items-center">
          <div className="scrolling-part w-100 pe-2 gap-3 ">
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
            <SingleAlert />
          </div>
        </div>
      </div>
    </>
  );
}
