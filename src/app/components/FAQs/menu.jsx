import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FaqMenu() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-[100rem] px-[7rem] sm:px-[2.5rem] mx-auto  text-[#DDFFDA]"
    >
      <AccordionItem
        value="item-1"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline ">
          How do i register?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Avoid those pesky notifications while presenting maybe this can have
            a screenshot of you getting a message from your friend or something.
            And this is going to be the FAQ.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          How do i register?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Avoid those pesky notifications while presenting maybe this can have
            a screenshot of you getting a message from your friend or something.
            And this is going to be the FAQ.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          How do i register?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Avoid those pesky notifications while presenting maybe this can have
            a screenshot of you getting a message from your friend or something.
            And this is going to be the FAQ.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          How do i register?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Avoid those pesky notifications while presenting maybe this can have
            a screenshot of you getting a message from your friend or something.
            And this is going to be the FAQ.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
