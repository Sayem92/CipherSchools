import React, { useState } from "react";
import left from "../../assets/left-arrow.svg";
import right from "../../assets/right-arrow.svg";
import SideBar from "./SideBar";

const Profile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };


  return (
    <div className="flex  h-screen">
      <div className="flex-1 bg-gray-200">
        <button
          onClick={handleToggle}
          className={`bg-gray-100 text-black px-4 py-2 rounded-l-md absolute ${
            isCollapsed ? "right-24" : "right-60"
          } top-60 transform -translate-y-1/2`}
        >
          {isCollapsed ? (
            <img className="w-6" src={right} alt="" />
          ) : (
            <img className="w-6" src={left} alt="" />
          )}
        </button>
      </div>
      <div
        className={`w-60 bg-gray-100 text-gray-900 ${
          isCollapsed ? "w-24" : ""
        } right-0`}
      >
       {/* side bar  */}
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default Profile;
