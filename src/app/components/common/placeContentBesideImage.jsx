import Image from "next/image";
import { Button } from "../ui/button";

const PlaceContentBesideImage = ({ section }) => {
    return (
        <div className={`text-[#002E20]  flex sm:flex-col ${section.containerStyle} items-center justify-between`}>
            <div className="max-w-[40rem]">
                <h2 className="sub_header_i sm:text-center mb-[1rem]">{section.title}</h2>
                <p className="mb-[1rem] sm:w-[32rem] sm:text-center">{section.paragraph}</p>
                <Button className='bg-[#003525] sm:hidden mt-[1rem] px-[4rem] py-[2rem] rounded-[.7rem]'>{section.btnText}</Button>
            </div>
            <Image
                src={section.image}
                width={500}
                height={500}
                alt="finger print"
                className="w-[50rem] sm:mt-[3rem]"
            />
             <Button className='bg-[#003525] sm:flex hidden mt-[3rem] px-[3rem] py-[2.2rem] text-[#C8FFC4] rounded-[.7rem]'>{section.btnText}</Button>
        </div>
    );
}

export default PlaceContentBesideImage;