import Image from "next/image";
import MaxContainer from "../common/maxcontainer";
import PlaceContentBesideImage from "../common/placeContentBesideImage";
const Mission = () => {
  const content = {
    title: "Our Mission",
    paragraph:
      "A united ọ́ffà, where all indigenes are recognized, connected, and contribute to the development of a stronger, more prosperous community.",
    btnText: "Join the Mission",
    image: "/about/tumb.png",
  };
  return (
    <section className="bg-[#EFFFEE]">
      <MaxContainer>
        <Image
          src="/about/line_about_i.png"
          width={2206}
          height={1417}
          alt="line"
          className="absolute top-0 left-0 right-0 z-[0]"
        />
        <div className="relative px-[7rem] sm:px-[2.5rem] max-w-[130rem] mx-auto pt-[20rem] sm:pt-[10rem] pb-[10rem]">
          <PlaceContentBesideImage section={content} />
        </div>
      </MaxContainer>
    </section>
  );
};

export default Mission;
