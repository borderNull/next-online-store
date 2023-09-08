import Image from "next/image";
import Link from "next/link";

export interface IProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  special: string;
}

export default function ProductItem({ product }: { product: IProductItem }) {
  const { id, name, price, special, image } = product;
  return (
    <Link key={id} href={`/product/${id}`}>
      <div
        key={id}
        className="w-full  p-2 border border-transparent rounded transition duration-500 ease-in hover:shadow-lg hover:border-gray-300"
      >
        <Image
          src={image}
          alt={name}
          className="rounded"
          width={400}
          height={700}
          priority
        />
        <div className="p-2 text-xs">
          <p>{name}</p>
          <p>
            <span className="mr-2 line-through">{price}</span>
            <span className="text-red-400">{special}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
