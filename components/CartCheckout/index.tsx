"use client";

import { useCartStore } from "@/store";
import CartItem from "@/components/CartItem";
import { formatPrice, countSum } from "@/utils";

export default function CartCheckout() {
  const products = useCartStore((state) => state.products);
  const checkoutCard = useCartStore((state) => state.checkoutCard);
  const productsCount = products.length;
  const productFullPrice = countSum(products, "priceInCents");
  const productDiscountPrice = countSum(products, "specialInCents");

  return (
    <div className="w-full h-auto flex relative">
      <div className="w-3/4 grid grid-cols-3 grid-rows-2 gap-2 bg-white p-2 ">
        {products.map((product) => (
          <CartItem key={product.cartId} product={product} />
        ))}
      </div>
      <div className="ml-4 p-2 w-1/4 bg-white h-96 flex flex-col justify-center rounded">
        <h3 className="text-xl">Order Summary</h3>
        <p className="mt-2">{productsCount} items</p>
        <div className="flex justify-between mt-2">
          <p>Full price</p>
          <p>{formatPrice(productFullPrice)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Discount price</p>
          <p className="text-red-400">{formatPrice(productDiscountPrice)}</p>
        </div>
        <div className="flex justify-between border-t-2 pt-4 mt-4">
          <p>Total</p>
          <p>{formatPrice(productDiscountPrice)}</p>
        </div>
        <button
          onClick={() => checkoutCard()}
          className="px-16 py-4 bg-black text-xl text-white mt-auto rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
