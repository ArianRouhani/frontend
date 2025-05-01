import { useState } from "react";

const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9-]/g, '');
}
export default function GetName() {
    const [inputValue1, setInputValue1]= useState('');
    const sigchange1 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue1(e.target.value)
    }
    const [inputValue2, setInputValue2]= useState('');
    const sigchange2 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue2(e.target.value)
    }
    return (
        <div className="z-50 absolute w-full top-0 lg:p-[150px] justify-center flex bg-[whitesmoke] text-black">
            <div className="w-full lg:w-[70%] flex">
                <div className="w-full lg:w-1/2 px-5 py-20 lg:p-10 bg-white">
                    <p className="pb-3">1/3</p>
                    <p className="text-4xl font-bold pb-3">Let&apos;s start</p>
                    <p className="text-lg pb-16">Let&apos;s get the basics. Enter your info below. </p>
                    <form action="" className=" flex flex-col ">
                        <div className="flex gap-2">
                            <div className=" relative border-[1px] border-gray-500 px-3 ">
                                <div className=" relative mt-5">
                                    <input
                                        type="text"
                                        id="firstname"
                                        className="peer h-10 text-xl w-full  text-black placeholder-transparent outline-none "
                                        placeholder=" "
                                        value={inputValue1}
                                        onChange={sigchange1}
                                        required
                                    />
                                    <label
                                        htmlFor="firstname"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-0 peer-focus:-top-3.5  peer-focus:text-xs"
                                    >
                                        First Name
                                    </label>
                                </div>
                            </div>
                            <div className=" relative border-[1px] border-gray-500 px-3">
                                <div className=" relative mt-5">
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="peer h-10 text-xl w-full text-black placeholder-transparent outline-none "
                                        placeholder=" "
                                        required
                                        value={inputValue2}
                                        onChange={sigchange2}
                                    />
                                    <label
                                        htmlFor="lastname"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-0 peer-focus:-top-3.5  peer-focus:text-xs"
                                    >
                                        Last Name
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="mt-3 mb-6 relative border-[1px] border-gray-500 px-3">
                            <div className=" relative mt-5">
                                <input
                                    type="tel"
                                    id="phonenum"
                                    className="peer h-10 text-xl w-full text-black placeholder-transparent outline-none "
                                    placeholder=" "
                                    onKeyUp={handleKeyup}
                                    required
                                />
                                <label
                                    htmlFor="phonenum"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:top-0 peer-focus:-top-3.5  peer-focus:text-xs"
                                >
                                    Phone Number
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="submit" className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white p-3" value="Next" />
                        </div>
                    </form>
                </div>
                <div className="w-1/2 lg:flex bg-gray-300 hidden justify-end">
                    <div className="bg-white w-[70%] h-[90%] flex flex-col gap-2 pl-16 justify-start">
                        <div className="bg-gray-300 w-full h-[5px] rounded-bl-xs"></div>
                        <div className="bg-gray-300 w-full h-[8px] rounded-l-xs mb-10"></div>
                        <div className="bg-gray-300 w-full h-[8px] rounded-l-xs"></div>
                        <div className="bg-gray-300 w-full h-[8px] rounded-l-xs"></div>
                        <div className="bg-gray-300 w-full h-[8px] rounded-l-xs mb-10"></div>
                        <div className="bg-gray-300 w-[40%] h-[8px] rounded-xs"></div>
                        <div className="border-2 border-gray-300 w-[90%] h-[30px] rounded-xs mb-5"></div>
                        <div className="bg-gray-300 w-[50%] h-[8px] rounded-xs"></div>
                        <div className="border-2 border-gray-300 w-[90%] h-[30px] rounded-xs mb-10"></div>
                        <div>
                            <div className="flex text-xl gap-1" id="Signature"><p >{inputValue1 || "signature"}</p><p>{inputValue2}</p></div>
                            <div className=" bg-gray-300 w-[90%] h-[1px] rounded-xs"></div>
                            <p className="font-bold text-xs">Signature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}