"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-96 w-96 flex flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <button
        className="mt-4 px-8 py-4 bg-black text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
