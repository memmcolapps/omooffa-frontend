'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import useValidation from '@/app/hooks/useValidation';
import { Loader2 } from 'lucide-react';
import { countries } from '@/app/utilis/country';
import FormGenerator from '@/app/components/common/formGenerator';
import { useParams } from 'next/navigation';
import UseCreateUser from '@/app/hooks/useCreateUser';
import Link from 'next/link';
import { states } from '@/app/utilis/state';
import Progressbar from '@/app/components/ui/progressbar';


const Register = () => {
    const param = useParams();
    const status = param?.status;
    const [step, setStep] = useState(status === 'DECEASED' || status === 'NONIN' ? 1 : 0);
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        cityOfResidence: '',
        stateOfResidence: '',
        countryOfResidence: '',
        localGovernmentAreaOfResidence: '',
        addressOfResidence: '',
        compoundName: '',
        wardName: '',
        email: '',
        emergencyContactName: '',
        emergencyContactNumber: '',
        employmentStatus: true,
        indigeneByWho: '',
        adoptedParentName: "" || null,
        adoptedParentCompound: "" || null,
        adoptedParentWard: "" || null,
        numOfCurrentDependants: 3,
        genotype: '',
        physicalChallenges: '',
        nin: '' || null,
        occupation: '',
        phoneNumber: '',
        userType: 'NONIN',
        password: ''
    });

    const steps = [
        <Verify setStep={setStep} />,
        <FirstStep setStep={setStep} setFormData={setFormData} formData={formData} />,
        <SecondStep setStep={setStep} setFormData={setFormData} formData={formData} />,
        <ThirdStep setStep={setStep} setFormData={setFormData} formData={formData} />,
        <FourthStep setStep={setStep} setFormData={setFormData} formData={formData} />
    ];

    return (
        <section className="min-h-[100vh] pb-[10rem] sm:px-[2.5rem] bg-[#EFFFEE] text-[#07200B]">
            {steps[step]}
        </section>
    );
}

export default Register;

const Verify = ({ setStep }) => {
    const { validateNIN, loading, res } = useValidation();
    const [NIN, setNIN] = useState('');

    useEffect(() => {
        if (res?.message === 'User verified successfully') {
            setStep(1);
        }
    }, [res, setStep]);

    return (
        <div className="mx-auto w-fit sm:w-auto sm:pt-[12rem] pt-[15rem]">
            <p className="font-[700] text-[2rem] text-center mb-[1.5rem]">Verify NIN Status</p>
            <div className="p-[3.5rem] custom bg-white w-[50rem] sm:w-auto">
                <p className="text-[1.2rem] mb-[1rem]">NIN</p>
                <Input value={NIN} onChange={(e) => setNIN(e.target.value)} type="number" className='border font-[600] placeholder:text-[#B6B9B8] placeholder:font-[400] h-[3.7rem] text-[1.3rem]' placeholder="Enter Valid NIN" />
                <Button disabled={loading || NIN.length < 11} onClick={() => validateNIN(NIN)} className="w-full mt-[2.8rem] py-[2rem] rounded-[.5rem] bg-[#002B1E] font-[800] text-[#C8FFC4]">
                    Verify
                    {loading && <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />}
                </Button>
            </div>
        </div>
    );
}

