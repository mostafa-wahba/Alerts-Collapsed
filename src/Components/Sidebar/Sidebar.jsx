import React from "react";
import logo from "../../Assets/street suite logo-04.png";
import avatar from "../../Assets/6769264_60111.jpg";
import { RiRocketFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoFolderSharp } from "react-icons/io5";
import { GrLineChart } from "react-icons/gr";

export default function Sidebar() {
  return (
    <>
      <div className="container w-100 h-100">
        <div className="top-options">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="menu">
            <li className="nav-link">
              <span>
                <RiRocketFill />
              </span>
            </li>
            <li className="nav-link">
              <span>
                <FaGraduationCap />
              </span>
            </li>
            <li className="nav-link">
              <span>
                <FaGears />
              </span>
            </li>
            <li className="nav-link">
              <span>
                <IoFolderSharp />
              </span>
            </li>
            <li className="nav-link">
              <span>
                <GrLineChart />
              </span>
            </li>
          </ul>
        </div>
        <div className="profile-avatar">
          <img src={avatar} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}
