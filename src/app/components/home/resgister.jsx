import MaxContainer from "../common/maxcontainer";


const Register = () => {
    const cards = [
        {
            step: 'Step 1',
            title: 'Registration',
            cardTitle: 'Register online by providing your personal details, including:',
            cardContent: [
                <p className="p_ii inline">Full name</p>,
                <p className="p_ii inline">Date of birth</p>,
                <p className="p_ii inline">Contact details</p>, 
                <p className="p_ii inline">Lineage information (AGBO ILE)</p>,
            ]
        },
        {
            step: 'Step 2',
            title: 'Verification',
            cardTitle: 'Register online by providing your personal details, including:',
            cardContent: [
                <div className="w-[80%] inline-block align-top">
                    <p className="p_ii font-[700]">Local Administrative Checks</p>
                    <p className="p_ii">In-person verification by a community representative in Offa may be required to confirm your lineage.</p>
                </div>,
                <div className="w-[80%] inline-block align-top">
                    <p className="p_ii font-[700]">Document Verification</p>
                    <p className="p_ii">We verify your submitted ID documents to ensure accuracy.</p>
                </div>,
            ]
        },
        {
            step: 'Step 3',
            title: 'Card Issuance',
            cardTitle: 'Once your registration is approved, you will receive your Omo Offa Nimi ID Card with:',
            cardContent: [
                <p className="p_ii inline">Unique identification number</p>,
                <p className="p_ii inline">Contact details</p>,
                <p className="p_ii inline-block align-top w-[90%]">Your card will be processed and delivered to your registered address, even if you are in the diaspora.</p>,
            ]
        },
    ]
    return (
        <section className="bg-[#EFFFEE] sm:px-[2.5rem]">
            <div className="pt-[8rem]">
                <MaxContainer>
                    <div className="">
                        <h2 className="sub_header_i text-[#002D1F] text-center">How to Register</h2>

                        <div className="max-w-[100rem] flex flex-wrap gap-[5rem] mt-[5rem]  justify-center mx-auto">
                            {cards.map(card => <Card key={card.step} card={card} />)}
                        </div>
                    </div>
                </MaxContainer>
            </div>
        </section>
    );
}

export default Register;


const Card = ({ card }) => {
    return (
        <div className="text-[#0B9D00] flex flex-col">
            <div className="mb-[1.5rem]">
                <p className="text-[1.2rem] text-center font-[700] text-[#0B9D00]">{card.step}</p>
                <h2 className="text-[1.7rem] text-center text-[#002D1F] font-[700]">{card.title}</h2>
            </div>
            <div className="text-[#DDFFDA] bg-[#013626] max-w-[42rem] h-[32rem] relative overflow-hidden px-[2rem] py-[3rem] rounded-[1.5rem]">
                <img src="/home/line_iii.png" className="absolute sm:bottom-[0] sm:right-[0] sm:inset-auto inset-0" alt="line" />
                <div className="relative z-[1]">
                    <p className="p_ii font-[700]">{card.cardTitle}</p>
                    <ul className="mt-[2rem] list-disc text-start list-inside  marker:align-top">
                        {card.cardContent.map((item, i) => (<li key={i} className="mb-[.7rem] marker:text-[#30D472]">{item}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}