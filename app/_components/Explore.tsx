import { useState } from 'react';
export default function Explore() {
    const [selectedOption, setSelectedOption] = useState<'first' | 'second' | 'third'>('first');
    return (

        <div className="bg-white text-black px-5 lg:px-20 py-20 gap-10 w-full text-3xl sm:text-4xl flex flex-col justify-center items-center">
            <p className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 text-transparent bg-clip-text text-center">AI-powered agreement management</p>
            <p className="text-lg sm:text-2xl text-center text-gray-700">Analyze agreements with AI, sign documents electronically, and automate workflows with Docusign Intelligent Agreement Management (IAM).</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg p-4 rounded-lg">Explore Docusign IAM</button>
            <div className="flex gap-1 sm:gap-5">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="options"
                        value="first"
                        checked={selectedOption === 'first'}
                        onChange={() => setSelectedOption('first')}
                        className="h-0 w-0 opacity-0"
                    />
                    <div className={`border border-gray-300 hover:bg-purple-100 text-xs sm:texs-sm font-bold p-3 rounded-lg ${selectedOption !== 'first' ? 'bg-white' : 'bg-purple-300'}`}>Featured</div>
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
                    <div className={`border border-gray-300 hover:bg-purple-100 text-xs sm:texs-sm font-bold p-3 rounded-lg ${selectedOption !== 'second' ? 'bg-white' : 'bg-purple-300'}`} >Sales</div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="options"
                        value="first"
                        checked={selectedOption === 'third'}
                        onChange={() => setSelectedOption('third')}
                        className="h-0 w-0 opacity-0"
                    />
                    <div className={`border border-gray-300 hover:bg-purple-100 text-xs sm:texs-sm font-bold p-3 rounded-lg ${selectedOption !== 'third' ? 'bg-white' : 'bg-purple-300'}`}>Customer Experience</div>
                </label>
            </div >

            <div className={`p-10 flex flex-col gap-5 bg-purple-100 rounded-lg ${selectedOption !== 'first' ? 'hidden' : ''}`}>
                <p className='text-3xl'>Search, manage, and analyze agreements with AI</p>
                <p className='text-lg text-gray-500'>Use AI to find agreements and terms quickly, receive agreement reminders, and access powerful insights from a central repository.</p>
                <div><button>
                    <div className="peer mt-4 text-blue-700 text-lg font-bold ">Explore Navigator {">"}</div>
                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                </button></div>
            </div>

            <div className={`p-10 flex flex-col gap-5 bg-purple-100 rounded-lg ${selectedOption !== 'second' ? 'hidden' : ''}`}>
                <p className='text-3xl'>Send, sign, and track documents</p>
                <p className='text-lg text-gray-500'>Get signatures from anywhere, using almost any device. Finalize agreements faster with collaborative commenting, shared templates, and delivery in the apps your signers already use.</p>
                <div><button>
                    <div className="peer mt-4 text-blue-700 text-lg font-bold ">Explore eSignature {">"}</div>
                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                </button></div>
            </div>

            <div className={`p-10 flex flex-col gap-5 bg-purple-100 rounded-lg ${selectedOption !== 'third' ? 'hidden' : ''}`}>
                <p className='text-3xl'>Streamline your customer onboarding</p>
                <p className='text-lg text-gray-500'>Eliminate onboarding chaos. Simplify workflows to get customers up and running quickly with a platform encompassing all essential tools for optimal customer experience.</p>
                <div><button>
                    <div className="peer mt-4 text-blue-700 text-lg font-bold ">Explore IAM for CX {">"}</div>
                    <div className="w-0 h-[1px] bg-blue-700 peer-hover:w-full"></div>
                </button></div>
            </div>
        </div >
    )
}