import { Link } from 'react-router-dom'
import { useState } from 'react'

export const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 px-3.5  sm:px-12">
            <div className="">
                <div className="relative flex h-16 items-center">
                    <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => setMobileMenu(!mobileMenu)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-7 in-aria-expanded:hidden">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-2 justify-start gap-x-10 w-full sm:items-stretch">
                        <div className="flex items-center mr-5">
                            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto mx-2.5 sm:ml-0" />
                            <Link to="/home" className=" text-white font-bold">MySympTrac</Link>
                        </div>
                        <div className="hidden lg:ml-6 sm:block">
                            <div className="flex gap-x-10 justify-between w-full">
                            <Link to="/home" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Home</Link>
                            <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
                            <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <Link to="/login" className="rounded-md bg-[#6366f1] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4f46e5]">Sign Up</Link>
                    </div>
                </div>
                </div>

                <div id="mobile-menu" className={`${mobileMenu ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="space-y-1 px-2 pt-2 pb-5">
                        <Link to="/home" className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">Home</Link>
                        <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
                        <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
                    </div>
                </div>
        </nav>
    )
}