"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";

export default function OrderStatus() {
  const orderId = useCartStore((state) => state.orderId);
  const resetStore = useCartStore((state) => state.resetState);
  const router = useRouter();
  const navigateToProducts = () => {
    router.push("/");

    // added timeout for image to not jump after orderId is reseted
    if (orderId > 0) {
      setTimeout(() => {
        resetStore();
      }, 1000);
    }
  };
  const orderStatusImage =
    orderId > 0 ? "/order-success.svg" : "/order-empty.svg";
  const orderAlt = orderId > 0 ? "order success" : "empty cart";
  return (
    <div className="bg-white w-full h-96 flex justify-center items-center rounded">
      <div className="flex flex-col items-center">
        <Image src={orderStatusImage} alt={orderAlt} width={60} height={60} />
        {orderId > 0 ? (
          <p className="mt-2">
            Thanks for purchase, your order number is{" "}
            <span className="font-bold">{orderId}</span>
          </p>
        ) : (
          <p className="mt-2">
            Your cart is empty, add products in product section
          </p>
        )}

        <button
          onClick={navigateToProducts}
          className="p-2 bg-black mt-2 text-white"
        >
          Go to products
        </button>
      </div>
    </div>
  );
}
