import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";
import Image from "next/image";
const Impact = () => {
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                    <img src="/home/line_i.png" alt="line" className="w-[100%] top-[-50rem] sm:top-[20rem] h-[118rem] sm:h-[30rem] inset-0 absolute" />
                <div className="pt-[5rem] relative px-[7rem] sm:px-[2.5rem] max-w-[130rem] mx-auto overflow-hidden text-[#355249]">
                    <div className="flex sm:flex-col items-center justify-between relative overflow-hidden">
                        <div className="w-[50rem] sm:w-auto">
                            <h2 className="sub_header_i mb-[1rem] sm:text-center">Our Impact</h2>
                            <p className="p_i font-[500] w-[43rem] sm:w-auto sm:text-center">By enrolling, you help shape the planning of our community’s infrastructure, education, and healthcare systems.</p>
                            <p className="my-[2.5rem] sm:my-[1rem] p_i font-[500] w-[43rem] sm:text-center sm:w-[100%]">You'll receive your official <span className="font-[700]">Omo ọ́ffà Nimi</span> ID Card, which provides access to exclusive community benefits and supports the development of essential projects, including schools, elderly care, and free transport services for seniors.</p>
                            <Button className='px-[2.8rem] sm:hidden rounded-[.8rem] py-[2rem] bg-[#041D00]'>Learn More</Button>
                        </div>

                        <Image
                            src='/home/fetch_water.png'
                            width={638}
                            className="w-[75rem]"
                            height={558}
                            alt="fetch water"
                        />
                         <Button className='px-[2.8rem] sm:self-center rounded-[.8rem] hidden sm:flex py-[2rem] bg-[#041D00]'>Learn More</Button>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Impact;