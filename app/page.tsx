import Pagination from "@/components/Pagination";
import ProductItem, { IProductItem } from "@/components/ProductItem";

async function getProducts(page: string = "1") {
  const res = await fetch(`http://localhost:3000/product?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const products = await getProducts(page as string);
  const { pageCount, page: currentPage } = products;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-4 grid-rows-2 w-full gap-2">
        {products.data.map((product: IProductItem) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {pageCount > 1 && (
        <Pagination pageCount={pageCount} currentPage={currentPage} />
      )}
    </main>
  );
}
