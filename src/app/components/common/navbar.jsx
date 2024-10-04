"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxContainer from "./maxcontainer";
import { Button } from "../ui/button";
import Hamburger from "./hambuger";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const pathName = usePathname();

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Prevent scrolling when mobile menu is open
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

  // Close menu on path change
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  // Listen to scroll to change background color and trigger text color change
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setScrollY(currentScrollY); // Change background and text color on scroll
      } else {
        setScrollY(0); // Reset to transparent and default colors when near top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      link: "/about",
      text: "About Us",
    },
    {
      link: "/registration/tracking",
      text: "Registration Status",
    },
    {
      link: "/FAQs",
      text: "FAQs",
    },
  ];

  return (
    <nav
      className={`fixed z-[10] top-0 w-[100vw] py-[2.5rem] items-center transition-all duration-500 ease-in-out ${
        scrollY > 100 || pathName !== "/" ? "bg-[#EFFFEE]" : "bg-transparent"
      }`}
    >
      <MaxContainer>
        <div className="flex justify-between max-w-[130rem] mx-auto px-[7rem] sm:px-[2.5rem]">
          <Link
            href={"/"}
            className={`${
              pathName.includes("/registration") ? "sm:mx-auto" : "sm:mx-0"
            }`}
          >
            <Image
              width={87}
              height={37}
              alt="logo"
              className="w-[7rem]"
              src={
                pathName !== "/" || scrollY > 100
                  ? "/common/logo_ii.svg"
                  : "/home/offa_logo.svg"
              }
            />
          </Link>

          {/* Only show nav items if not on the registration page */}
          {!pathName.includes("/registration") && (
            <ul
              className={`flex gap-[2rem] sm:flex-col sm:fixed sm:bg-[#002E20] transition-all duration-700 sm:pl-[2.5rem] sm:inset-0 sm:pt-[6.5rem] ${
                open ? "sm:translate-x-0" : "sm:translate-x-[100%]"
              }`}
            >
              {navItems.map((item) => (
                <li className="" key={item.text}>
                  <NavItem navitem={item} isScrolled={scrollY > 100} />
                </li>
              ))}
            </ul>
          )}

          <Button
            asChild
            className="font-[700] bg-white text-[#003525] hover:bg-[#002E20] hover:text-white px-[2rem] py-[1.8rem] rounded-[.7rem] sm:hidden"
          >
            <Link href={"/registration"}>Enroll Now!</Link>
          </Button>

          {/* Hamburger for mobile menu */}
          {!pathName.includes("/registration") && (
            <Hamburger open={open} scrollY={scrollY} toggleNav={toggleNav} />
          )}
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;

const NavItem = ({ navitem, isScrolled }) => {
  const pathName = usePathname();

  return (
    <Button
      asChild
      variant="link"
      className={`font-[500] ${
        pathName == navitem.link
          ? "text-[#002E20] sm:text-white font-[700]"
          : isScrolled
          ? "text-[#002E20] sm:text-[#EFFFEE]"
          : pathName !== "/"
          ? "text-[#515E59]  sm:text-[#EFFFEE]"
          : "text-white"
      }`}
    >
      <Link href={navitem.link}>{navitem.text}</Link>
    </Button>
  );
};
