import {motion} from "framer-motion"

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

type Props = {
    /* title: string; */
    name: string;
    tech: string;
    link: string;
    image: string;
}

const Project = ({name, tech, link,image}:Props)=> {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-50 z-30 flex flex-col justify-center items-center text-center p-16`

    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <a href={link} target="_blank" rel="noreferrer">
                    <p className='text-xl font-semibold hover:text-primary-300'>{name}</p>    
                </a>
                <p className='mt-7'>{tech}</p>
            </div>
            <img src={image} alt={name} />
        </motion.div>
    )
}

export default Project