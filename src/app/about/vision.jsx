import MaxContainer from "../components/common/maxcontainer";
import PlaceContentBesideImage from "../components/common/placeContentBesideImage";

const Vision = () => {
    const content = {
        title: 'Our Vision',
        paragraph: 'To empower ọ́ffà indigenes by providing a secure, digital identity system that strengthens the community, improves public services, & promotes transparency in governance.',
        btnText: 'Help Shape the Future',
        image: '/about/unite.png',
        containerStyle: 'flex-row-reverse'
    }
    return (
        <section className="bg-[#EFFFEE]">
            <MaxContainer>
                <div className="px-[7rem] max-w-[130rem] mx-auto pb-[10rem]">
                    <PlaceContentBesideImage section={content} />
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Vision;

