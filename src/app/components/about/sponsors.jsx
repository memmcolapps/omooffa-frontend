import Image from "next/image";
import MaxContainer from "../common/maxcontainer";

const Sponsors = () => {
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                <div className="px-[7rem] sm:px-[2.5rem] pb-[20rem] sm:pb-[10rem]">
                    <h2 className="sub_header_i text-[#002E20] text-center mb-[3rem]">Our Sponsors</h2>
                    <div className="max-w-[105rem] flex mx-auto flex-wrap sm:gap-y-[2rem] justify-between">
                        {Array(3).fill(null).map((_, index) => (<Card key={index} />))}
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Sponsors;


const Card = () => {
    return (
        <div className="bg-[#002E20] max-w-[35rem] sm:mx-auto rounded-[1.5rem] py-[3rem] px-[4rem] w-fit">
            <Image
                src={'/about/sponsor_1.png'}
                width={251}
                className="w-[25rem] sm:w-[13rem] sm:mx-auto"
                height={251}
                alt="ceo  image"
            />
            <div className="mt-[2.5rem]">
                <p className="text-[#D6FFD3] sm:text-[1.5rem] mb-[1rem] sm:mb-[.5rem]">Proff. James Alao Lekan</p>
                <p className="p_ii text-[#B9D5C2]">CEO, Al-Jazeera</p>
            </div>
        </div>
    )
}