import React from 'react'
import education from '../assets/education.png'
import { FaBookReader } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { motion } from 'framer-motion'

const Platform = () => {
    const items = [
        {
            id: "1",
            title: "10,000+ Courses",
            icon: <FaBookReader className='text-3xl' />,
            delay: 0.3
        },
        {
            id: "2",
            title: "Expert Instruction",
            icon: <TbUserCheck className='text-3xl' />,
            delay: 0.33
        },
        {
            id: "3",
            title: "Lifetime Access",
            icon: <FaRegClock className='text-3xl' />,
            delay: 0.35
        },
    ]
    return (
        <section className="w-full p-4 md:p-10 grid grid-cols-1 lg:grid-cols-2 items-center overflow-x-hidden">
            <div className="imageContainer w-full flex item-center justify-center">
                <motion.img
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }}
                    src={education} alt="" className='w-full md:w-[70%] drop-shadow' />
            </div>
            <div className="textContainer mt-6 ">
                <motion.h2
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className='capitalize text-4xl font-bold text-center'>the world's leading online learning platform</motion.h2>
                <div className="container w-full mt-6 flex flex-col gap-6">
                    {items.map((item) => (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            key={item.id} className="w-full rounded-xl flex items-center gap-6 py-6 px-10 bg-light ">
                            {item.icon}
                            <h2 className='text-2xl'>{item.title} </h2>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Platform