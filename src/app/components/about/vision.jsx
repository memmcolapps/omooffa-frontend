import MaxContainer from "../common/maxcontainer";
import PlaceContentBesideImage from "../common/placeContentBesideImage";

const Vision = () => {
  const content = {
    title: "Our Vision",
    paragraph:
      "To empower Offa indigenes by providing a secure digital identity system that strenghtens the community, improves public services and promote transparency in governance.",
    btnText: "Help Shape the Future",
    image: "/about/unite.png",
    containerStyle: "flex-row-reverse",
  };
  return (
    <section className="bg-[#EFFFEE]">
      <MaxContainer>
        <div className="px-[7rem] sm:px-[2.5rem] max-w-[130rem] mx-auto pb-[10rem]">
          <PlaceContentBesideImage section={content} />
        </div>
      </MaxContainer>
    </section>
  );
};

export default Vision;
