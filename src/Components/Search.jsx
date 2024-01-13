import React, { useEffect, useState } from "react";
const urls = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "b040a6a8dea14e1c9fc5bacb6ba1b7ae";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${urls}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <>
      <form className=" bg-slate-200 w-full h-[15%] flex justify-center relative">
        <input
          type="text"
          className=" m-2 border-b-[#8f745e] border-b-[3.2px] border-[#8f745e] border-[2.8px] rounded-[5rem] px-10 py-1 text-xl 
            text-[#533e2d] font-medium"
          placeholder="Search"
          value={query}
          name="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
