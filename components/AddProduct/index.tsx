"use client";
import { useState } from "react";
import { useCartStore } from "@/store";
import { Toast } from "toaster-js";

interface IProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  special: string;
  priceInCents: number;
  specialInCents: number;
  sizes: string[];
}

export default function AddProduct({ product }: { product: IProduct }) {
  const [currentSize, setCurrentSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

  const { sizes } = product;
  const { addProduct } = useCartStore();
  const handleChooseSize = (size: string) => {
    if (sizeError) {
      setSizeError(false);
    }
    setCurrentSize(size);
  };
  const handleAddProduct = () => {
    if (!currentSize.length) {
      setSizeError(true);
      return;
    }
    addProduct({ ...product, size: currentSize });
    new Toast("Product is added!", Toast.TYPE_DONE);
  };
  return (
    <div>
      <div className="mt-2">
        <p className="text-sm">Size</p>
        <div className="mt-2 flex gap-2">
          {sizes.map((size) => {
            return (
              <button
                className={`border border-black rounded p-2 text-xs ${
                  currentSize === size ? "bg-black text-white" : ""
                }`}
                key={size}
                onClick={() => handleChooseSize(size)}
              >
                {size}
              </button>
            );
          })}
        </div>
        {sizeError && (
          <p className="text-red-600 mt-2 text-xs">Please select your size</p>
        )}
      </div>
      <button
        className="py-2 px-12 mt-4 rounded bg-black text-white w-42"
        onClick={handleAddProduct}
      >
        Add to cart
      </button>
    </div>
  );
}
