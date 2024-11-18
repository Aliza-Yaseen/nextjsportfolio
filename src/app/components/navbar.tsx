// import Link from "next/link";

// export default function Navbar(){
//     return(
//         <section>
//             <div className="flex justify-around bg-[#F3F4F6] text-[#111827] py-10 pt-10">
//                 <div className=""><h1 className="text-2xl font-bold ">AY</h1></div>
//                 <div className="">
//                     <ul className="flex justify-around text-lg font-normal ">
//                         <li className="ml-5">
//                             <Link href="/home">Home</Link>
//                         </li>
//                         <li className="ml-5">
//                         <Link href="">About Me</Link>
//                         </li>
//                         <li className="ml-5">
//                         <Link href="/projects">Projects</Link>
//                         </li>
//                         <li className="ml-5">
//                         <Link href="">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section>
            <div className="flex flex-row justify-between items-center bg-[#F3F4F6] text-[#111827] py-6 md:py-10 px-4 md:px-10">
                <div className="text-2xl font-bold">AY</div>
                <button className="text-2xl md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`w-full md:w-auto md:flex ${menuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row justify-around text-lg font-normal space-y-4 md:space-y-0 md:space-x-5 mt-4 md:mt-0">
                        <li>
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Me</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
