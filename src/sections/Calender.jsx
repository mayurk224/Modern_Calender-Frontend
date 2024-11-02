import React from "react";
import CalenderHeader from "../components/CalenderHeader";
import Day_Track from "../components/Day";

const Calender = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-400 w-[50%] h-[90%] rounded-2xl p-4">
        <div className="">
          <CalenderHeader />
        </div>
        <div className="mt-4">
          <Day_Track />
        </div>
      </div>
    </div>
  );
};

export default Calender;
