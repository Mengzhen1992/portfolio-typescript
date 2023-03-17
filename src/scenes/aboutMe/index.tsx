import { SelectedPage, ImageType } from '@/shared/types'
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"
import image4 from "@/assets/image4.jpg"
import image5 from "@/assets/image5.jpg"
import image6 from "@/assets/image6.jpg"
import {motion} from "framer-motion"
import HText from '@/shared/HText'
import Image from "./Image";

const photographs: Array<ImageType> = [
    {
        date: "06.2022",
        location: "Partnachklamm, Garmisch",
        image: image1,
    },
    {
        date: "03.2022",
        location: "Kuhfluchtwasserfaelle, Farchant",
        image: image2,
    },
    {
        date: "06.2022",
        location: "Partnachklamm, Garmisch",
        image: image3,
    },
    {
        date: "05.2022",
        location: "Koenigsee",
        image: image4,
    },
    {
        date: "06.2022",
        location: "Partnachklamm, Garmisch",
        image: image5,
    },
    {
        date: "05.2022",
        location: "Koenigsee",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='aboutme' className='w-full bg-primary-100 py-28'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}        
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                /* the div must to be shown from 50% of it for this animation to run */
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0},
                }}
            >
                <div className='md:w-full'>
                    <HText>ABOUT ME</HText>
                    <p className='pt-8 pb-3 text-lg'>
                    Hi, I'm Mengzhen Liao currently living in Munich and looking to shift into frontend development.  
                    </p>
                    <p className='py-3 text-lg'>
                    I am an environmental engineer graduated from Kassel University, but I have always had a passion for coding and web development. One of the things that drew me to frontend development is the opportunity to combine creativity and problem-solving. I am excited about the prospect of using my design skills to create engaging user interfaces that are not only visually appealing but also functional and intuitive.    
                    </p>
                    <p className='py-3 text-lg'>
                    I have already begun to build my knowledge of web development languages such as HTML, CSS, JavaScript and framework react. Last year I successfully completed the intensive and very practical Bootcamp Web Development from neue fische, gained a lot of practical experience and have been actively seeking opportunities to further develop my skills through online courses, tutorials and personal projects.
                    </p>
                    <p className='py-3 text-lg'>
                    Other than coding, I spend some of my free time taking photos. I love capturing the beauty of the world around us and telling stories through my photos. Below are some photos I took last year.   
                    </p>
                </div>
            </motion.div>
            <div className='mx-auto w-5/6 mt-10 h-[550px] overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2000px] whitespace-nowrap'>
                    {photographs.map((item: ImageType, index) => (
                        <Image 
                            key={`${item.image}-${index}`}
                            date={item.date}
                            location={item.location}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;