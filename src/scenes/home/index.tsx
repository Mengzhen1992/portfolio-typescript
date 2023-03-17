import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types";
import Profile from "@/assets/profile-image.jpg";
import Github from "@/assets/github.png";
import Instagram from "@/assets/instagram.png";
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1205px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-0 py-10 mx-auto w-5/6">
        {/* IMAGE SECTION */}
        <div className="md:order-2 flex md:justify-end justify-center basis-4/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                <div className="relative z-0 ml-20 before:absolute before:-top-8 before:-left-8 before:w-full before:max-w-[600px] before:h-full before:border-2 before:border-gray-400 before:z-[-1]">
                    <img src={Profile} alt="profile" className="hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
                </div>
            ): (
                <img src={Profile} alt="profile" className="hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px]"/>
            )}
        </div >
        {/* MAIN SECTION */}
        <motion.div className="z-30 basis-2/5 mt-12 md:mt-32"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                /* the div must to be shown from 50% of it for this animation to run */
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0},
                }}
            >
                <p className="text-5xl z-10 text-center md:text-start">
                    Mengzhen {""}
                    <span className="xs: relative xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[42px] before:z-[-1]">
                    Liao
                    </span>
                </p>
                <p className="mt-10 mb-10 text-md text-center md:text-start">
                    "Don't just praise towering things. Plains and hills are just as immortal."   
                </p>
            </motion.div>
            {/* CALL TO ACTIONS */}
            <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                /* the div must to be shown from 50% of it for this animation to run */
                transition={{delay: 0.2, duration: 1}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0},
                }}
            >
                <AnchorLink
                    className="bg-gradient-rainblue rounded-sm py-3 px-7 font-semibold hover:text-white transition duration-500" 
                    onClick={()=> setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}
                >
                    Contact Me
                </AnchorLink>
                <AnchorLink
                    className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                    onClick={()=> setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}
                >
                    <div
                        className="bg-gray-20 hover:text-primary-300 transition duration-500 w-full h-full flex items-center justify-center px-10"
                    >
                        Let's talk
                    </div>
                </AnchorLink>
            </motion.div>
            {isAboveSmallScreens && (
                <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                /* the div must to be shown from 50% of it for this animation to run */
                transition={{delay: 0.4, duration: 1}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0},
                }}
                >
                    <div className="flex justify-center md:justify-start my-8 gap-12">
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://github.com/Mengzhen1992"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="github-link" src={Github} />
                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.instagram.com/mon__ki/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="instagram-link" src={Instagram} />
                        </a>
                    </div>
                </motion.div>   
            )}   
        </motion.div>
    </section>
  )
}

export default Home