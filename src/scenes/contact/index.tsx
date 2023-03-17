import {useForm} from "react-hook-form";
import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion"
import HText from '@/shared/HText'
import contact from "@/assets/contact.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({setSelectedPage}: Props) => {
  const inputStyles = `mb-8 w-full rounded-lg bg-gray-20 px-5 py-3 placeholder-gray-400`;
  const {register, trigger, formState: {errors}} = useForm()
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid){
        e.preventDefault();
    }
  }
  return (
    <section id="contact" className="w-full bg-primary-100 py-28">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            {/* HEADER */}
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0},
                }}
            >
                <HText>Contact Me</HText>
            </motion.div>
            {/* FORM AND IMAGE*/}
            <div className="mx-auto w-5/6 mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0},
                }}
                >
                    <form action="https://formsubmit.co/e357fed2e2ed1be3459663deedd69caa" target="_blank" onSubmit={onSubmit} method="POST"
                    >
                        <input className={inputStyles} type="text" placeholder="NAME" {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input className={inputStyles} type="text" placeholder="EMAIL" {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "invalid email address."}
                            </p>
                        )}

                        <textarea className={inputStyles} rows={4} cols={50} placeholder="MESSAGE" {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}/>
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                            </p>
                        )}
                        <button type="submit" className="mt-5 rounded-lg bg-gradient-rainblue px-16 py-3 transition duration-500 hover:text-white hover:text-semibold">
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{delay: 0.5, duration: 1}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0},
                }}>
                    <div className="w-full border-">
                        <img className="w-full rounded-xl opacity-70" src={contact} alt="contact-me-page-graphic" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact