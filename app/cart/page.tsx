"use client";
import { useCartStore } from "@/store";
import OrderStatus from "@/components/OrderStatus";
import CartCheckout from "@/components/CartCheckout";

export default function Page() {
  const productsCount = useCartStore((state) => state.products.length);

  return (
    <main className="flex w-full min-h-full relative">
      {productsCount > 0 ? <CartCheckout /> : <OrderStatus />}
    </main>
  );
}
