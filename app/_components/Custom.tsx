import Image from "next/image"
export default function Custom() {
    return (
        <div className="bg-gradient-to-t from-blue-950 to-blue-800 text-white">
            <div className="text-center px-5 lg:px-20 py-20 gap-10 w-full text-3xl sm:text-4xl flex flex-col justify-center items-center">
                <p>Build custom agreement workflows</p>
                <p className="text-lg sm:text-2xl text-center text-gray-400">Extend your workflows with a robust App Center, 900+ partner integrations, industry-leading APIs, and seamless connections to cloud storage.</p>
                <button className="bg-white/0 hover:bg-white/50 border text-white text-lg p-4 rounded-lg">Explore Integrations </button>
            </div>

            <div className="text-green-500"> </div>

            <div className=" px-5 lg:px-20 py-20 gap-10 w-full text-3xl sm:text-4xl flex flex-col justify-center items-center">
                <div className="flex lg:flex-row flex-col gap-15">
                    <div className="flex items-center lg:items-start flex-col gap-10 lg:w-1/3">
                        <p>Trusted the world over</p>
                        <p className="text-lg text-gray-400 text-center lg:text-start">We take your agreements as seriously as you do, which is why Docusign meets the most stringent global security standards.</p>
                        <div><button>
                            <div className="peer mt-4 text-lg sm:text-sm font-bold ">Explore Trust center {">"}</div>
                            <div className="w-0 h-[1px] bg-white peer-hover:w-full"></div>
                        </button></div>
                    </div>
                    <table className=" lg:w-2/3 font-bold">
                        <tbody className="grid gap-10">
                            <tr className="flex flex-col sm:flex-row gap-10">
                                <td className="bg-white text-black text-2xl flex flex-col gap-10 p-10 rounded-2xl sm:w-1/2">
                                    <Image alt="" width={40} height={40} src={"/images/comments.svg"}></Image>
                                    <p><span className="text-blue-700">1 billion</span> people and <span className="text-blue-700">1.6 million customers</span> use Docusign</p>
                                </td>
                                <td className="bg-white text-black text-2xl flex flex-col gap-10 p-10 rounded-2xl sm:w-1/2">
                                    <Image alt="" width={40} height={40} src={"/images/comments.svg"}></Image>
                                    <p><span className="text-blue-700">95% of Fortune 500 companies</span> use Docusign</p>
                                </td>
                            </tr>
                            <tr className="flex flex-col sm:flex-row gap-10">
                                <td className="bg-white text-black text-2xl flex flex-col gap-10 p-10 rounded-2xl sm:w-1/2">
                                    <Image alt="" width={40} height={40} src={"/images/comments.svg"}></Image>
                                    <p><span className="text-blue-700">44 languages</span> available for signers, plus 14 for senders</p>
                                </td>
                                <td className="bg-white text-black text-2xl flex flex-col justify-between gap-10 p-10 rounded-2xl sm:w-1/2">
                                    <Image alt="" width={40} height={40} src={"/images/comments.svg"}></Image>
                                    <p><span className="text-blue-700">Millions</span> of transactions per day</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <p className="text-xs font-bold">DOCUSIGN COMPLIANCE CERTIFICATIONS</p>
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="text-lg hidden  text-white xl:flex justify-between">
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >ISO 27001</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >FedRAMP</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >APEC PPP</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >CSA STAR</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >PCA DSS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                            <p >SSAE 18</p>
                        </div>
                    </div>
                    <div className="text-lg text-white sm:flex hidden xl:hidden  flex-col justify-between">
                        <div className="flex justify-between ">
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >ISO 27001</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >FedRAMP</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >APEC PPP</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] my-5 bg-gray-400"></div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >CSA STAR</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >PCA DSS</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >SSAE 18</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-lg flex text-white sm:hidden flex-col justify-between">
                        <div className="flex justify-between ">
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >ISO 27001</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >FedRAMP</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] my-5 bg-gray-400"></div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >APEC PPP</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >CSA STAR</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] my-5 bg-gray-400"></div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >PCA DSS</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image alt="" width={30} height={30} src={"/images/Tick.svg"}></Image>
                                <p >SSAE 18</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-400"></div>

                </div>
            </div>


            
        </div>

    )
}