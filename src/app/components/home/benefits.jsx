import MaxContainer from '../../components/common/maxcontainer';
import Image from 'next/image';
import { Button } from '../ui/button';


const Benefits = () => {
    const benefits = [
        {
            icon: '/home/car.svg',
            text: 'Free Transportation for the elderly',
            style: 'w-[22rem] sm:w-[15rem]'
        },
        {
            icon: '/home/building.svg',
            text: 'Participation in Community Projects',
            style: 'w-[12rem] sm:w-[10rem]'
        },
        {
            icon: '/home/gift.svg',
            text: 'Exclusive Discounts and Services',
            style: 'w-[12rem]'
        },
        {
            icon: '/home/people.svg',
            text: 'A portion of transaction fees goes to community development.',
            style: 'w-[12rem]'
        },
    ]
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                <div className="px-[7rem] pt-[10rem] max-w-[130rem] mx-auto pb-[15rem] text-[#002D1F]">
                    <div className="flex flex-col">
                        <h2 className="sub_header_i text-center mb-[5rem]">Benefits</h2>
                        <div className="flex sm:flex-col sm:gap-[3rem] justify-between max-w-[120rem]">
                            {benefits.map((benefit, i) => <Benefit key={i} benefit={benefit} />)}
                        </div>
                        <Button className='mx-auto mt-[5rem] px-[2.5rem] py-[2rem] bg-[#041D00] text-[#C8FFC4] rounded-[.7rem]'>Register Now!</Button>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Benefits;


const Benefit = ({ benefit }) => {
    return (
        <div className="">
            <Image
                src={benefit.icon}
                className={`${benefit.style} mx-auto`}
                width={300}
                height={300}
                alt='benefit icon'
            />
            <p className="p_ii w-[15rem] sm:w-[20rem] font-[600] mt-[3rem] mx-auto text-center">{benefit.text}</p>
        </div>
    )
}