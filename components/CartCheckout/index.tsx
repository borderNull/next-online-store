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
    <div className="w-full h-auto flex flex-col lg:flex-row relative">
      <div className=" w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2  order-2 lg:order-1 mt-4 lg:mt-0 bg-white p-2 ">
        {products.map((product) => (
          <CartItem key={product.cartId} product={product} />
        ))}
      </div>
      <div className="lg:ml-4 p-2 w-full order-1 lg:order-2 lg:w-1/4 bg-white h-96 flex flex-col justify-center rounded">
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
