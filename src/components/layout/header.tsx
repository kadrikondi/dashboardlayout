// import React from "react";
import Logo from "../../assets/TestLogo.svg";
import Home from "../../assets/icon/home_FILL0_wght300_GRAD0_opsz24.svg";
import Patient from "../../assets/icon/group_FILL0_wght300_GRAD0_opsz24.svg";
import Schedule from "../../assets/icon/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import Setting from "../../assets/icon/settings_FILL0_wght300_GRAD0_opsz24.svg";
import More from "../../assets/icon/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

import Transaction from "../../assets/icon/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import Message from "../../assets/icon/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import User from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";

import "./header.css";
export default function header() {
  return (
    <div className="grid  mt-10  justify-center align-middle px-10 sm:grid-cols-12  headerlay ">
      <div className="col-span-3  py-4">
        <img src={Logo} alt="" className="h-10" />
      </div>

      <div className="centerc flex col-span-6  sm:justify-center  align-middle justify-items-center  py-5">
        <div className="flex  justify-center align-middle px-5 py-1  bg-gray-400">
          {" "}
          <img src={Home} alt="" className=" mt-1 w-5 h-5" />{" "}
          <span className="ml-2 font-semibold font-sans "> Overview</span>
        </div>

        <div className=" flex   justify-center align-middle px-5 py-1 bg-tech-care-green rounded-full h-9 ">
          <img src={Patient} alt="" className="mt-1 w-5 h-5" />{" "}
          <span className="ml-2  font-semibold "> Patients</span>
          {/* <div className="hicon"></div> */}
        </div>

        <div className=" flex px-5 py-1 ">
          <img src={Schedule} alt="" className="mt-1  w-5 h-5" />{" "}
          <span className="ml-2  font-semibold "> Schedule</span>
          {/* <div className="hicon"></div> */}
        </div>

        <div className=" flex px-5 py-1 ">
          <img src={Message} alt="" className="mt-1 w-5 h-5 " />
          <span className="ml-2  font-semibold "> Message</span>
          {/* <div className="hicon"></div> */}
        </div>

        <div className=" flex px-5 py-1 ">
          <img src={Transaction} alt="" className=" mt-1 w-5 h-5" />{" "}
          <span className="ml-2  font-semibold ">Transactions</span>
          {/* <div className="hicon"></div> */}
        </div>
      </div>

      <div className="col-span-3 flex  justify-end  items-center py-3">
        <figcaption className=" flex items-center space-x-2 border-r-2    border-r-tech-grey">
          <img
            src={User}
            alt=""
            className="flex-none w-10 h-10 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-aut px-5">
            <div className="text-base text-slate-600 font-semibold dark:text-slate-300">
              <span className="absolute inset-0"></span>Dr. Jose Simmons
            </div>
            <div className="mt-0.1 " style={{ color: "#707070" }}>
              General Practioner
            </div>
          </div>
        </figcaption>
        <figcaption className="flex  justify-center  w-6 mx-9 space-x-4">
          <img src={Setting} alt="" />
          <img src={More} alt="" />
        </figcaption>
      </div>
    </div>
  );
}
