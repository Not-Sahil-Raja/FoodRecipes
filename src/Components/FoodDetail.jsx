import React, { useEffect, useState } from "react";

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState("");
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "b040a6a8dea14e1c9fc5bacb6ba1b7ae";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function foodInfo() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setLoading(false);
    }
    foodInfo();
  }, [foodId]);
  console.log(food.extendedIngredients);
  return (
    <div className=" w-full flex-1 h-[82vh] mt-9 my-2 px-4 py-4 bg-orange-200 shadow-inner rounded overflow-y-scroll scroll-smooth no-scrollbar">
      <img
        src={food.image}
        className=" h-40 w-full object-cover shadow-md rounded-md"
      />
      <h3 className=" text-center px-1 my-3 font-bold ">{food.title}</h3>
      <div className=" flex justify-around py-2">
        {food.vegetarian ? (
          <div className=" flex bg-green-700 gap-1 px-2 py-1 rounded-md font-semibold text-gray-50 justify-center items-center shadow-lg ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
              alt=""
              className=" w-4 h-4 object-contain"
            />
            <span>Veg</span>
          </div>
        ) : (
          <div className=" flex bg-red-800 gap-1 px-2 py-1 rounded-md font-semibold text-gray-50 justify-center items-center shadow-lg ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
              alt=""
              className=" w-4 h-4 object-contain"
            />
            <span>Non Veg</span>
          </div>
        )}
        {food.dairyFree ? (
          <div className=" flex bg-slate-400 gap-1 px-2 py-1 rounded-md font-semibold text-gray-50  justify-center items-center shadow-lg ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4905/4905942.png"
              alt=""
              className=" w-4 h-4 object-contain"
            />
            <span>DairyFree</span>
          </div>
        ) : (
          <div className=" flex bg-slate-200 gap-1 px-2 py-1 rounded-md font-semibold text-zinc-700 justify-center items-center shadow-lg ">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/library-2/milk-dairy.png"
              alt=""
              className=" w-4 h-4 object-contain"
            />
            <span>Non DairyFree</span>
          </div>
        )}
      </div>
      <div className=" text-center py-2">
        <p>
          Cooking Time:{" "}
          <span className=" font-semibold">{food.readyInMinutes} min</span>{" "}
        </p>
      </div>
      <div className=" py-2 my-5 bg-[#ffe9cd] rounded-md border-[1.5px] border-solid border-[#806645] border-b-[3px] ">
        <h4 className=" font-semibold text-center py-2">Ingredients</h4>
        {loading ? (
          <p>Wait Loading..</p>
        ) : (
          <ol className="px-5 py-2 flex flex-wrap items-center justify-center">
            {food.extendedIngredients.map((stp) => (
              <li
                key={stp.id}
                className=" bg-[#a77649] m-1 px-1 py-1 rounded-md font-medium text-[#fffffe] shadow-inner shadow-[hsl(29,23%,32%)] flex items-center gap-2"
              >
                <img
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    stp.image
                  }
                  alt=""
                  className=" w-8 rounded object-cover aspect-auto"
                />
                <span>{stp.original}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className=" bg-orange-100 px-2 py-2 rounded-md shadow-inner border bottom-4 border-orange-400 overflow-x-hidden">
        <h4 className=" font-semibold text-center py-2">Instruction</h4>
        {loading ? (
          <p>Wait Loading..</p>
        ) : (
          <ol className=" list-decimal list-outside px-5 py-2">
            {food.analyzedInstructions[0].steps.map((stp) => (
              <li
                key={stp.number}
                className=" my-4 py-1  px-2 rounded border border-solid bg-[#f7d3a4de] font-medium border-b-[3px] border-[#5e3535ab]
              "
              >
                {stp.step}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default FoodDetail;
