import React from 'react'
import Button from './Button'
import commImage from '../assets/banner.png'
import { motion } from 'framer-motion'

const Community = () => {
  return (
    <section className="w-full lg:h-screen p-4 md:p-10 grid grid-cols-1 gap-10 md:grid-cols-2 overflow-x-hidden">
      <div className="textContainer flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 text-center md:text-start ">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className='text-4xl lg:text-5xl font-bold capitalize'>join our community to start your jurney</motion.h2>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        viewport={{once: false}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-lg font-semibold leading-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati autem voluptates quisquam sit numquam possimus.</motion.p>
        <motion.div
        initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{duration: 0.6, ease: "easeInOut"}}
        className='w-full flex justify-center lg:justify-start'
        >
          <Button >
            Join Now
          </Button>
        </motion.div>
      </div>
      <div className="imageContainer w-full ">
        <motion.img 
        initial={{x: 50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{duration: 0.6, ease: "easeInOut"}}
        src={commImage} alt="" className='w-full' />
      </div>
    </section>
  )
}

export default Community