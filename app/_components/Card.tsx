export default function Card() {
    return (
        <div className="bg-[whitesmoke] sm:px-5 pb-10 ">
            <div className="bg-blue-700 text-white text-2xl sm:text-4xl font-[600px] p-5 py-10 lg:p-30 rounded-lg gap-5 flex shadow-xl/20">
                <div className="w-full sm:w-1/2 flex flex-col gap-10">
                    <p >Discover what&apos;s new with Docusign IAM or start with eSignature for free</p>
                    <div className="w-full flex flex-col sm:flex-row gap-5">
                        <button className="bg-white hover:bg-gray-200 text-blue-700 text-sm p-4 rounded-lg">View Plans and Pricing </button>
                        <button className="bg-white/0 hover:bg-white/30  text-white border-[1px] border-white text-sm p-4 rounded-lg">View Plans and Pricing </button>
                    </div>
                </div>
                <div className="sm:w-1/2"></div>
            </div>
        </div>
    )
}