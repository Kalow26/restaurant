"use client";
import { ProductType } from "@/types/types";
import { useEffect, useState } from "react";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (product.option?.length) {
      setTotal(quantity * price);
    }
  }, [quantity, selected, product, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* Options container */}
      <div className="flex gap-4">
        {product.option?.length &&
          product.option?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                backgroundColor:
                  selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => (
                setSelected(index),
                setPrice(product.price + option.additionalPrice)
              )}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* Quantity and add button container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="w-full flex justify-between p-3 ring-1 ring-red-500 ">
          <span>Quantity</span>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
