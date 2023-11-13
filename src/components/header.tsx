import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <a href='/' className="flex flex-shrink-0 items-center w-36 md:w-auto">
            <Image src={logo} alt="Peek & Cloppenburg" />
          </a>
          <div className="flex">
            <Link href="/productList">
              <span className={"text-gray-500 hover:border-gray-300 hover:text-gray-700 flex h-full items-center border-b-2 px-1 pt-1 font-medium mr-4 " + (pathname == '/productList' ? "border-gray-300 text-gray-700" : "border-transparent")}>
                Product List 
              </span>
            </Link>
            <Link href="/statistics">
              <span className={"text-gray-500 hover:border-gray-300 hover:text-gray-700 flex h-full items-center border-b-2 px-1 pt-1 font-medium " + (pathname == '/statistics' ? "border-gray-300 text-gray-700" : "border-transparent")}>
                Statistics
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}