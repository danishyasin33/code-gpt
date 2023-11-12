import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-16 pb-16 pt-8 flex border-t-2 border-gray-400 justify-around md:justify-between">
            <img src="/logo.svg"></img>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col gap-4 font-sembold">
                    <Link href="#">Product</Link>
                    <Link href="#">Documentation</Link>
                    <Link href="#">Live Chat</Link>
                </div>
                <div className="flex flex-col gap-4 font-sembold">
                    <Link href="#">Company</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Pricing</Link>
                </div>
                <div className="flex flex-col gap-4 font-sembold">
                    <Link href="#">Help Center</Link>
                    <Link href="#">FAQs</Link>
                    <Link href="#">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;