import MaxContainer from "../common/maxcontainer";
import Image from "next/image";
import { Button } from "../ui/button";
const Info = () => {
    const processes = [
        'Channel a portion of transaction fees into community development projects, such as schools, elderly homes, and free bus services for seniors.',
        'We also Facilitate easy and secure registration for all Offa indigenes. Issue biometric identity cards with financial interfaces for easy transactions.'
    ]
    return (
        <section className="bg-[#EFFFEE] text-[#003525]">
            <MaxContainer>
                <div className="py-[9rem] max-w-[130rem] mx-auto px-[7rem] sm:px-[2.5rem]">
                    <h2 className="sub_header_i text-center">What we do</h2>
                    <div className="flex sm:flex-col-reverse justify-between mt-[6rem] sm:mt-[2rem]">
                        <div className="sm:flex  flex-col">
                            <Image
                                src='/home/indigene_card.png'
                                width={629}
                                height={360}
                                className="w-[60rem] sm:mt-[3rem]"
                                alt="offa indigene card"
                            />
                            <Button className='px-[2.8rem] sm:flex self-center hidden rounded-[.8rem] py-[2rem] bg-[#041D00] ml-[2.5rem]'>Join Us Now</Button>
                        </div>
                        <div className="flex flex-col gap-[4rem]">
                            {processes.map((process, i) => <Process key={i} process={process} />)}
                            <Button className='px-[2.8rem] sm:hidden rounded-[.8rem] py-[2rem] bg-[#041D00] self-start ml-[2.5rem]'>Join Us Now</Button>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Info;


const Process = ({ process }) => {
    return (
        <div className="w-[45rem]  sm:w-[100%] flex items-start gap-x-[1rem]">
            <img src="/home/bullet.svg" alt="bullet" className="w-[1.8rem] mt-[.5rem] aspect-square" />
            <p className="p_i w-[32rem]  text-[#355249] font-[500]">{process}</p>
        </div>
    )
}