import Image from "next/image";
import { Button } from "../ui/button";

const PlaceContentBesideImage = ({ section }) => {
    return (
        <div className={`text-[#002E20]  flex ${section.containerStyle} items-center justify-between`}>
            <div className="max-w-[40rem]">
                <h2 className="sub_header_i mb-[1rem]">{section.title}</h2>
                <p className="mb-[1rem]">{section.paragraph}</p>
                <Button className='bg-[#003525] mt-[1rem] px-[4rem] py-[2rem] rounded-[.7rem]'>{section.btnText}</Button>
            </div>
            <Image
                src={section.image}
                width={500}
                height={500}
                alt="finger print"
                className="w-[50rem]"
            />
        </div>
    );
}

export default PlaceContentBesideImage;