import React from "react";


function Cards({ item }) {
  // Check if item is defined
  if (!item) {
    return null; // Return null if item is undefined
  }

  return (
    <>
      <div className="mt-4 my-3 p-3 ml-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-950 dark:text-white">
          <figure>
            <img src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name || "No Name"}
              <div className="badge badge-secondary">{item.category || "No Category"}</div>
            </h2>
            <p>{item.title || "No Title"}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price || 0}</div>
              <div className="cursor-pointer p-3 rounded-full border-[2px ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
