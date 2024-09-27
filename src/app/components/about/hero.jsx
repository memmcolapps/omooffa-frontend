import MaxContainer from "../common/maxcontainer";
import Image from "next/image";
const Hero = () => {
    return (
        <section className="pt-[9rem] sm:pt-[12rem] pb-[10rem] bg-[#EFFFEE] text-[#002E20]">
            <MaxContainer>
                <div className="flex sm:flex-col sm:w-auto px-[7rem] sm:px-[2.5rem] max-w-[130rem] mx-auto gap-x-[10rem] items-center">
                    <div className="max-w-[70rem]">
                        <h1 className="text-[4rem] sm:text-[2.7rem] max-w-[40rem] font-[700]">The Omo ọ́ffà Nimi Project</h1>
                        <p className="p_i max-w-[50rem] text-[#3C5D53] mt-[2rem] font-[500]">The Project is a groundbreaking initiative aimed at registering and uniting indigenes of the ọ́ffà community, wherever they are in the world.</p>
                        <p className="p_i max-w-[50rem] text-[#3C5D53] font-[500]">Our mission is to create a sustainable system that not only connects our people but also contributes directly to community development projects through a transparent and accountable process.</p>
                    </div>
                    <Image
                        src='/about/borehole.png'
                        width={478}
                        className='w-[50rem] sm:mt-[2rem]'
                        height={445}
                        alt="bore hole"
                    />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Hero;