import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Stories() {
    const [selectedOption, setSelectedOption] = useState<'first' | 'second' | 'third'>('first');
    return (
        <div className="bg-white text-black px-5 lg:px-20 py-20 gap-10 w-full text-3xl sm:text-4xl flex flex-col justify-center items-center">
            <p className="text-center">Companies do better with Docusign</p>
            <p className=" text-lg sm:text-2xl text-center text-gray-700">1.6 million businesses, one solution. Learn how our customers save time and money, optimize business processes, and better serve their users.</p>
            <button>
                <div className="peer mt-4 text-blue-700 text-lg font-bold ">Browse Customer Stories {">"}</div>
                <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
            </button>
            <div className="hidden sm:flex w-full text-sm sm:text-3xl justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="options"
                        value="first"
                        checked={selectedOption === 'first'}
                        onChange={() => setSelectedOption('first')}
                        className="h-0 w-0 opacity-0"
                    />
                    <div className={`pb-3 border-b-[1px] ${selectedOption !== 'first' ? 'opacity-50' : 'opacity-100'}`}>PRIMERICA</div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="options"
                        value="second"
                        checked={selectedOption === 'second'}
                        onChange={() => setSelectedOption('second')}
                        className="h-0 w-0 opacity-0"
                    />
                    <div className={`pb-3 border-b-[1px] ${selectedOption !== 'second' ? 'opacity-50' : 'opacity-100'}`} >VESTWELL</div>
                </label>
            </div >
            <div className="hidden sm:flex">
                <div className={`p-10 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ${selectedOption !== 'first' ? 'hidden' : ''}`}>
                    <div >
                        <div className="w-full flex gap-10">
                            <div className="w-1/3 rounded-lg gap-20 flex flex-col pb-10">
                                <div className="overflow-hidden rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            </div>
                            <div className="w-2/3 flex flex-col gap-10">
                                <p>&quot;By integrating Docusign CLM and eSignature with our RevOps tech stack, we were able to consolidate work happening in a lot of different places to create a unified experience that positioned us for scale and revenue expansion.&quot;</p>
                                <div className="text-sm">
                                    <p >first </p>
                                    <p className="text-gray-500">SVP of Business Ops and Strategy, Vestwell</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-10">
                            <div className='w-1/3 flex items-end'>
                                <button >
                                    <div className="peer mt-4 text-blue-700 text-lg ">Explore Full Customer Story {">"}</div>
                                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                                </button>
                            </div>

                            <div className="flex justify-between w-2/3">
                                <div className="border-l-[1px] border-gray-300 pl-3">
                                    <p className="text-5xl">90%</p>
                                    <p className="text-sm text-gray-500">Faster contract completion</p>
                                </div>
                                <div className="border-l-[1px] border-gray-300 pl-3">
                                    <p className="text-5xl">200</p>
                                    <p className="text-sm text-gray-500">Hours of manual labor saved monthly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-10 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ${selectedOption !== 'second' ? 'hidden' : ''}`}>
                    <div >
                        <div className="w-full flex gap-10">
                            <div className="w-1/3 rounded-lg gap-20 flex flex-col pb-10">
                                <div className="overflow-hidden rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            </div>
                            <div className="w-2/3 flex flex-col gap-10">
                                <p>&quot;By integrating Docusign CLM and eSignature with our RevOps tech stack, we were able to consolidate work happening in a lot of different places to create a unified experience that positioned us for scale and revenue expansion.&quot;</p>
                                <div className="text-sm">
                                    <p >second</p>
                                    <p className="text-gray-500">SVP of Business Ops and Strategy, Vestwell</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-10">
                            <div className='w-1/3 flex items-end'>
                                <button >
                                    <div className="peer mt-4 text-blue-700 text-lg ">Explore Full Customer Story {">"}</div>
                                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                                </button>
                            </div>

                            <div className="flex justify-between w-2/3">
                                <div className="border-l-[1px] border-gray-300 pl-3">
                                    <p className="text-5xl">90%</p>
                                    <p className="text-sm text-gray-500">Faster contract completion</p>
                                </div>
                                <div className="border-l-[1px] border-gray-300 pl-3">
                                    <p className="text-5xl">200</p>
                                    <p className="text-sm text-gray-500">Hours of manual labor saved monthly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-0 mx-0 flex-col flex w-full sm:hidden ">
                <Swiper
                    preventClicks={true}
                    allowTouchMove={false}
                    slidesPerView={1.3}
                    modules={[Navigation]}
                    navigation={{ nextEl: '.nav2', prevEl: '.nav1' }}
                    className="rounded-lg w-full flex text-black"
                >
                    <SwiperSlide className="mr-3  gap-10 text-sm flex flex-col">
                        <div className="pb-3 w-full text-center text-4xl" >PRIMERICA</div>
                        <div className="p-10 mt-3 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
                            <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            <button className="text-blue-600 text-xs border-[1px] hover:border-[whitesmoke] p-3 rounded-lg hover:bg-violet-200">Read full customer story</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mr-3  gap-10 text-sm flex flex-col">
                        <div className="pb-3 w-full text-center text-4xl" >VESTWELL</div>
                        <div className="p-10 mt-3 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
                            <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            <button className="text-blue-600 text-xs border-[1px] hover:border-[whitesmoke] p-3 rounded-lg hover:bg-violet-200">Read full customer story</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mr-3  gap-10 text-sm flex flex-col">
                        <div className="pb-3 w-full text-center text-4xl" >VESTWELL</div>
                        <div className="p-10 mt-3 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
                            <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            <button className="text-blue-600 text-xs border-[1px] hover:border-[whitesmoke] p-3 rounded-lg hover:bg-violet-200">Read full customer story</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mr-3  gap-10 text-sm flex flex-col">
                        <div className="pb-3 w-full text-center text-4xl" >VESTWELL</div>
                        <div className="p-10 mt-3 flex flex-col gap-10 text-2xl w-full bg-[whitesmoke] rounded-lg ">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
                            <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/face.png"}></Image></div>
                            <button className="text-blue-600 text-xs border-[1px] hover:border-[whitesmoke] p-3 rounded-lg hover:bg-violet-200">Read full customer story</button>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className="flex mt-5 justify-end gap-10">
                    <button className="nav1">{"<"}</button>
                    <button className="nav2">{">"}</button>
                </div>
            </div>
        </div>

    )
}