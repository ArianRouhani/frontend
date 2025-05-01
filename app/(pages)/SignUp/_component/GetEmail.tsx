import Link from "next/link"
import Image from "next/image"
export default function GetEmail() {

    return (
        <div className="z-50 absolute top-0 bg-[whitesmoke] text-black w-full ">
            <div className="border-b-[1px] border-gray-300 bg-white p-5 ">
                <Link className="py-3" href=".."><Image src={"/images/Almubdieun.png"} alt="" height={35} width={35}></Image></Link>
            </div>
            <div className=" justify-center items-center flex gap-4 sm:gap-5 flex-col lg:py-30 py-20">
                <p className="text-2xl sm:text-5xl text-center">Try Docusign free for 30 days</p>
                <p className="text-lg font-bold">No credit card required</p>
                <form action="./SignUpStart" className="w-[350px] flex flex-col gap-10">
                    <div className="relative border-[1px] border-gray-500 rounded-lg px-3 flex justify-center">
                        <div className=" w-full relative mt-5">
                            <input
                                type="email"
                                id="email"
                                className="peer h-10 text-xl w-full  text-black placeholder-transparent outline-none "
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-0 peer-focus:-top-3.5  peer-focus:text-xs"
                            >
                                Email
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div><input type="checkbox" name="" defaultChecked id="receiveagree" /></div>
                        <label htmlFor="receiveagree">I agree to receive marketing communications from Docusign and acknowledge that I can opt out at any time by visiting the Preference Center.</label>
                    </div>
                    <div>
                        <p className="text-xs">By clicking the Get Started button, you agree to the Terms & Conditions and Privacy Policy.</p>
                        <input type="submit" className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-3" value="Get Started" />
                    </div>
                </form>

            </div>
        </div>
    )
}