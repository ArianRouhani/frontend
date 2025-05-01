import Link from "next/link"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Recommended() {
    return (
        <div className="w-full bg-gradient-to-t from-[whitesmoke] to-white px-2 lg:px-4">
            <div className="bg-[whitesmoke] px-3 lg:px-16 py-20 text-black flex rounded-lg flex-col gap-10 ">
                <p className="text-2xl sm:text-4xl  flex flex-col">Recommended for you</p>

                <div className="flex flex-col-reverse">
                    <div className='custom-pagination2 gap-1 justify-center mt-4 flex'></div>
                    <Swiper
                        allowTouchMove={false}
                        preventClicks={true}
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: '.custom-pagination2' }}
                        className="w-full rounded-lg flex text-white"

                    >

                        <SwiperSlide className="bg-violet-950 rounded-l-lg gap-10 text-2xl px-10 py-20 flex flex-col">
                            <div className="flex flex-col gap-5 sm:w-1/2">
                                <p className="text-lg ">Docusign Community</p>
                                <p className="text-3xl">The smartest way to navigate agreements</p>
                                <p className="text-sm text-gray-400">Ask questions. Swap ideas. Stay ahead. All inside the Community.</p>
                                <div><button className="bg-white inline-block hover:bg-gray-200 text-violet-950 text-lg p-4 rounded-lg">Dive in now</button></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-full bg-violet-950 rounded-r-lg gap-10 text-2xl px-10 py-20 flex flex-col">
                            <div className="flex flex-col gap-5 sm:w-1/2">
                                <p className="text-lg ">Docusign Community</p>
                                <p className="text-3xl">The smartest way to navigate agreements</p>
                                <p className="text-sm text-gray-400">Ask questions. Swap ideas. Stay ahead. All inside the Community.</p>
                                <div><button className="bg-white inline-block hover:bg-gray-200 text-violet-950 text-lg p-4 rounded-lg">Dive in now</button></div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="sm:flex hidden w-full gap-12">
                    <Link href={""} className="w-1/3 gap-3 flex flex-col">
                        <div className="overflow-hidden rounded-lg"><Image alt="" width={1000} height={1000} className=" hover:scale-110 " src={"/images/blog.webp"}></Image></div>
                        <div className="flex gap-3 text-sm">
                            <p className="font-bold hover:underline">Blog</p>
                            <p className="text-gray-500">Published Apr 17, 2025</p>
                        </div>
                        <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                    </Link>
                    <Link href={""} className="w-1/3 gap-3 flex flex-col">
                        <div className="overflow-hidden rounded-lg"><Image alt="" width={1000} height={1000} className=" hover:scale-110 " src={"/images/blog.webp"}></Image></div>
                        <div className="flex gap-3 text-sm">
                            <p className="font-bold hover:underline">Blog</p>
                            <p className="text-gray-500">Published Apr 17, 2025</p>
                        </div>
                        <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                    </Link>
                    <Link href={""} className="w-1/3 gap-3 flex flex-col">
                        <div className="overflow-hidden rounded-lg"><Image alt="" width={1000} height={1000} className=" hover:scale-110 " src={"/images/blog.webp"}></Image></div>
                        <div className="flex gap-3 text-sm">
                            <p className="font-bold hover:underline">Blog</p>
                            <p className="text-gray-500">Published Apr 17, 2025</p>
                        </div>
                        <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                    </Link>
                </div>
                <div className="flex sm:hidden ">

                    <Swiper
                        allowTouchMove={true}
                        slidesPerView={1.3}
                        loop={true}
                        className="w-full rounded-lg flex text-black"
                    >

                        <SwiperSlide className="mr-5 gap-10 text-2xl flex flex-col">
                            <Link href={""} className=" gap-3 flex flex-col">
                                <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/blog.webp"}></Image></div>
                                <div className="flex gap-3 text-sm">
                                    <p className="font-bold hover:underline">Blog</p>
                                    <p className="text-gray-500">Published Apr 17, 2025</p>
                                </div>
                                <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mr-5 gap-10 text-2xl flex flex-col">
                            <Link href={""} className=" gap-3 flex flex-col">
                                <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/blog.webp"}></Image></div>
                                <div className="flex gap-3 text-sm">
                                    <p className="font-bold hover:underline">Blog</p>
                                    <p className="text-gray-500">Published Apr 17, 2025</p>
                                </div>
                                <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mr-5 gap-10 text-2xl flex flex-col">
                            <Link href={""} className=" gap-3 flex flex-col">
                                <div className="overflow-hidden w-full rounded-lg"><Image alt="" width={1000} height={1000} src={"/images/blog.webp"}></Image></div>
                                <div className="flex gap-3 text-sm">
                                    <p className="font-bold hover:underline">Blog</p>
                                    <p className="text-gray-500">Published Apr 17, 2025</p>
                                </div>
                                <p className=" hover:underline text-lg ">Momentum25 NYC: Where Customer Innovation Meets the Future of Agreements</p>
                            </Link>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
    )
}