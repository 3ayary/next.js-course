"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav(){

const pathName = usePathname()

return(
    <nav className="bg-blue-200 text-center h-[30px] pt-1">
        <Link href="/" className={pathName==='/'?"mr-4 text-red-700":"mr-4 text-blue-700"}>Home</Link>
        <Link href="/about" className={pathName==='/about'?"mr-4 text-red-700":"mr-4 text-blue-700"}>about</Link>
        <Link href="/products/1" className={pathName.startsWith("/products/1")?"mr-4 text-red-700":"mr-4 text-blue-700"}>product 1</Link>

   
    </nav>
)

}