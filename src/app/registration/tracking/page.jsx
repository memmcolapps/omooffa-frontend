'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/app/components/ui/form";
import useUserInfo from "@/app/hooks/useUserInfo";
import Image from "next/image";

const formSchema = z.object({
    trackingId: z.string().min(1, "Tracking ID is required"),
    password: z.string().min(1, "Password is required")
});

const Tracking = () => {
    const { getUserInfo, loading, data } = useUserInfo();
    return (
        <section className="bg-[#EFFFEE] min-h-[100vh]">
            
            {data.message ? <OffaNimiForm data={data.user} /> : <TrackInput data={data} loading={loading} getUserInfo={getUserInfo} />}
        </section>
    );
};

export default Tracking;

const TrackInput = ({ data, loading, getUserInfo }) => {
    const router = useRouter();
   
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


    useEffect(() => {
        if (data?.message) {
            const trackingId = form.getValues("trackingId");
            // router.push(`/registration/tracking/${trackingId}`); 
        }
    }, [data, router, form]);

    return (
        <div className="mx-auto w-fit sm:w-auto sm:pt-[12rem] pt-[15rem]">
            <p className="font-[800] text-[2rem] text-[#07200B] text-center mb-[1.5rem]">Track Progress</p>
            <div className="p-[3.5rem] custom bg-[#013122] rounded-[2rem] w-[50rem] sm:w-auto">


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>


                        <FormField
                            control={form.control}
                            name="trackingId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[1.2rem] text-[#DDFFDA]">Tracking ID</FormLabel>
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
                                    <FormLabel className="text-[1.2rem] text-[#DDFFDA]">Password</FormLabel>
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            required
                            disabled={loading || !form.formState.isValid}
                            className="w-full mt-[2.8rem] py-[2rem] hover:bg-[#DDFFDA] font-[700] rounded-[.5rem] bg-[#B0FFAB] text-[#013626]"
                        >
                            Track Progress
                            {loading && <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};


const OffaNimiForm = ({ data }) => {

    return (
        <div className="pt-[12rem] pb-[5rem]  sm:w-auto mx-auto w-[69rem]">
            <div className="bg-white text-black rounded-[1.5rem] overflow-hidden">
                <div className="bg-[#013324] flex justify-between px-[4rem] py-[1rem]">
                    <Image
                        src={'/common/omo_offa_ni_mi.png'}
                        width={48}
                        height={48}
                        alt="logo"
                        className="w-[4.2rem] h-[4.2rem]"
                    />
                    <Pill status={data.verificationStatus} />
                </div>
                <div className="">
                    <div className="px-[4rem] border-b border-b-[#E1E1E1] flex">
                        <div className="flex pt-[2rem] items-center border-r border-r-[#E1E1E1] w-[65%] gap-[2rem] pb-[4rem]">
                            <Image
                                width={100}
                                height={100}
                                className="w-[10rem] h-[10rem]"
                                src={'/common/profile_picture.png'}
                                alt="profile picture"
                            />

                            <div className="flex flex-col gap-[1rem]">
                                <Info title={'Full Name'} cardHeader={true} content={`${data?.firstName} ${data?.lastName}`} />
                                <Info title={'DOB'} cardHeader={true} content={'5th of September 1999'} />
                            </div>
                        </div>
                        <div className="pl-[3rem] pt-[2rem] flex flex-col gap-[1rem]">
                            <Info title={'Residence'} content={`${data?.cityOfResidence}, ${data?.stateOfResidence} State`} />
                            <Info title={'Country of Residence'} content={data?.countryOfResidence} />
                        </div>
                    </div>
                    <div className="flex px-[4rem] gap-[5rem] py-[2rem] border-b border-b-[#E1E1E1]">
                        <Info title={'Address of Residence'} content={data?.addressOfResidence} />
                        <Info title={'Local Govt. of Residence'} content={data?.localGovernmentAreaOfResidence} />
                    </div>

                    <div className="flex px-[4rem] border-b border-b-[#E1E1E1] justify-between py-[2rem]">
                        <div className="flex flex-col gap-[3rem]">
                            <Info title={'Country of Residence'} content={data.countryOfResidence} />
                            <Info title={'Compound’s Name'} content={data.compoundName} />
                            <Info title={'Emergency Contant '} content={data.emergencyContactNumber} />
                        </div>
                        <div className="flex flex-col gap-[3rem]">
                            <Info title={'Town of Residence'} content={'Ilorin'} />
                            <Info title={'Ward’s Name'} content={data.wardName} />
                            <Info title={'Employee Status'} content={data.employmentStatus} />
                        </div>
                        <div className="flex flex-col gap-[3rem]">
                            <Info title={'Local Govt. of Residence'} content={data.localGovernmentAreaOfResidence} />
                            <Info title={'Current E-mail Address'} content={data.email} />
                            <Info title={'Current E-mail Address'} content={data.email} />
                        </div>
                    </div>
                    <div className="flex px-[4rem] border-b border-b-[#E1E1E1] justify-between py-[2rem] pb-[2rwm]">
                        <div className="flex flex-col gap-[3rem]">
                            <Info title={'How are you in Offa Indigine'} content={data.indigeneByWho} />
                            <Info title={'Adoptee’s Compound'} content={data.adoptedParentCompound ?? 'Nill'} />
                            <Info title={'Emergency Contant '} content={data.emergencyContactNumber} />
                        </div>
                        <div className="flex flex-col gap-[3rem]">
                            <Info title={'Name of Adoptee'} content={data.adoptedParentName ?? 'Nill'} />
                            <Info title={'Adoptee’s Ward'} content={data.adoptedParentWard ??  'Nill'} />
                            <Info title={'No. of Current Dependent'} content={data.numOfCurrentDependants} />
                        </div>
                        <div className="flex flex-col gap-[3rem] justify-end">
                            {/* <Info title={'Medical Genotype'} content={'Nigeria'} /> */}
                            <Info title={'Ward’s Name'} content={data.wardName} />
                            <Info title={'Current E-mail Address'} content={data.email} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Pill = ({ status }) => {
    status = status.toLowerCase()
    const colorPalete = {
        pending: {
            text: 'text-[#763201]',
            bg: 'bg-[#FFF1B8]'
        },
        approved: {
            text: 'text-[#007A55]',
            bg: 'bg-[#D5FFF2]'
        },
        rejected: {
            text: 'text-[#C50700]',
            bg: '#FFE8E0'
        }
    }
    return (
        <div className={`w-[8.5rem] h-[3rem] ${colorPalete[status]?.bg} rounded-[2.5rem] flex justify-center items-center`}>
            <p className={`${colorPalete[status]?.text} capitalize text-[1.2rem] font-[700]`}>{status}</p>
        </div>
    )
}

const Info = ({ title, content, cardHeader }) => (
    <div className="">
        <p className={`${cardHeader ? 'text-[1.1rem] mb-[.3rem]' : 'text-[1.3rem] mb-[.3rem]'}`}>{title}</p>
        <p className={`font-[600]  ${cardHeader ? 'text-[1.8rem]' : 'text-[1.6rem]'}`}>{content}</p>
    </div>
)