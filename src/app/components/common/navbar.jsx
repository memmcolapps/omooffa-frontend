'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxContainer from "./maxcontainer";
import { Button } from "../ui/button";
import Hamburger from "./hambuger";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleNav = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    useEffect(() => {
        if (open) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [open]);
    const navItems = [
        {
            link: '',
            text: 'About Us',
        },
        {
            link: '',
            text: 'Registration Status',
        },
        {
            link: '',
            text: 'FAQs',
        },
    ]
    return (
        <nav className="fixed z-[10] w-[100vw] py-[2.5rem] items-center">
            <MaxContainer>
                <div className="flex justify-between px-[7rem] sm:px-[2.5rem]">
                    <Link href={'#'}>
                        <Image
                            width={87}
                            height={37}
                            alt="logo"
                            className="w-[7rem]"
                            src={'/home/offa_logo.svg'}
                        />
                    </Link>
                    <ul className={`flex gap-[2rem] sm:flex-col sm:fixed sm:bg-[#002E20] transition-all duration-700 sm:pl-[2.5rem] sm:inset-0 sm:pt-[6.5rem] ${open ? 'sm:translate-x-0' : 'sm:translate-x-[100%]'}`}>
                        {navItems.map(item => <li className="" key={item.text}><NavItem navitem={item} /></li>)}
                    </ul>

                    <Button className='font-[700] bg-white text-[#003525] px-[2rem] py-[1.8rem] rounded-[.7rem] sm:hidden'>Contact Us</Button>
                    <Hamburger open={open} toggleNav={toggleNav} />
                </div>
            </MaxContainer>
        </nav>
    );
}

export default Navbar;



const NavItem = ({ navitem }) => {
    return (
        <Button asChild variant='link' className='font-[500] text-white'>
            <Link href={navitem.link}>{navitem.text}</Link>
        </Button>
    )
}