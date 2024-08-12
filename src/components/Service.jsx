import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import { AiOutlineDesktop } from "react-icons/ai";
import { LuSmile } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbActivityHeartbeat } from "react-icons/tb";
import {motion} from 'framer-motion'


const Service = () => {
    const cards = [
        {
            id: "1",
            title: 'Web Development',
            icon: <TbWorldWww className='text-5xl' />,
            link: '#',
            delay: 0.3
        },
        {
            id: "2",
            title: 'Mobile Development',
            icon: <CiMobile1 className='text-5xl' />,
            link: '#',
            delay: 0.33 
        },
        {
            id: "3",
            title: 'Software Development',
            icon: <AiOutlineDesktop className='text-5xl' />,
            link: '#',
            delay: 0.35
        },
        {
            id: "4",
            title: 'Saticefied Clients',
            icon: <LuSmile className='text-5xl' />,
            link: '#',
            delay: 0.38
        },
        {
            id: "5",
            title: 'SEO Optimization',
            icon: <TbActivityHeartbeat className='text-5xl'  />,
            link: '#',
            delay: 0.4 
        },
        {
            id: "6",
            title: '24/7 Support',
            icon: <TfiHeadphoneAlt className='text-5xl'  />,
            link: '#',
            delay: 0.43
        },
    ]
  return (
    <section className=" w-full h-fit  p-4 md:p-10 overflow-hidden">
        <h1 className='text-3xl font-bold '>Servise we provide</h1>
        <div className="cardContainer mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cards.map((card)=>(
                <motion.div 
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.3, ease: "easeIn", delay: card.delay}}
                viewport={{once: false}}
                key={card.id} className='w-full h-[250px] bg-light flex flex-col items-center justify-center gap-6 rounded-xl hover:bg-white hover:shadow duration-300 p-4  cursor-pointer'>
                    {card.icon}
                    <h2 className='text-2xl font-semibold text-center'>{card.title} </h2>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Service