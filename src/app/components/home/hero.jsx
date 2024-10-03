import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
    return (
        <section className="bg-[#002E20] relative">
            <MaxContainer>
                    <Image
                        src={'/home/peacock.png'}
                        width={1225}
                        height={845}
                        alt="bg-image"
                        className="w-[100%] sm:hidden opacity-[.9] inset-0 pointer-events-none z-[0] h-[100%] absolute"
                    />
                     <Image
                        src={'/common/peacock_sm.png'}
                        width={390}
                        height={650}
                        alt="bg-image"
                        className="w-[100%] hidden sm:block opacity-[.9] inset-0 pointer-events-none z-[0] h-[100%] absolute"
                    />
                <div className="relative flex px-[10rem] flex-col pt-[10rem] sm:pt-[4rem]">
                    <div className="self-center relative  z-[1] mt-[8rem] mb-[19rem] sm:mb-[14rem] w-[55rem] sm:w-[30rem]">
                        <h1 className="font-[700] text-[5rem] leading-[5.5rem] sm:text-[3rem] text-center  text-[#FAFFFA]">Building a brighter future for the ọ́ffà Community</h1>
                        <p className="text-center text-[#FAFFFA] max-w-[43rem] mx-auto text-[1.8rem] sm:text-[1.5rem] sm:font-[400] mt-[1rem]">Designed to strengthen the bond between Offa indigenes, both at home and abroad, while creating a more connected and prosperous community.</p>

                        <div className="flex mt-[4rem] items-center justify-center gap-[1rem]">
                            <Button
                                className='font-[700] hover:bg-[#002E20] hover:text-white px-[2rem] py-[1.8rem] bg-white text-[#023727]'
                                asChild>
                                <Link className="" href={'/registration'}>Enroll Now</Link>
                            </Button>
                            <Button className='font-[700] py-[1.8rem] hover:bg-[#002E20] hover:text-white px-[3.5rem] bg-[#B0FFAB] text-[#003525]'> Registration Status</Button>
                        </div>
                    </div>

                </div>
            </MaxContainer>
        </section>
    );
}

export default Hero;