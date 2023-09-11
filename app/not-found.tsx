import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-96 w-96 flex flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p className="mt-4">Could not find requested resource</p>
      <Link className="mt-4 px-8 py-4 bg-black text-white" href="/">
        Return to products
      </Link>
    </div>
  );
}
