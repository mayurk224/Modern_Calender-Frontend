import React from "react";
import CalenderHeader from "../components/CalenderHeader";

const Calender = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-400 w-[40%] h-[90%] rounded-2xl p-4">
        <CalenderHeader />
      </div>
    </div>
  );
};

export default Calender;
