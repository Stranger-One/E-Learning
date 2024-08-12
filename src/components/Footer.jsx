import React, { useRef } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { motion } from 'framer-motion'



const Footer = () => {
    const inputRef = useRef(null)
    const handleGo = () => {
        inputRef.current.value = ''
    };
    return (
        <section className="w-full flex flex-wrap justify-between gap-6 p-4 md:p-10 bg-light overflow-x-hidden">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                viewport={{ once: false }}
                className="md:w-1/2 lg:w-1/3">
                <h2 className='capitalize text-4xl font-bold mb-4'>the coding jurney</h2>
                <p className='text-zinc-400 text-lg '>TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.</p>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                viewport={{ once: false }}
                className="flex flex-col">
                <h2 className='text-4xl font-bold mb-4'>Courses</h2>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>Web Development</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>Software Development</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>App Development</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>E-Learning</a>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                viewport={{ once: false }}
                className="flex flex-col">
                <h2 className='text-4xl font-bold mb-4'>Links</h2>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>Home</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>Services</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>About</a>
                <a href='#' className='text-zinc-400 text-lg hover:text-secondary'>Contact</a>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                viewport={{ once: false }}
                className="">
                <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2>
                <div className='w-92 bg-white rounded-md grid grid-cols-[auto_70px] overflow-hidden'>
                    <input ref={inputRef} type="email" placeholder='Enter your email' className='py-2 px-6 text-xl border-none outline-none' />
                    <button onClick={handleGo} className='bg-primary hover:bg-secondary h-full px-6 text-lg font-semibold'>Go</button>
                </div>
                <div className="icons mt-6 flex gap-4">
                    <FaWhatsapp className='text-2xl text-zinc-600  duration-200 cursor-pointer hover:text-secondary' />
                    <CiInstagram className='text-2xl text-zinc-600  duration-200 cursor-pointer hover:text-secondary' />
                    <TbWorldWww className='text-2xl text-zinc-600  duration-200 cursor-pointer hover:text-secondary' />
                    <CiYoutube className='text-2xl text-zinc-600  duration-200 cursor-pointer hover:text-secondary' />

                </div>

            </motion.div>
        </section>
    )
}

export default Footer