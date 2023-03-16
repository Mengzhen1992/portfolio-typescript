import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1205px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <h1 className="font-dancingscript text-2xl">MZL</h1>
                {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (<div className={`${flexBetween} gap-16 text-base`}>
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
                </div>) : (
                    <button className="rounded-full bg-gray-100 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6"/>
                    </button>
                )}
            </div>
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
        )}
    </nav>
  )
}

export default Navbar