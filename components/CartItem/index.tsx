"use client";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store";
import { CartProduct } from "@/store";

export default function CartItem({ product }: { product: CartProduct }) {
  const removeProduct = useCartStore((state) => state.removeProduct);

  const { id, cartId, name, price, special, image, size } = product;
  const handleRemove = () => removeProduct(cartId as string);
  return (
    <div
      key={cartId}
      className="flex justify-between border border-transparent p-2 rounded transition duration-500 ease-in hover:shadow-lg hover:border-gray-300"
    >
      <Link href={`/product/${id}`} className="flex-none">
        <Image src={image} alt={name} width={130} height={220} />
      </Link>

      <div className="p-2 text-sm flex-grow flex flex-col">
        <p className="text-sm">{name}</p>
        <p>
          <span className="mr-2 line-through text-xs">{price}</span>
          <span className="text-red-400">{special}</span>
        </p>
        <p className="text-xs">Size {size}</p>
        <button className="mt-auto mr-auto" onClick={handleRemove}>
          <Image
            src="/trash-can.svg"
            alt="remove cart item"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
