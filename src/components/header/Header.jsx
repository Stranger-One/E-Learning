import React, { useState } from 'react'
import Button from '../Button'
import { MdMenu } from "react-icons/md";

const Header = () => {
    const [isNavOpen, setisNavOpen] = useState(false)
    const navItems = [
        {
            id: "1",
            title: "Home",
            link: "#"
        },
        {
            id: "2",
            title: "Services",
            link: "#"
        },
        {
            id: "3",
            title: "About Us",
            link: "#"
        },
        {
            id: "4",
            title: "Our Team",
            link: "#"
        },
        {
            id: "5",
            title: "Contact Us",
            link: "#"
        },
    ]

    return (
        <header className='w-full h-14 flex justify-between px-4 md:px-10 items-center bg-transparent relative z-[30]'>
            <div className="">
                <a href="#" className='font-bold text-lg lg:text-2xl'>The Coding Jurney</a>
            </div>
            <nav className={`absolute top-14 ${isNavOpen ? 'right-0' : 'right-[-100%]'} right-0 flex flex-col items-center justify-start w-3/4 h-[600px]  bg-white/50 backdrop-blur-sm rounded-xl p-10 duration-200 lg:static lg:flex-row lg:w-fit lg:bg-transparent lg:h-full lg:justify-between `}>
                <ul className='flex flex-col lg:flex-row relative items-center gap-6 mb-4 lg:mb-0 lg:mr-4 '>
                    {navItems.map((item) => (
                        <li key={item.id} className='hover:text-primary hover:border-b-2 border-primary duration-100 group'><a href={item.link} className='text-[17px] text-dark font-semibold group-hover:text-primary duration-100'>{item.title}</a></li>
                    ))}
                </ul>
                <Button>Sign in</Button>
            </nav>
            <div className="lg:hidden">
                <MdMenu onClick={() => setisNavOpen((toggle)=> !toggle)} className='text-2xl'/>
            </div>
        </header>
    )
}

export default Header