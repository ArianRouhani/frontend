import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <header className="sticky top-0 w-full z-40">
      <div className="bg-violet-950 hidden sm:flex py-1 px-10 justify-center lg:justify-between text-sm text-white">
        <a href="" className="hidden lg:flex">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, officia?</a>
        <div className=" flex gap-5">
          <a href="">Sales 1-877-720-2040</a>
          <a href="">Search</a>
          <a href="">Support</a>
          <a href="">Access Document</a>
          <a href="">Log In</a>
        </div>
      </div>
      <div className="bg-violet-950 flex sm:hidden py-1 px-10 justify-center text-sm text-white">
        <a href="">Sales 1-877-720-2040</a>
      </div>
      <div className="bg-white items-center px-5 sm:px-10  flex justify-between text-sm font-bold text-blue-800">
        <div className="flex gap-10 text-gray-700">
          <Link className="py-3" href=""><Image src={"/images/Almubdieun.png"} alt="" height={35} width={35}></Image></Link>
          <div className="hidden lg:flex gap-10">
            <button className="relative hover:border-b-2 border-blue-700">Solutions</button>
            <button className="relative hover:border-b-2 border-blue-700">Products</button>
            <button className="relative hover:border-b-2 border-blue-700">Resources</button>
            <button className="relative hover:border-b-2 border-blue-700">Plans and Pricing</button>
          </div>
        </div>
        <div className="flex gap-8 my-3">
          <button className="hidden border-[1px] border-white hover:border-gray-300 p-3 rounded-lg sm:flex">CONTACT SALES</button>
          <button className="hidden border-[1px] border-white hover:border-gray-300 p-3 rounded-lg sm:flex" >BUY NOW</button>
          <Link href={"/SignUp"} className="bg-blue-700 hover:bg-blue-800 text-xs sm:text-sm  text-white p-3 rounded-lg">TRY FOR FREE</Link>
        </div>
      </div>
    </header>
  )
}
