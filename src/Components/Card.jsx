import React from "react";


function Card({ product }) {

    return (
        <>
          {product && (
            <div className="w-[95%] min-h-72 bg-[#f0f1f0] rounded-md px-6 py-4 mx-4 my-4 md:w-[90%] transition-transform transform hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <div className="flex justify-between items-center">
                <div className="text-sub font-semibold">{`${product.niche_category.toLocaleUpperCase()}`}</div>
                <div className="text-sub font-semibold">${product.price}</div>
              </div>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="drop-shadow-md"
              />
              <h3>{product.title}</h3>
            </div>
          )}
        </>
      );

    }
export default Card;
