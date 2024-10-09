"use client";
import { Printer } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/app/components/ui/form";
import { ToastContainer } from "react-toastify";
import useUserInfo from "@/app/hooks/useUserInfo";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  trackingId: z.string().min(1, "Tracking ID is required"),
  password: z.string().min(1, "Password is required"),
});

const Tracking = () => {
  const { getUserInfo, loading, data } = useUserInfo();
  return (
    <section className="bg-[#EFFFEE] min-h-[100vh] sm:px-[2.5rem]">
      <ToastContainer />
      {data.message ? (
        <OffaNimiForm data={data.user} />
      ) : (
        <TrackInput data={data} loading={loading} getUserInfo={getUserInfo} />
      )}
    </section>
  );
};

export default Tracking;

const TrackInput = ({ data, loading, getUserInfo }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trackingId: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = (values) => {
    const { trackingId, password } = values;
    getUserInfo(trackingId, password);
  };

  return (
    <div className="mx-auto w-fit sm:w-auto sm:pt-[12rem] pt-[15rem]">
      <p className="font-[800] text-[2rem] text-[#07200B] text-center mb-[1.5rem]">
        Track Progress
      </p>
      <div className="p-[3.5rem] custom bg-[#013122] rounded-[1rem] w-[50rem] sm:w-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="trackingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.2rem] text-[#DDFFDA]">
                    Tracking ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="text"
                      placeholder="Enter Tracking ID"
                      className="border font-[600] placeholder:text-[#B6B9B8] text-black bg-white placeholder:font-[400] h-[3.7rem] text-[1.3rem]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-[1.5rem] relative">
                  <FormLabel className="text-[1.2rem] text-[#DDFFDA]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter Password"
                        className="border font-[600] placeholder:text-[#B6B9B8] text-black bg-white placeholder:font-[400] h-[3.7rem] text-[1.3rem] pr-[3rem]"
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <EyeOff className="w-[2rem] text-black" />
                        ) : (
                          <Eye className="w-[2rem] text-black" />
                        )}
                      </span>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              required
              disabled={loading || !form.formState.isValid}
              className="w-full mt-[2.8rem] py-[2rem] hover:bg-[#DDFFDA] font-[700] rounded-[.5rem] bg-[#B0FFAB] text-[#013626]"
            >
              Track Progress
              {loading && (
                <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

const OffaNimiForm = ({ data }) => {
  return (
    <div className="pt-[12rem] pb-[5rem] sm:w-auto mx-auto w-[69rem]">
      <p className="text-center text-[#07200B] mb-[2rem] font-[700]">
        Offa Nimi Form
      </p>
      <div className="bg-white text-black rounded-[1.5rem] sm:pb-[2rem] overflow-hidden">
        <div className="bg-[#013324] items-center flex justify-between px-[4rem] sm:px-[2rem] py-[1.5rem]">
          <Image
            src={"/common/omo_offa_ni_mi.png"}
            width={48}
            height={48}
            alt="logo"
            className="w-[4.2rem] h-[4.2rem]"
          />
          <div className="flex gap-[2rem] items-center">
            <div
              onClick={() => window.print()}
              className="flex-col  sm:hiddenv cursor-pointer print:hidden justify-center items-center flex text-white"
            >
              <Printer strokeWidth={1} className="" />
              <p className="text-[1.2rem] font-[600]">Print</p>
            </div>
            <Pill status={data.verificationStatus} />
          </div>
        </div>
        <div className="">
          <div className="px-[4rem] sm:px-[1.5rem] border-b border-b-[#E1E1E1] flex">
            <div className="flex pt-[2rem] items-center border-r sm:border-r-0 border-r-[#E1E1E1] w-[65%] sm:w-[100%] gap-[2rem] pb-[4rem]">
              <Image
                width={100}
                height={100}
                className="w-[10rem] h-[10rem]"
                src={data.profilePicture ?? "/common/profile_picture.png"}
                alt="profile picture"
              />

              <div className="flex flex-col sm:w-full gap-[1rem]">
                <Info
                  title={"Full Name"}
                  cardHeader={true}
                  capitalize={true}
                  content={`${data?.firstName} ${data?.lastName}`}
                />
                <Info
                  title={"DOB"}
                  cardHeader={true}
                  capitalize={true}
                  content={data?.ninData?.dob ?? "Not Available"}
                />
              </div>
            </div>
            <div className="pl-[3rem] pt-[2rem] sm:hidden flex flex-col gap-[1rem]">
              <Info
                title={"State of Residence"}
                containerStyle={"sm:hidden"}
                capitalize={true}
                content={`${data?.stateOfResidence} State`}
              />
              <Info
                title={"Country of Residence"}
                containerStyle={"sm:hidden"}
                capitalize={true}
                content={data?.countryOfResidence}
              />
            </div>
          </div>
          <div className="flex px-[4rem] gap-[5rem] py-[2rem] sm:hidden border-b border-b-[#E1E1E1]">
            <Info
              title={"Address of Residence"}
              capitalize={true}
              content={data?.addressOfResidence}
            />
            <Info
              title={"Local Govt. of Residence"}
              capitalize={true}
              content={data?.localGovernmentAreaOfResidence}
            />
            <Info
              title={"Town of Residence"}
              capitalize={true}
              content={data.cityOfResidence}
            />
          </div>

          <div className="flex px-[4rem] sm:hidden sm:px-[1.5rem] border-b border-b-[#E1E1E1] justify-between py-[2rem]">
            <div className="flex flex-col  max-w-[19rem] gap-[3rem]">
              <Info
                title={"Physcial Challenges"}
                capitalize={true}
                content={data.physicalChallenges}
              />
              <Info
                title={"Compound’s Name"}
                capitalize={true}
                content={data.compoundName ?? "Nil"}
              />
              <Info title={"Phone Number"} content={data.phoneNumber} />
            </div>
            <div className="flex flex-col  max-w-[19rem] sm:max-w-[12rem] gap-[3rem]">
              <Info title={"NIN Number"} capitalize={true} content={data.nin} />
              <Info
                title={"Ward’s Name"}
                capitalize={true}
                content={data.wardName}
              />
              <Info
                title={"Employee Status"}
                capitalize={true}
                content={data.employmentStatus}
              />
            </div>
            <div className="flex flex-col  max-w-[19rem] sm:max-w-[12rem] sm:hidden gap-[3rem]">
              <Info
                title={"OFFANIMI Number"}
                capitalize={true}
                content={data.offaNimiId}
              />
              <Info
                title={"Emergency Contact Name"}
                capitalize={true}
                content={data.emergencyContactName}
              />
              <Info
                title={"Emergency Contant "}
                content={data.emergencyContactNumber}
              />
            </div>
          </div>
          <div className="flex px-[4rem] sm:hidden sm:px-[1.5rem] border-b border-b-[#E1E1E1] justify-between py-[2rem] pb-[2rwm]">
            <div className="flex flex-col max-w-[19rem] sm:max-w-[12rem] gap-[3rem]">
              <Info
                title={"How are you in Offa Indigine"}
                capitalize={true}
                content={data.indigeneByWho}
              />
              <Info
                title={"Adoptee’s Compound"}
                capitalize={true}
                content={data.adoptedParentCompound ?? "Nil"}
              />

              <Info title={"Genotype"} content={data.genotype} />
            </div>
            <div className="flex flex-col  max-w-[19rem] sm:max-w-[12rem] gap-[3rem]">
              <Info
                title={"Name of Adoptee"}
                capitalize={true}
                content={data.adoptedParentName ?? "Nil"}
              />
              <Info
                title={"Adoptee’s Ward"}
                capitalize={true}
                content={data.adoptedParentWard ?? "Nil"}
              />
              <Info
                title={"No. of Current Dependent"}
                content={data.numOfCurrentDependants}
              />
            </div>
            <div className="flex flex-col  max-w-[19rem] sm:hidden gap-[3rem] justify-end">
              {/* <Info title={'Medical Genotype'} content={'Nigeria'} /> */}
              <Info
                title={"Verification Status"}
                capitalize={true}
                content={data.verificationStatus}
              />
              <Info title={"Current E-mail Address"} content={data.email} />
            </div>
          </div>

          <div className="hidden sm:flex  px-[1.5rem] flex-col">
            <div className="sm:flex flex-col py-[3rem] border-b border-b-[#E1E1E1] gap-[2.5rem]">
              {/* First row: Combine the first elements of both containers */}
              <div className="flex justify-between w-[100%]">
                <Info
                  title={"Country of Residence"}
                  capitalize={true}
                  content={data.countryOfResidence}
                />
                <Info
                  title={"Address of Residence"}
                  capitalize={true}
                  content={data?.addressOfResidence}
                />
              </div>

              {/* Second row: Combine second elements of both containers */}
              <div className="flex justify-between w-[100%]">
                <Info
                  title={"Employee Status"}
                  capitalize={true}
                  content={data.employmentStatus}
                />
                <Info
                  title={"Ward’s Name"}
                  capitalize={true}
                  content={data.wardName}
                />
              </div>

              {/* Third row: Combine third elements of both containers */}
              <div className="flex justify-between w-[100%]">
                <Info
                  title={"Compound’s Name"}
                  capitalize={true}
                  content={data.compoundName}
                />
                <Info title={"Current E-mail Address"} content={data.email} />
              </div>

              {/* Fourth row: Combine fourth elements of both containers */}
              <div className="flex justify-between w-[100%]">
                <Info
                  title={"Local Govt. of Residence"}
                  capitalize={true}
                  content={data.localGovernmentAreaOfResidence}
                />
                <Info
                  title={"Emergency Contact"}
                  content={data.emergencyContactNumber}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[2rem] py-[2rem]">
              <Info
                title={"How are you in Offa Indigine"}
                capitalize={true}
                content={data.indigeneByWho}
              />
              <Info
                title={"Name of Adoptee"}
                capitalize={true}
                content={data.adoptedParentName ?? "Nil"}
              />
              <Info
                title={"Adoptee’s Ward"}
                capitalize={true}
                content={data.adoptedParentWard ?? "Nil"}
              />
              <Info title={"Genotype"} content={data.genotype} />
              <Info
                title={"Adoptee’s Compound"}
                capitalize={true}
                content={data.adoptedParentCompound ?? "Nil"}
              />
              <Info
                title={"No. of Current Dependent"}
                content={data.numOfCurrentDependants}
              />
            </div>
          </div>
        </div>
      </div>
      {data.verificationStatus === "APPROVED" && !data.idPayment && (
        <Button className="w-full print:hidden py-[2.7rem] text-[1.2rem] text-[#C8FFC4] bg-[#002B1E] font-[700] rounded-[1rem] mt-[1.5rem]">
          Pay for Offa Nimi ID Card
        </Button>
      )}
    </div>
  );
};

const Pill = ({ status }) => {
  status = status.toLowerCase();
  const colorPalete = {
    pending: {
      text: "text-[#763201]",
      bg: "bg-[#FFF1B8]",
    },
    approved: {
      text: "text-[#007A55]",
      bg: "bg-[#D5FFF2]",
    },
    rejected: {
      text: "text-[#C50700]",
      bg: "#FFE8E0",
    },
  };
  return (
    <div
      className={`w-[8.5rem]  sm:w-[6rem] h-[3rem] sm:h-[2rem] ${colorPalete[status]?.bg} rounded-[2.5rem] flex justify-center items-center`}
    >
      <p
        className={`${colorPalete[status]?.text} capitalize text-[1.2rem] sm:text-[1rem] font-[700]`}
      >
        {status}
      </p>
    </div>
  );
};

const Info = ({ title, content, cardHeader, capitalize, containerStyle }) => (
  <div className={` ${containerStyle} sm:w-[14rem]`}>
    <p
      className={`${
        cardHeader ? "text-[1.1rem] mb-[.3rem]" : "text-[1.3rem] mb-[.3rem]"
      }`}
    >
      {title}
    </p>
    <p
      className={`font-[600]  ${
        cardHeader ? "text-[1.8rem]" : "text-[1.6rem]"
      } ${capitalize ? "capitalize" : ""} sm:text-[1.35rem]`}
    >
      {content}
    </p>
  </div>
);