const FirstStep = ({ setStep, setFormData, formData }) => {
    const formFields = [
        {
            id: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name',
            optional: false
        },
        {
            id: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name',
            optional: false
        },
        {
            id: 'middleName',
            label: 'Middle Name',
            type: 'text',
            placeholder: 'Middle Name',
            optional: true
        },
        {
            id: 'cityOfResidence',
            label: 'Town/City of Residence',
            type: 'text',
            placeholder: 'City',
            optional: false
        },
        {
            id: 'stateOfResidence',
            label: 'State of Residence',
            type: 'select',
            placeholder: 'State',
            options: states,
            optional: false
        },
        {
            id: 'countryOfResidence',
            label: 'Country of Residence',
            type: 'select',
            placeholder: 'E.g USA',
            options: countries,
            optional: false
        },
        {
            id: 'localGovernmentAreaOfResidence',
            label: 'Local Govt. of Residence',
            type: 'text',
            placeholder: 'E.g Offa South',
            optional: false
        },
        {
            id: 'addressOfResidence',
            label: 'Address of Residence',
            type: 'text', placeholder: 'Address',
            optional: false
        },
    ];

    const isNextDisabled = formFields.some(field => !formData[field.id] && !field.optional);

    return (
        <div className="pt-[8rem]">
            <p className="font-[800] mb-[1rem] text-center">Indigene Enrollment Form</p>
            <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
                <FormGenerator fields={formFields} setFormData={setFormData} />

                <div className="flex justify-between">
                    <Progressbar  text={'1 / 4'} percent={25} />
                    <Button className='bg-[#002E20] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#C8FFC4] font-[700] ml-auto'
                        onClick={() => setStep(prevStep => prevStep + 1)} disabled={isNextDisabled}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

const SecondStep = ({ setStep, setFormData, formData }) => {

    const formFields = [
        {
            id: 'compoundName',
            label: 'Compound’s Name',
            type: 'text',
            placeholder: '',
            optional: true
        },
        {
            id: 'wardName',
            label: 'Ward’s Name',
            type: 'text',
            placeholder: 'E.g Balogun Fulani Ward',
            optional: false
        },
        {
            id: 'email',
            label: 'Current E-mail Address',
            type: 'text',
            placeholder: 'Email',
            optional: false
        },
        {
            id: 'emergencyContactName',
            label: 'Emergency Contact (Name)',
            type: 'text',
            placeholder: 'Emergency Contact',
            optional: false
        },
        {
            id: 'emergencyContactNumber',
            label: 'Emergency Contact (Phone Number)',
            type: 'text',
            placeholder: 'E.g 08037117892',
            optional: false
        },
        {
            id: 'employmentStatus',
            label: 'Employment Status',
            type: 'select',
            placeholder: '',
            options: [true, false],
            optional: false
        },
        {
            id: 'occupation',
            label: 'Occupation',
            type: 'text',
            placeholder: '',
            optional: false
        },
    ];

    const isNextDisabled = formFields.some(field => !formData[field.id] && !field.optional);

    return (
        <div className="pt-[8rem]">
            <p className="font-[800] mb-[1rem] text-center">Indigene Enrollment Form</p>
            <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
                <FormGenerator fields={formFields} setFormData={setFormData} />

                <div className="flex justify-between items-center">
                    <Button className='bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]' onClick={() => setStep(prevStep => prevStep - 1)}>Back</Button>

                    <Progressbar  text={'2 / 4'} percent={50} />

                    <Button className='bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]' onClick={() => setStep(prevStep => prevStep + 1)} disabled={isNextDisabled}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

const ThirdStep = ({ setStep, setFormData, formData }) => {
    const formFields = [
        {
            id: 'indigeneByWho',
            label: 'How are you an Offa Indigene?',
            type: 'select',
            placeholder: '',
            options: ['Birth'],
            optional: false
        },
        {
            id: 'adoptedParentName',
            label: 'Name of Adoptee (Optional/Ignore if not adopted)',
            type: 'text',
            placeholder: '',
            optional: true
        },
        {
            id: 'adoptedParentCompound',
            label: 'Adoptee’s Compound (Optional/Ignore if not adopted)',
            type: 'text',
            placeholder: '',
            optional: true
        },
        {
            id: 'adoptedParentWard',
            label: 'Adoptee’s Ward (Optional/Ignore if not adopted)',
            type: 'text',
            placeholder: '',
            optional: true
        },
        {
            id: 'numOfCurrentDependants',
            label: 'Number of Current Dependent',
            type: 'text',
            placeholder: '',
            optional: false
        },
        {
            id: 'genotype',
            label: 'Genotype',
            type: 'select',
            placeholder: '',
            options: ['AA', 'AS', 'SS'],
            optional: false
        },

    ];

    const isNextDisabled = formFields.some(field => !formData[field.id] && !field.optional);

    return (
        <div className="pt-[8rem]">
            <p className="font-[800] mb-[1rem] text-center">Indigene Enrollment Form</p>
            <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
                <FormGenerator fields={formFields} setFormData={setFormData} />

                <div className="flex justify-between">
                    <Button className='bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]' onClick={() => setStep(prevStep => prevStep - 1)}>Back</Button>
                    
                    <Progressbar  text={'3 / 4'} percent={75} />

                    <Button className='bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]' onClick={() => setStep(prevStep => prevStep + 1)} disabled={isNextDisabled}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

const FourthStep = ({ setStep, setFormData, formData }) => {
    const { CreateUser, loading } = UseCreateUser()
    console.log(formData)
    const formFields = [
        {
            id: 'phoneNumber',
            label: 'Phone Number',
            type: 'text', placeholder: '',
            optional: false
        },
        {
            id: 'physicalChallenges',
            label: 'Do you have any Physical Challenges?',
            type: 'select',
            placeholder: '',
            options: ['No', 'Yes'],
            optional: false
        },
        {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '',
            optional: false
        },
    ];

    const isNextDisabled = formFields.some(field => !formData[field.id] && !field.optional);

    return (
        <div className="pt-[8rem]">
            <p className="font-[800] mb-[1rem] text-center">Indigene Enrollment Form</p>
            <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
                <FormGenerator fields={formFields} setFormData={setFormData} />

                <p className="text-[1.2rem]">By clicking on “Submit” to complete your registration you agree to <Link href='' className="text-[#002E20]">ọ́ffà-Nimi’s Terms of Use</Link>  and <Link href='' className='text-[#002E20]'>Privacy Policy.</Link></p>

                <div className="flex justify-between">
                    <Button className='bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]' onClick={() => setStep(prevStep => prevStep - 1)}>Back</Button>

                    <Progressbar  text={'4 / 4'} percent={100} />

                    <Button className='bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]' onClick={() => CreateUser(formData)} disabled={isNextDisabled}>
                        Submit
                        {loading && <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />}
                    </Button>
                </div>
            </div>
        </div>
    );
}
