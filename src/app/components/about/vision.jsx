import MaxContainer from "../common/maxcontainer";
import PlaceContentBesideImage from "../common/placeContentBesideImage";

const Vision = () => {
    const content = {
        title: 'Our Vision',
        paragraph: 'A united ọ́ffà, where all indigenes are recognized, connected, and contribute to the development of a stronger, more prosperous community.',
        btnText: 'Help Shape the Future',
        image: '/about/unite.png',
        containerStyle: 'flex-row-reverse'
    }
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                <div className="px-[7rem] sm:px-[2.5rem] max-w-[130rem] mx-auto pb-[10rem]">
                    <PlaceContentBesideImage section={content} />
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Vision;