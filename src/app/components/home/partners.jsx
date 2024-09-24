import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";
import Image from "next/image";

const Partners = () => {
    return (
        <section className="">
            <div className="">
                <MaxContainer>
                    <img src="/home/line_ii.png" alt="line" className="absolute z-[-1] w-[100%] sm:hidden  inset-0" />
                    <div className=" text-[#B9D5C2] max-w-[130rem] mx-auto px-[7rem] sm:px-[2.5rem] py-[3rem] relative overflow-hidden">
                        <div className="flex sm:flex-col items-center justify-between">
                            <div className="">
                                <h2 className="sub_header_i">Our Partners</h2>
                                <p className="p_i font-[400] mt-[1rem] mb-[4rem] max-w-[50rem]">We collaborate with local and international stakeholders, including traditional rulers, government bodies, and private organizations, to make this vision a reality. Together, we aim to inspire similar projects across other local governments in Nigeria.</p>
                                <Button className='px-[2.8rem] rounded-[.8rem] py-[2rem] bg-[#B0FFAB] text-[#003525] font-[700]'>Contact Us</Button>
                            </div>
                            <Image
                                src='/home/unity.png'
                                width={500}
                                height={489}
                                className="w-[60rem] sm:mt-[3rem]"
                                alt="unity"
                            />
                        </div>
                    </div>
                </MaxContainer>
            </div>
        </section>
    );
}

export default Partners;