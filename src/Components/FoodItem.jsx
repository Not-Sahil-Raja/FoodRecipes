import React from "react";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <>
      <div className=" flex w-[95%] mx-5 my-10 gap-6  items-center bg-[#f7e7c6] border-b-[3.5px] border-[#9c6b4acc] border-[1.5px] border-solid px-4 py-3 rounded shadow shadow-[#b2afb27c]">
        <img
          src={food.image}
          className=" w-44 h-32 rounded-2xl object-cover self-start shadow-lg"
        />
        <div
          className=" flex items-center justify-center bg-white mx-auto  rounded-md shadow-inner py-3 px-4 w-4/12 border-b-[2.8px] border-[#9c7b4acc] 
          border-[1.5px] border-solid"
        >
          <p className=" text-[1rem] font-sans font-medium text-[#5f4439]">
            {food.title}
          </p>
        </div>
        <div className=" mx-auto ">
          <button
            onClick={() => setFoodId(food.id)}
            className=" bg-[#7ba753] text-white shadow-lg  px-4 py-3 rounded-lg font-semibold"
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
