import Image from "next/image"
export default function More() {
    return (
        <div className="bg-white text-black px-5 lg:px-20 py-20 gap-10 w-full text-3xl sm:text-4xl flex flex-col justify-center items-center">
            <p className="text-center">Do (much) more with IAM</p>
            <p className="text-lg sm:text-2xl text-center text-gray-700">Save time and unlock value from your agreements. With our pre-configured IAM applications, you can automate workflows, manage and analyze documents with AI, and seamlessly connect agreement data across systems.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <button className=" bg-blue-700 hover:bg-blue-800  text-white text-lg p-4 rounded-lg">View Plans and Pricing </button>
                <button className="pb-3">
                    <div className="peer mt-4 text-blue-700 text-lg ">Explore All Products {">"}</div>
                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                </button>
            </div>
            <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={10000} height={10000} src={"/images/blog.webp"}></Image></div>
        </div>
    )
}