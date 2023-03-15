import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";


type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                {/* <img src={Logo} alt="logo" /> */}
                <h1 className="font-dancingscript text-2xl">M</h1>
                {/* RIGHT SIDE */}
                <div className={`${flexBetween} gap-16 text-base`}>
                    <Link page="Home" 
                    selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}
                    />
                    <Link page="About Me" 
                    selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}
                    />
                    <Link page="Projects" 
                    selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact" 
                    selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar