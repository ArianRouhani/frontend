import Link from "next/link"
export default function Footer() {
    return (
        <div className="bg-[whitesmoke] text-sm text-black">
            <div className="hidden sm:flex justify-between p-5 lg:p-20 gap-10">
                <div className="gap-6 flex flex-col">
                    <p className=" font-bold">APPLICATIONS</p>
                    <div className="gap-3 flex flex-col">
                        <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                    </div>
                </div>
                <div className="gap-6 flex flex-col">
                    <p className=" font-bold">APPLICATIONS</p>
                    <div className="gap-3 flex flex-col">
                        <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                    </div>
                </div>
                <div className="gap-6 flex flex-col">
                    <p className=" font-bold">APPLICATIONS</p>
                    <div className="gap-3 flex flex-col">
                        <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                    </div>
                </div>
                <div className="gap-6 flex flex-col">
                    <p className=" font-bold">APPLICATIONS</p>
                    <div className="gap-3 flex flex-col">
                        <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                    </div>
                </div>
                <div className="gap-6 flex flex-col">
                    <p className=" font-bold">APPLICATIONS</p>
                    <div className="gap-3 flex flex-col">
                        <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex justify-between p-5 lg:p-20 gap-10">
                <div className="gap-10 flex flex-col">
                    <div className="gap-6 flex flex-col">
                        <p className=" font-bold">APPLICATIONS</p>
                        <div className="gap-3 flex flex-col">
                            <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                        </div>
                    </div>
                    <div className="gap-6 flex flex-col">
                        <p className=" font-bold">APPLICATIONS</p>
                        <div className="gap-3 flex flex-col">
                            <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                        </div>
                    </div>
                    <div className="gap-6 flex flex-col">
                        <p className=" font-bold">APPLICATIONS</p>
                        <div className="gap-3 flex flex-col">
                            <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                        </div>
                    </div>
                </div>
                <div className="gap-10 flex flex-col">
                    <div className="gap-6 flex flex-col">
                        <p className=" font-bold">APPLICATIONS</p>
                        <div className="gap-3 flex flex-col">
                            <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                        </div>
                    </div>
                    <div className="gap-6 flex flex-col">
                        <p className=" font-bold">APPLICATIONS</p>
                        <div className="gap-3 flex flex-col">
                            <Link href={""} className="hover:underline">Intelligent Agreement Management</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-gray-300 px-5 lg:px-20 py-5 sm:py-10">
                Links
            </div>
            <div className="bg-[whitesmoke] px-5 lg:px-20 py-5 sm:py-10 text-gray-600 text-xs flex justify-center sm:justify-between">
                <div className="hidden sm:flex gap-10">
                    <Link href={""} className=" hover:underline">Terms of Use</Link>
                    <Link href={""} className="hover:underline">Privacy Notice</Link>
                </div>
                <p>© Almubdieuntech 2025</p>
            </div>
        </div>
    )
}