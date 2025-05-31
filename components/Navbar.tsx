import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"

export default function Navbar(){

    return(
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap 2.5 cursor-pointer">
                    <Image
                    src="/images/logo.svg" alt="logo" width={46} height={44}>
                    </Image>
                </div>
            </Link>
            <div className="flex items-center gap-8">
            {/* <Link href="/">Home</Link>
            <Link href="/companion">Learning Companions</Link>
            <Link href="/my-journey">My Journey</Link> */}
            <NavItems/>
            <Link href="/sign-in">Sign In</Link>
            </div>
        </nav>
    )
}