import { Button } from "../components/ui/button";
import Link from "next/link";
const Registration = () => {
    const categories  = [
        {
            name: 'Register with your NIN.',
            link: '/registration/HASNIN',
        },
        {
            name: 'Register with Parent’s NIN.',
            link: '/registration/PARENTNIN',
        },
        {
            name: 'Register for the Deceased.',
            link: '/registration/DECEASED',
        },
        {
            name: 'No NIN at all',
            link: '/registration/NONIN',
        },
    ]
    return (
        <section className="bg-[#EFFFEE] h-[100vh] sm:pb-[7rem] sm:w-full sm:pt-[12rem] sm:px-[2.5rem] sm:h-auto grid place-content-center">
            <div className="">
                <p className="text-center font-[700] text-[#07200B] mb-[2rem]">Choose your Category</p>
                <div className="max-w-[65rem] sm:w-full border gap-[2rem] grid grid-cols-2 sm:grid-cols-1">
                   {categories.map(category => <Card key={category.name} category={category} />)}
                </div>
            </div>
        </section>
    );
}

export default Registration;


const Card = ({ category }) => {
    return (
        <div className="bg-[#002E20] flex flex-col px-[2rem] pt-[2.5rem] pb-[2rem]  w-[30rem] h-[17rem] rounded-[1rem]">
            <p className={`w-[12rem] text-[#D6FFD3] text-[1.6rem] font-[600]`}>{category.name}</p>
            <Button asChild className='mt-auto hover:bg-[#EFFFEE] w-full py-[2rem] bg-[#B0FFAB] text-[#002E20] font-[700] rounded-[.5rem]'>
                <Link href={category.link} className="">Continue</Link>
            </Button>
        </div>
    )
}