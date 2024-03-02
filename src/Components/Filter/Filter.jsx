import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";

export default function Filter() {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center flex-column p-3 gap-2 row g-0 m-0">
        <h3 className="text-center">Filters</h3>
        <div className="w-100 filters-names d-flex justify-content-center align-items-start flex-column gap-2 col-3">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <h6 className="text-grey">Filters Applied</h6>
            <h6>Clear All</h6>
          </div>
          <div className="filters-names-box p-2 w-100 d-flex flex-wrap justify-content-start align-items-start">
            <span className="bg-accent d-flex justify-content-center align-items-end rounded-2 gap-1 text-black px-2">
              Real Estate
              <span className="curser-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    d="M7.38672 7L4.38672 4M4.38672 4L1.38672 1M4.38672 4L7.38672 1M4.38672 4L1.38672 7"
                    stroke="#202020"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="w-100 filters-names d-flex justify-content-center align-items-start flex-column gap-2 col-4">
          <div className="filters-box p-3 w-100 d-flex flex-column">
            <h6 className="text-white fw-semibold mb-1">Stock</h6>
            <div className="search-bar mb-3 ">
              <input placeholder="$ TICKER" type="text" />
              <span className="search-icon curser-pointer">
                <FaSearch />
              </span>
            </div>
            <div className="industry px-3 mb-3">
              <h6 className="text-white fw-semibold mb-3">Industry</h6>
              <ul className="d-flex w-100 justify-content-center">
                <li className="me-3">
                  <ul className="d-flex flex-column">
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        {" "}
                        <LuHeartPulse />
                        <span>Health care</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        {" "}
                        <LuHeartPulse />
                        <span>Materials</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        {" "}
                        <LuHeartPulse />
                        <span>Energy</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        {" "}
                        <LuHeartPulse />
                        <span>Consumer discretionary</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>Consumer staples</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>Real estate</span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="d-flex flex-column">
                    <li className="d-flex gap-3">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>IT</span>
                      </span>
                    </li>
                    <li className="d-flex gap-3">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>Communication</span>
                      </span>
                    </li>
                    <li className="d-flex gap-3">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>Industrials</span>
                      </span>
                    </li>
                    <li className="d-flex gap-3">
                      <span className="filter-item px-1 d-flex gap-3 justify-content-center align-items-center">
                        <LuHeartPulse />
                        <span>Utilities</span>
                      </span>
                    </li>
                    <li className="d-flex gap-2">
                      <span>
                        <LuHeartPulse />
                      </span>
                      Financials
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center px-3 mb-3">
              <div className="d-flex justify-content-center align-items-start flex-column gap-2">
                <h6>Market Cup</h6>
                <ul>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="micro" id="Micro" value="Micro" />
                    <label for="Micro">Micro</label>
                  </li>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="micro" id="Small" value="Small" />
                    <label for="Small">Small</label>
                  </li>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="micro" id="Large" value="Large" />
                    <label for="Large">Large</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-center align-items-start flex-column gap-2">
                <h6>Risk Level</h6>
                <ul>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="risk" id="Low" value="Low" />
                    <label for="Low">Low Risk</label>
                  </li>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="risk" id="Mid" value="Mid" />
                    <label for="Mid">Mid Risk</label>
                  </li>
                  <li className="d-flex justify-content-between align-items-center gap-3 w-100">
                    <input type="radio" name="risk" id="High" value="High" />
                    <label for="High">High Risk</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center px-3 ">
              <div className="d-flex justify-content-center flex-column align-items-center strategy gap-1">
                <h6>Strategy</h6>
                <span>Big Option Buys</span>
                <span>Merger Arbitrage</span>
                <span>Short Reports</span>
              </div>
              <div className="d-flex justify-content-center flex-column align-items-center strategy gap-1">
                <h6>Strategy</h6>
                <span>Big Option Buys</span>
                <span>Merger Arbitrage</span>
                <span>Short Reports</span>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-btn d-flex justify-content-center align-items-center col-2 w-100 mt-2">
          <button className="bg-accent border-0 text-white fw-bold fs-5">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
