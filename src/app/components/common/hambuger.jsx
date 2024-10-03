import { usePathname } from "next/navigation";


const Hamburger = ({ toggleNav, open, scrollY }) => {
    const pathName = usePathname()
    return (
        <div
            className={`overflow-hidden transition-all duration-500 ease-out sm:flex flex-col items-center justify-between h-[1.7rem] relative z-20 hidden  ${open ? "w-[3rem]" : "w-[2.5rem]"
                }`} onClick={toggleNav}>
            <div
                className={`h-[.18rem] ${pathName != '/' || scrollY > 100 ? open ?  'bg-[#EFFFEE]' : 'bg-[#002E20]' : 'bg-white'} w-[100%] origin-right transition-all duration-500 ease-out ${open ? "-rotate-45 w-[2.7rem]" : ""
                    }`}
            ></div>
            <div
                className={`h-[.18rem] ${pathName != '/' || scrollY > 100 ? open ?  'bg-[#EFFFEE]' : 'bg-[#002E20]' : 'bg-white'} w-[100%] origin-right transition-all duration-500 ease-out ${open ? "translate-x-[8rem] translate-y-[8rem]" : ""
                    }`}
            ></div>
            <div
                className={`h-[.18rem] ${pathName != '/' || scrollY > 100 ? open ?  'bg-[#EFFFEE]' :  'bg-[#002E20]' : 'bg-white'} w-[100%] origin-right transition-all duration-500 ease-out ${open ? "rotate-45 w-[2.7rem]" : ""
                    }`}
            ></div>
        </div>
    );
}

export default Hamburger;