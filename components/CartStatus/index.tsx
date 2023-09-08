"use client";
import { useCartStore } from "@/store";
import Image from "next/image";

export default function CartStatus() {
  const productsCount = useCartStore((state) => state.products.length);
  const productsInCart = productsCount > 0;
  const shoppingCartImage = productsInCart
    ? "/shopping-cart-full.svg"
    : "/shopping-cart-empty.svg";

  return (
    <div className="relative">
      <Image
        src={shoppingCartImage}
        alt="shopping cart"
        width={24}
        height={24}
      />
      {productsInCart && (
        <div className="w-4 h-4 bg-red-500 rounded-full text-white text-xs text-center absolute -bottom-1 -right-1 ">
          {productsCount}
        </div>
      )}
    </div>
  );
}
