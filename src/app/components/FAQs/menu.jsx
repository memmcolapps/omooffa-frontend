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
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          Who retains the Ownership of the the data or will it be available for
          marketing purposes or a database that could be commercialized?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            The data belongs to the data subject who will exercise control over
            as to his rights under the privacy law, while the association serve
            as a Data controller and processor in compliance with the data
            privacy law in Nigeria. The rights of the data subject includes
            rights to erasure, modifications and lawful processing. The data
            will only be used for the purpose of the association and not
            commercial bases. The LGA will only access the data through the
            association.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          Are we compliant with the NDPR regulations?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Yes it will be in accordance with the Nigerian Data protection law
            2023. Data protection Officer DPO has been employed by the
            association.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          There's already criticisms that we have too many biometric data
          sources in Nigeria, from passport to NIN to BVN to Voters Register
          etc, why another layer?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            All the data of BVN et al; are linked to NIN and we will also
            leverage ours on NIN. We are currently processing approval for an
            API access. Note that NIMC will not give us data to keep or process
            but we can only verify through the approved channel. The NIN's data
            is foundational while ours is service-based for verification and
            planning purposes only.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          Since it's going to be linked with the NIN, why don't we do the
          reverse acquisition, engage with the NIMC, and get the data for forks
          that chose Offa as their place of origin? Such will already be 50% of
          the entire populace and we can slice and dice and add etc
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            The NIN issued by NIMC is foundational hence, cannot apply reverse
            service. Our role is to verify the applicant's NIN as KYC for the
            specific community's digital registration.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          Would it require a permanent infrastructure like an office to be
          established for continuous updating, dead, newly born, etc? Definition
          of Omo Offa via marriage etc
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            Yes, it is permanent and sustainable because the project is solely
            owned by the community for generations yet unborn. The OMO OFFA NI
            MI management has provided a state of the art edifice with the
            latest digital infrastructures within Offa Local Government
            Secretariat to serve as National and worldwide headquarters to cater
            for the project. This continuity of the project is demonstrated by
            the Stakeholders Consensus Agreement.
          </p>
          <p className="p_i">
            Indigeneship by marriage refers to a legal marriage between two
            spouses of which either is an Indigene of Offa by parental
            offspring. This may be confirmed by the Standing Committee upon
            application for such status.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-6"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          How do we deal with downside eg it caps our population and limits any
          room for adjustment for political purposes or census?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            This Community digital identity project is not aimed at overhead
            count for political or population purpose rather to enrol all
            eligible indigenes to deliver on the project mandate.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-7"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          Also, is it OMO OFFA NI MI or OFFA NI MI?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            The Current Affairs Commission (CAC) the regulatory body recognizes
            and registers the name "OMO OFFA NI MI DEVELOPMENT UNION" as
            required by law. Therefore, all correspondence and trademark remains
            "OMO OFFA NI MI". Please note that the indigeneship has other
            categories of membership by the following: (1) By Marriage (2) By
            Residency (3) By adoption (4) By Birth.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-8"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          What's the value add? What's the incentive?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            The Community Stakeholders Agreement was signed by all the
            community's interests and critical stakeholders in tandem with the
            mandate of the project. The card holder may enjoy free or discounted
            rebates in Infrastructural benefits and commercial transactions
            through collaboration with the local government administration. The
            elderly and children may also enjoy free medical treatment in
            selected primary health facilities.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-9"
        className="bg-[#002E20] mt-[2.5rem] p-[4rem]"
      >
        <AccordionTrigger className="sub_header_ii hover:no-underline">
          How secure is the data? What are the data protection measures in place
          to safeguard it?
        </AccordionTrigger>
        <AccordionContent className="mt-[1rem] mb-[1.3rem] leading-normal">
          <p className="p_i">
            The digital identity project is basically aimed at securing movement
            of registered indigenes in the related community or nation. The
            accurate identification of indigenes would make it harder for
            criminals to hide their identities within the community. The
            security agencies can better monitor and track individuals with a
            reliable database in place thereby preventing identity theft and
            impersonation. A unified community identity system streamline
            identification processes, enabling security agencies to respond more
            quickly and effectively to security threats.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
