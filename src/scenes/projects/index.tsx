import { SelectedPage, ProjectType } from '@/shared/types'
import {motion} from "framer-motion"
import HText from '@/shared/HText'
import Project from '@/scenes/projects/Project';
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.5}
    }
};

const projects: Array<ProjectType> = [
    {
        name: "Portfolio",
        tech: "Tech Stack: React, TypeScript, Tailwind CSS, Framer-Motion, Vite",
        link: "https://github.com/Mengzhen1992/capstone-project",
        image: project1,  
    },
    {
        name: "Tico-easy task & time management",
        tech: "Tech Stack: Next.js, React, styled-components, MongoDB, Mongoose, Jest, Next-auth",
        link: "https://github.com/Mengzhen1992/capstone-project",
        image: project2, 
    },
    {
        name: "React and Morty",
        tech: "Tech Stack: React Vecel",
        link: "https://github.com/Mengzhen1992/react-and-morty",
        image: project3, 
    }
]  

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section id="projects" className="mx-auto w-full py-28 bg-gray-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}        
        >
            {/* HEADINGS */}
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity:0, y: -50},
                    visible: {opacity:1, y: 0},
                }}
            >
                <HText>PROJECTS</HText>
            </motion.div>
            {/* PROJECTS */}
            <div className='flex justify-center mt-20'>
                <motion.div
                    className='sm:grid sm:grid-cols-3 w-5/6 gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    variants={container}
                >
                    {
                        projects.map((item:ProjectType, index) => (
                            <Project 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            tech={item.tech}
                            link={item.link}
                            image={item.image}
                            />
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects