import React from "react";

export default function SingleDish({ singleFood }) {
  return (
    <>
      {singleFood ? (
        <>
          <div className="text-3xl flex justify-center items-center h-12 mt-5">
            <h2>{singleFood.recipe.label}</h2>
          </div>
          <div className="flex justify-center items-center mt-5">
            <img src={singleFood.recipe.image} alt="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-3 mt-5">
            <h2 className="text-2xl">Labels</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 w-3/4 md:w-2/4 gap-3">
              {singleFood.recipe.healthLabels.map((a) => {
                return (
                  <h3
                    key={a}
                    className="border border-gray-500 bg-gray-200 text-sm md:text-lg"
                  >
                    {a}
                  </h3>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 mt-5">
            <h2 className="text-2xl">Required Ingredients</h2>
            <ul className="flex justify-center items-start flex-col list-decimal">
              {singleFood.recipe.ingredientLines.map((a) => {
                return (
                  <li className="text-sm md:text-lg" key={a}>
                    {a}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 my-5">
            <h2 className="text-2xl">Process</h2>
            {singleFood.recipe.ingredients.map((a) => {
              return (
                <div
                  key={a}
                  className="flex justify-center items-center flex-col gap-3"
                >
                  <div>{a.text}</div>
                  <div>
                    <img src={a.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>Bye</div>
      )}
    </>
  );
}
