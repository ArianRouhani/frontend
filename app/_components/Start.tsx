
import Image from "next/image"
import { useRef,useEffect } from "react"
export default function Start() {
    const textRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (textRef.current) {
          textRef.current.classList.remove("opacity-0", "translate-y-6");
          textRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }, []);
    return (
        <div className="text-white bg-gradient-to-r to-fuchsia-600 from-blue-800 flex justify-between gap-10 pt-20 sm:pt-40 px-5 lg:pl-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-8 pb-20">
                <h2  ref={textRef}  className="text-5xl sm:text-6xl opacity-0 translate-y-6 transition-all ease-out">Agreement Ai you can trust</h2>
                <p className="text-2xl ">Send, sign, and manage all your agreements for free.</p>
                <div className=" flex flex-col gap-2">
                    <p className="text-[10px]">By clicking the Get Started button, you agree to the Terms & Conditions and Privacy Policy.</p>
                    <form action="./SignUpStart" className="relative border-[2px] border-white/30 bg-white/10 rounded-lg p-3 flex sm:flex-row flex-col gap-3 justify-center">

                        <div className=" bg-white sm:bg-white/0 rounded sm:w-[70%] relative sm:mt-5">
                            <input
                                type="email"
                                id="email"
                                className="peer placeholder:text-gray-500 h-10 text-xl w-full text-black sm:px-0 px-5 sm:text-white sm:placeholder-transparent outline-none "
                                placeholder="Email"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="sm:flex hidden absolute left-0 -top-3.5 text-white text-xs transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-0 peer-focus:-top-3.5  peer-focus:text-xs"
                            >
                                Email 
                            </label>
                        </div>
                        <input type="submit" className="sm:w-[30%] bg-blue-700 hover:bg-blue-800 sm:p-0 p-2 rounded-lg " value="Get Started" />
                    </form>
                </div>
            </div>
            <div className="lg:w-1/2 hidden lg:flex relative "><Image className="absolute -bottom-6 right-0" src="/images/start.png" alt="" width={1000} height={0} /></div>
        </div>
    )
}
