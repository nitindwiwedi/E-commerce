import React, { useState } from "react";
import list from "../data";
import Cards from "./Cards";
const Products = ({ handleClick }) => {
  const[searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1 className="text-xl font-bold text-center bg-black text-white mt-6 h-8">
        PRODUCTS
      </h1>

      <div className="flex justify-around mt-6 items-center">
        <div>
          <h1 className="text-xl font-semibold">Products Listed Here...</h1>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 bg-transparent border-1 text-black border-black outline-none">
            <input
              id="searchInput"
              type="text"
              className="grow bg-transparent text-black"
              placeholder="Search"
              onChange={(event)=>{
                setSearchTerm(event.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <section className="flex flex-wrap gap-4 justify-center mt-6">
          {
            list.filter((item)=>{
              if(searchTerm==""){
                return item;
              }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return item;
              }
            }).map((item)=>{
              return(<Cards key={item.id} item={item} handleClick={handleClick}/>
              )
            })
          }
      </section>
    </>
  );
};

export default Products;

// {list.map((item) => (
//   <Cards />
//   ))
// }
