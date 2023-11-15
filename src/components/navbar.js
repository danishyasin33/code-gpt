
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex w-100 items-center justify-between  font-medium text-sm">
            <Link href="/">
                <img src="/logo.svg" width={70} />
            </Link>
            <a>
            </a>
            <div className="hidden md:flex grow justify-center gap-6">
                <Link href="#firstSec">Features</Link>
                <Link href="#secondSec">Pricing</Link>
                <Link href="#thirdSec">How It Works</Link>
            </div>
            <div className="flex gap-4">
                <Link href='/dashboard' className="border-2 px-5 rounded-full border-purple-500 text-purple-600 hover:bg-slate-700 hover:border-slate-700 hover:text-white">
                    Dashboard
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
