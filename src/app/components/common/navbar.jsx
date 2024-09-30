'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxContainer from "./maxcontainer";
import { Button } from "../ui/button";
import Hamburger from "./hambuger";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathName = usePathname()
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

    useEffect(() => {
        setOpen(false)
    }, [pathName])
    const navItems = [
        {
            link: '/about',
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
        <nav className={`fixed z-[10] top-0 w-[100vw] py-[2.5rem] items-center ${pathName !== '/' ? 'bg-[#EFFFEE]' : 'bg-transparent'}`}>
            <MaxContainer>
                <div className="flex justify-between max-w-[130rem] mx-auto px-[7rem] sm:px-[2.5rem]">
                    <Link href={'/'} className={`${pathName.includes('/registration') ? 'sm:mx-auto' : 'sm:mx-0'}`}>
                        <Image
                            width={87}
                            height={37}
                            alt="logo"
                            className="w-[7rem]"
                            src={pathName !== '/' ? '/common/logo_ii.svg' : '/home/offa_logo.svg'}
                        />
                    </Link>
                    {!pathName.includes('/registration') && <ul className={`flex gap-[2rem] sm:flex-col sm:fixed sm:bg-[#002E20] transition-all duration-700 sm:pl-[2.5rem] sm:inset-0 sm:pt-[6.5rem] ${open ? 'sm:translate-x-0' : 'sm:translate-x-[100%]'}`}>
                        {navItems.map(item => <li className="" key={item.text}><NavItem navitem={item} /></li>)}
                    </ul>}

                    <Button asChild className='font-[700] bg-white text-[#003525] hover:bg-[#002E20] hover:text-white px-[2rem] py-[1.8rem] rounded-[.7rem] sm:hidden'>
                        <Link href={'/registration'}>Enroll Now!</Link>
                    </Button>
                    {!pathName.includes('/registration') && <Hamburger open={open} toggleNav={toggleNav} />}
                </div>
            </MaxContainer>
        </nav>
    );
}

export default Navbar;



const NavItem = ({ navitem }) => {
    const pathName = usePathname()
    return (
        <Button asChild
            variant='link'
            className={`font-[500] ${pathName == navitem.link
                ? 'text-[#002E20] sm:text-white font-[700]'
                : pathName !== '/' ? 'text-[#515E59]  sm:text-[#EFFFEE]'
                    : 'text-white'} `}>
            <Link href={navitem.link}>{navitem.text}</Link>
        </Button>
    )
}