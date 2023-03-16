import { SelectedPage } from '@/shared/types'
import {motion} from "framer-motion"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section id="projects className='w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}        
        >
            {/* HEADINGS */}
            <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
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

        </motion.div>
    </section>
  )
}

export default Projects