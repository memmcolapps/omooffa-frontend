"use client";
import MaxContainer from "./maxcontainer";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Footer = () => {
  const pathName = usePathname();
  const social_icon = [
    {
      link: "",
      img: "/common/x.svg",
    },
    {
      link: "",
      img: "/common/wa.svg",
    },
    {
      link: "",
      img: "/common/ig.svg",
    },
    {
      link: "",
      img: "/common/in.svg",
    },
  ];
  return (
    <>
      {!pathName.includes("/registration") && (
        <footer className="py-[4rem]">
          <MaxContainer>
            <div className="max-w-[130rem] px-[7rem] sm:px-[2.5rem] mx-auto">
              <div className="flex justify-between sm:flex-col">
                <Image
                  src="/common/logo_col.svg"
                  width={88}
                  className="w-[6rem]"
                  height={130}
                  alt="logo"
                />

                <div className="sm:mt-[6rem]">
                  <div className="flex sm:justify-between gap-[3rem]">
                    <div className="">
                      <h4 className="text-[2rem] font-[600] text-[#DDFFDA]">
                        Contact
                      </h4>
                      <ul className="">
                        <li className="p_ii text-[#A5C3AF] my-[1.5rem]">
                          info@omooffanimi.com{" "}
                        </li>
                        <li className="p_ii text-[#A5C3AF]">
                          +234 809 999 1689{" "}
                        </li>
                        <li className="p_ii text-[#A5C3AF]">
                          +234 805 312 1071{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="">
                      <h4 className="text-[2rem] font-[600] text-[#DDFFDA]">
                        Others
                      </h4>
                      <ul className="mt-[1.5rem] flex flex-col gap-y-[1.5rem]">
                        <Link className="" href={"/FAQs"}>
                          <Button
                            variant="link"
                            className="p-[0] self-start text-[#A5C3AF] p_li font-[400]"
                          >
                            FAQs
                            <ArrowUpRight
                              className="text-[#DDFFDA]"
                              size={15}
                              strokeWidth={0.5}
                            />
                          </Button>
                        </Link>
                        <Link className="" href={"/privacy"}>
                          <Button
                            variant="link"
                            className="p-[0] text-[#A5C3AF] p_li font-[400]"
                          >
                            DATA PRIVACY POLICY
                            <ArrowUpRight
                              className="text-[#DDFFDA]"
                              size={15}
                              strokeWidth={0.5}
                            />
                          </Button>
                        </Link>
                        <Link className="" href={"/protection"}>
                          <Button
                            variant="link"
                            className="p-[0] text-[#A5C3AF] p_li font-[400]"
                          >
                            DATA STORAGE
                            <ArrowUpRight
                              className="text-[#DDFFDA]"
                              size={15}
                              strokeWidth={0.5}
                            />
                          </Button>
                        </Link>
                        <Link className="" href={"/cookies"}>
                          <Button
                            variant="link"
                            className="p-[0] text-[#A5C3AF] p_li font-[400]"
                          >
                            COOKIES
                            <ArrowUpRight
                              className="text-[#DDFFDA]"
                              size={15}
                              strokeWidth={0.5}
                            />
                          </Button>
                        </Link>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-[2rem] mt-[2rem] sm:mt-[-2rem] w-fit">
                    {social_icon.map((icon, i) => (
                      <SocialIcon key={i} icon={icon} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MaxContainer>
        </footer>
      )}
    </>
  );
};

export default Footer;

const SocialIcon = ({ icon }) => {
  return (
    <Link href={icon.link}>
      <Image src={icon.img} width={20} height={20} alt="social icon" />
    </Link>
  );
};
