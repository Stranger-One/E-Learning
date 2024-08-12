import React from 'react'
import Header from './header/Header'
import Button from './Button'
import { FaArrowRight } from "react-icons/fa";
import heroImage from '../assets/hero.png'
import bgImage from '../assets/blob.svg'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="w-full bg-light overflow-x-hidden">
            <Header />
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px] content-center px-4 md:px10 pt-20 md:pt-0">
                <div className="textContainer h-full flex flex-col justify-center z-[10]">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='text-4xl font-semibold leading-snug text-center md:text-left'>Let's Learn to build a <span className='text-secondary'>website</span> for your bussiness</motion.h1>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="mt-10 w-full flex justify-center md:justify-start">
                        <Button>
                            Get Started
                            <FaArrowRight className='group-hover:translate-x-1 group-hover:-rotate-45 origin-center duration-300' />
                        </Button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                    className="imageContainer h-full relative overflow-x-hidden ">
                    <img src={heroImage} alt="Hero image" className='w-full drop-shadow relative z-[10] ' />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero