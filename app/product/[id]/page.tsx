import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { sanitize } from "isomorphic-dompurify";
import Parse from "html-react-parser";
import AddProduct from "@/components/AddProduct";

export const metadata: Metadata = {
  title: siteConfig.metadata.product.name,
  description: siteConfig.metadata.product.description,
  icons: {
    icon: "/favicon.ico",
  },
};

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/product/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id: paramsId } = params;
  const data = await getProduct(paramsId);
  const {
    id,
    name,
    image,
    description,
    price,
    special,
    sizes,
    priceInCents,
    specialInCents,
  } = data;

  const sanitizedHtml = { __html: Parse(sanitize(description)) as string };

  return (
    <main className="flex flex-col items-center md:flex-row">
      <Image
        src={image}
        alt={name}
        className="rounded"
        width={400}
        height={655}
      />

      <div className="p-4">
        <Link className="text-xs" href="/">
          &lt;- go to products
        </Link>
        <p>{name}</p>
        <p>
          <span className="mr-2 line-through">{price}</span>
          <span className="text-red-400">{special}</span>
        </p>
        <AddProduct
          product={{
            id,
            name,
            image,
            price,
            special,
            priceInCents,
            specialInCents,
            sizes,
          }}
        />
        <div
          className="max-w-2xl mt-4 h-96 overflow-y-auto"
          dangerouslySetInnerHTML={sanitizedHtml}
        ></div>
      </div>
    </main>
  );
}
