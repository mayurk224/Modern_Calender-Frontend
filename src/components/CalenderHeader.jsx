import React from "react";

const CalenderHeader = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="">
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 object-cover ring-gray-300 dark:ring-gray-500"
          src="https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Bordered avatar"
        />
      </div>
      <div className="">
        <h2 className="text-base font-medium leading-3">Welcome</h2>
        <h3 className="text-lg font-semibold">Mayur Kamble</h3>
      </div>
    </div>
  );
};

export default CalenderHeader;
