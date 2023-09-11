"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
}

export default function Pagination({
  pageCount,
  currentPage,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") ?? currentPage);
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < pageCount;

  return (
    <div className="flex items-center p-2">
      <button
        disabled={!hasPrevPage}
        onClick={() => router.push(`/?page=${page - 1}`)}
        className={`mr-2 ${!hasPrevPage ? "text-gray-400" : ""}`}
      >
        &lt;
      </button>
      {Array.from(Array(pageCount).keys()).map((pageItem) => {
        return (
          <Link
            key={pageItem}
            href={`/?page=${pageItem + 1}`}
            className={`p-2 rounded ${
              pageItem + 1 === page ? "bg-pink-100" : ""
            }`}
          >
            {pageItem + 1}
          </Link>
        );
      })}
      <button
        disabled={!hasNextPage}
        onClick={() => router.push(`/?page=${page + 1}`)}
        className={`ml-2 ${!hasNextPage ? "text-gray-400" : ""}`}
      >
        &gt;
      </button>
    </div>
  );
}
