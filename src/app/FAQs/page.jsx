import MaxContainer from "../components/common/maxcontainer";
import { FaqMenu } from "../components/FAQs/menu";

const FAQs = () => {
  return (
    <section className="pt-[9rem] sm:pt-[12rem] pb-[10rem] bg-[#EFFFEE] text-[#002E20]">
      <MaxContainer>
        <p className="text-[4rem] sm:text-[2.7rem] font-[800] mb-[1rem] text-center">
          FAQs
        </p>
        <FaqMenu />
      </MaxContainer>
    </section>
  );
};

export default FAQs;
