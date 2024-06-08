import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="text-white sm:w-48 w-[80px] transition-all ease-in-out h-[100vh] bg-gray-700 fixed">
        <div className=" text-center sm:text-3xl text-lg pt-[20px]">
          <h4>Forecast</h4>
        </div>
        <div className="flex flex-col items-start text-white pt-[20px] px-8">
          <div className="flex justify-start items-center my-1">
            <div className="sm:block hidden">
              <i className="fa-solid fa-chart-line me-3"></i>
              <span className="">Dashoboard</span>
            </div>
            <div className="sm:hidden block"><i className="fa-solid fa-chart-line text-3xl mb-1"></i></div>
          </div>
          <div className="flex justify-start items-center my-1">
            <div className="sm:block hidden">
              <i className="fa-solid fa-link me-3"></i>
              <span>Connect</span>
            </div>
            <div className="sm:hidden block"><i className="fa-solid fa-link text-3xl mb-1"></i></div>
          </div>
          <div className="flex justify-start items-center my-1">
            <div className="sm:block hidden">
              <i className="fa-solid fa-book me-3"></i>
              <span>Report</span>
            </div>
            <div className="sm:hidden block"><i className="fa-solid fa-book text-3xl mb-1"></i></div>
          </div>
          <div className="flex justify-start items-center my-1">
            <div className="sm:block hidden">
              <i className="fa-solid fa-gear me-3"></i>
              <span>Settings</span>
            </div>
            <div className="sm:hidden block"><i className="fa-solid fa-gear text-3xl mb-1"></i></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
