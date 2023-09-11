import Link from "next/link";
import Image from "next/image";
import CartStatus from "@/components/CartStatus";

export default function Header() {
  return (
    <header className="flex flex-col px-4 pt-4 justify-center items-center">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <div className="relative border border-black w-12 h-12 flex items-center justify-center transition-all transition-delay-300 ease-in hover:rounded-lg">
            <Image alt="logo" src="/logo.svg" fill />
          </div>
        </Link>
        <nav>
          <Link href="/cart">
            <CartStatus />
          </Link>
        </nav>
      </div>
      <div className="w-full h-2 m-4 rounded bg-black"></div>
    </header>
  );
}
