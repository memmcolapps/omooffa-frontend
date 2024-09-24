import MaxContainer from "../components/common/maxcontainer";
import Image from "next/image";

const Sponsors = () => {
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                <div className="px-[7rem] pb-[20rem]">
                    <h2 className="sub_header_i text-[#002E20] text-center mb-[3rem]">Our Sponsors</h2>
                    <div className="max-w-[105rem] flex mx-auto flex-wrap justify-between">
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
        <div className="bg-[#002E20] max-w-[35rem] rounded-[1.5rem] py-[3rem] px-[4rem] w-fit">
            <Image
                src={'/about/sponsor_1.png'}
                width={251}
                className="w-[25rem]"
                height={251}
                alt="ceo  image"
            />
            <div className="mt-[2.5rem]">
                <p className="text-[#D6FFD3] mb-[1rem]">Proff. James Alao Lekan</p>
                <p className="p_ii text-[#B9D5C2]">CEO, Al-Jazeera</p>
            </div>
        </div>
    )
}