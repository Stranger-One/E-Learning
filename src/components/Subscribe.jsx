import React from 'react'
import banner from '../assets/bg.png'
import Button from './Button'
import { FaBell } from "react-icons/fa";
import { motion } from 'framer-motion'



const Subscribe = () => {
  const bgImage = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center"

  }
  return (
    <section className="w-full h-[500px] p-4 md:p-10 relative overflow-x-hidden">
      <div style={bgImage} className="bgContainer w-full h-full absolute top-0 left-0 "></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once: false}}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}

        className="textContainer relative w-full h-full flex items-center justify-center flex-col text-center gap-4 ">
        <h2 className='text-4xl font-bold'>450k+ Student are learning from us</h2>
        <p className='text-lg leading-tight '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button >Subscribe Now <FaBell className='group-hover:animate-bounce' />
        </Button>
      </motion.div>

    </section>
  )
}

export default Subscribe