"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import useValidation from "../../hooks/useValidation";
import { Loader2 } from "lucide-react";
import FormGenerator from "../../components/common/formGenerator";
import { useParams } from "next/navigation";
import UseCreateUser from "../../hooks/useCreateUser";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Progressbar from "../../components/ui/progressbar";
import { Country, State } from "country-state-city";
import { wards, compounds } from "../../utilis/wards";
import { popularProfessions } from "../../utilis/professions";
import { UploadDropzone } from "../../../utils/uploadthing";

const Register = () => {
  const param = useParams();
  const status = param?.status;
  const [NIN, setNIN] = useState(null);
  const { CreateUser, loading, data } = UseCreateUser();
  const [step, setStep] = useState(
    status === "DECEASED" || status === "NONIN" ? 1 : 0
  );
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    cityOfResidence: "",
    stateOfResidence: "",
    countryOfResidence: "",
    localGovernmentAreaOfResidence: "",
    addressOfResidence: "",
    compoundName: "",
    wardName: "",
    email: null,
    emergencyContactName: "",
    emergencyContactNumber: "",
    employmentStatus: "",
    indigeneByWho: "",
    adoptedParentName: "" || null,
    adoptedParentCompound: "" || null,
    adoptedParentWard: "" || null,
    numOfCurrentDependants: "",
    genotype: "",
    physicalChallenges: "",
    nin: null,
    occupation: "",
    phoneNumber: "",
    userType: status,
    password: "",
    profilePicUrl: "",
    dob: "",
    placeOfBirth: "",
    fathersName: "",
    fathersPlaceOfBirth: "",
    mothersName: "",
    mothersPlaceOfBirth: "",
    fathersPhoneNumber: "",
    mothersHomeTown: "",
    mothersFatherName: "",
    mothersCompound: "",
    mothersPhoneNumber: "",
  });

  const steps = [
    <Verify setStep={setStep} setNIN={setNIN} NIN={NIN} />,
    <FirstStep
      setStep={setStep}
      setFormData={setFormData}
      formData={formData}
      NIN={NIN}
    />,
    <SecondStep
      setStep={setStep}
      setFormData={setFormData}
      formData={formData}
    />,
    <ThirdStep
      setStep={setStep}
      setFormData={setFormData}
      formData={formData}
    />,
    <FourthStep
      setStep={setStep}
      CreateUser={CreateUser}
      loading={loading}
      setFormData={setFormData}
      formData={formData}
      data={data}
      NIN={NIN}
    />,
    <FifthStep
      setStep={setStep}
      CreateUser={CreateUser}
      loading={loading}
      setFormData={setFormData}
      formData={formData}
      data={data}
      NIN={NIN}
    />,
  ];

  return (
    <section className="min-h-[100vh] pb-[10rem] sm:px-[2.5rem] bg-[#EFFFEE] text-[#07200B]">
      <ToastContainer />
      {data?.message ? <Success data={data} /> : steps[step]}
    </section>
  );
};

export default Register;

const Verify = ({ setStep, setNIN, NIN }) => {
  const { validateNIN, loading, res } = useValidation();
  useEffect(() => {
    if (res?.message === "User verified successfully") {
      setStep(1);
    }
  }, [res, setStep]);

  return (
    <div className="mx-auto w-fit sm:w-auto sm:pt-[12rem] pt-[15rem]">
      <p className="font-[700] text-[2rem] text-center mb-[1.5rem]">
        Verify NIN Status
      </p>
      <div className="p-[3.5rem] custom bg-white w-[50rem] sm:w-auto">
        <p className="text-[1.2rem] mb-[1rem]">NIN</p>
        <Input
          value={NIN}
          onChange={(e) => setNIN(e.target.value)}
          type="number"
          className="border font-[600] placeholder:text-[#B6B9B8] placeholder:font-[400] h-[3.7rem] text-[1.3rem]"
          placeholder="Enter Valid NIN"
        />
        <Button
          disabled={loading || NIN === null || NIN.length < 11}
          onClick={() => validateNIN(NIN)}
          className="w-full mt-[2.8rem] py-[2rem] rounded-[.5rem] bg-[#002B1E] font-[800] text-[#C8FFC4]"
        >
          Verify
          {loading && (
            <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />
          )}
        </Button>
      </div>
    </div>
  );
};

const FirstStep = ({ setStep, setFormData, formData }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const allCountries = Country.getAllCountries().map(
      (country) => country.name
    );
    setCountries(allCountries.sort());
  }, []);

  useEffect(() => {
    if (formData.countryOfResidence) {
      const countryObj = Country.getAllCountries().find(
        (country) => country.name === formData.countryOfResidence
      );

      if (countryObj) {
        const countryStates = State.getStatesOfCountry(countryObj.isoCode).map(
          (state) => state.name
        );
        setStates(countryStates.sort());
      } else {
        setStates([]);
      }
    } else {
      setStates([]);
    }
  }, [formData.countryOfResidence]);

  const formFields = [
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      optional: false,
    },
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      optional: false,
    },
    {
      id: "middleName",
      label: "Middle Name (optional)",
      type: "text",
      placeholder: "Middle Name",
      optional: true,
    },
    {
      id: "countryOfResidence",
      label: "Current Country of Residence",
      type: "select",
      placeholder: "Select Your Country",
      options: countries,
      optional: false,
    },
    {
      id: "stateOfResidence",
      label: "Current State of Residence",
      type: "select",
      placeholder: "Enter Your State",
      options: states,
      optional: false,
    },
    {
      id: "cityOfResidence",
      label: "Current Town/City of Residence",
      type: "text",
      placeholder: "City",
      optional: false,
    },
    {
      id: "localGovernmentAreaOfResidence",
      label: "Current Local Govt. of Residence",
      type: "text",
      placeholder: "E.g Offa South",
      optional: false,
    },
    {
      id: "addressOfResidence",
      label: "Current Address of Residence",
      type: "text",
      placeholder: "Address",
      optional: false,
    },
  ];

  const isNextDisabled = formFields.some(
    (field) => !formData[field.id] && !field.optional
  );

  return (
    <div className="pt-[8rem]">
      <p className="font-[800] mb-[1rem] text-center">
        Indigene Enrollment Form
      </p>
      <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
        <FormGenerator
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex justify-between">
          <Progressbar text={"1 / 5"} percent={20} />
          <Button
            className="bg-[#002E20] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#C8FFC4] font-[700] ml-auto"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const SecondStep = ({ setStep, setFormData, formData }) => {
  const formFields = useMemo(
    () => [
      {
        id: "wardName",
        label: "Ward’s Name",
        type: "select",
        placeholder: "",
        options: wards.map((ward) => ward),
        optional: false,
      },
      {
        id: "compoundName",
        label: "Compound’s Name",
        type: "select",
        placeholder: "",
        options: compounds.map((compound) => compound),
        optional: false,
      },

      {
        id: "email",
        label: "Current E-mail Address (Optional)",
        type: "text",
        placeholder: "Email",
        optional: true,
      },
      {
        id: "emergencyContactName",
        label: "Emergency Contact Name",
        type: "text",
        placeholder: "Emergency Contact",
        optional: false,
      },
      {
        id: "emergencyContactNumber",
        label: "Emergency Contact Phone Number",
        type: "number",
        placeholder: "E.g +2348037117892",
        optional: false,
      },
      {
        id: "employmentStatus",
        label: "Employment Status",
        type: "select",
        placeholder: "",
        options: ["employed", "unemployed"],
        optional: false,
      },
      {
        id: "occupation",
        label: "Profession",
        type: "select",
        placeholder: "",
        options: popularProfessions,
        optional: false,
      },
    ],
    [formData]
  );

  const isNextDisabled = formFields.some(
    (field) => !formData[field.id] && !field.optional
  );

  return (
    <div className="pt-[8rem]">
      <p className="font-[800] mb-[1rem] text-center">
        Indigene Enrollment Form
      </p>
      <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
        <FormGenerator
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex justify-between items-center">
          <Button
            className="bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            Back
          </Button>

          <Progressbar text={"2 / 5"} percent={40} />

          <Button
            className="bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const ThirdStep = ({ setStep, setFormData, formData }) => {
  const formFields = [
    {
      id: "adoptedParentName",
      label: "Name of Adoptee (Optional/Ignore if not adopted)",
      type: "text",
      placeholder: "",
      optional: true,
    },
    {
      id: "adoptedParentCompound",
      label: "Adoptee’s Compound (Optional/Ignore if not adopted)",
      type: "text",
      placeholder: "",
      optional: true,
    },
    {
      id: "adoptedParentWard",
      label: "Adoptee’s Ward (Optional/Ignore if not adopted)",
      type: "text",
      placeholder: "",
      optional: true,
    },
    {
      id: "numOfCurrentDependants",
      label: "Number of Current Dependent",
      type: "number",
      placeholder: "",
      optional: false,
    },
    {
      id: "genotype",
      label: "Genotype",
      type: "select",
      placeholder: "",
      options: ["AA", "AS", "SS", "AC", "SC", "CC"],
      optional: false,
    },
  ];

  const isNextDisabled = formFields.some(
    (field) => !formData[field.id] && !field.optional
  );

  return (
    <div className="pt-[8rem]">
      <p className="font-[800] mb-[1rem] text-center">
        Indigene Enrollment Form
      </p>
      <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
        <FormGenerator
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex justify-between">
          <Button
            className="bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            Back
          </Button>

          <Progressbar text={"3 / 5"} percent={60} />

          <Button
            className="bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const FourthStep = (props) => {
  const { setStep, setFormData, formData, CreateUser, loading, NIN } = props;
  const formFields = [
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "number",
      placeholder: "+2348035869013",
      optional: false,
    },
    {
      id: "secondPhoneNumber",
      label: "Second Phone Number (Optional)",
      type: "number",
      placeholder: "+2348035869013",
      optional: true,
    },
    {
      id: "physicalChallenges",
      label: "Do you have any Physical Challenges?",
      type: "select",
      placeholder: "",
      options: ["No", "Yes"],
      optional: false,
    },
    {
      id: "bankName",
      label: "Bank Name",
      type: "select",
      placeholder: "",
      options: ["Zenith Bank"],
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Minimum 8 characters",
      optional: false,
    },
    {
      id: "religon",
      label: "Religion",
      type: "select",
      placeholder: "",
      options: ["Islam", "Christianity", "Traditional Religion"],
      optional: false,
    },
    {
      id: "sex",
      label: "Sex",
      type: "select",
      placeholder: "",
      options: ["Male", "Female"],
      optional: false,
    },
    {
      id: "bloodGroup",
      label: "Blood Group",
      type: "select",
      placeholder: "",
      options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      optional: false,
    },
  ];

  const isNextDisabled =
    formFields.some((field) => !formData[field.id] && !field.optional) ||
    !formData.profilePicUrl;

  return (
    <div className="pt-[8rem]">
      <p className="font-[800] mb-[1rem] text-center">
        Indigene Enrollment Form
      </p>
      <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
        <FormGenerator
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Profile Picture Upload Section */}
        <div className="space-y-2">
          <label className="text-[1.2rem] font-medium">
            Profile Picture <span className="text-red-500">*</span>
          </label>
          {formData.profilePicUrl ? (
            <div className="flex flex-col gap-4">
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={formData.profilePicUrl}
                  alt="Profile preview"
                  className="w-full h-full object-cover rounded-lg border-2 border-[#002E20]"
                />
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, profilePicUrl: "" }))
                }
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove Image
              </Button>
            </div>
          ) : (
            <UploadDropzone
              endpoint="profilePicture"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                if (res && res[0]) {
                  setFormData((prev) => ({
                    ...prev,
                    profilePicUrl: res[0].ufsUrl,
                  }));
                }
              }}
              onUploadError={(error) => {
                // Do something with the error.
                console.error("Upload error:", error);
                alert(`ERROR! ${error.message}`);
              }}
              className="border-2 border-dashed border-[#002E20] bg-[#EFFFEE] rounded-lg p-6 text-center hover:border-[#B0FFAB] transition-colors"
              appearance={{
                label: {
                  color: "#002E20",
                },
                allowedContent: {
                  color: "#666",
                },
              }}
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button
            className="bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            Back
          </Button>

          <Progressbar text={"4 / 5"} percent={80} />

          <Button
            className="bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const FifthStep = (props) => {
  const { setStep, setFormData, formData, CreateUser, loading, NIN } = props;
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const formFields = [
    {
      id: "dob",
      label: "Date of Birth",
      type: "date",
      placeholder: "Date",
      optional: false,
    },
    {
      id: "placeOfBirth",
      label: "Place of Birth",
      type: "text",
      placeholder: "Place",
      optional: false,
    },
    {
      id: "fathersName",
      label: "Father's Name",
      type: "text",
      placeholder: "Father's Name",
      optional: false,
    },
    {
      id: "fathersPlaceOfBirth",
      label: "Father's Place of Birth",
      type: "text",
      placeholder: "Father's Place of Birth",
      optional: false,
    },
    {
      id: "fathersPhoneNumber",
      label: "Father's Phone Number (Optional)",
      type: "number",
      placeholder: "Father's Phone Number",
      optional: true,
    },
    {
      id: "mothersName",
      label: "Mother's Name",
      type: "text",
      placeholder: "Mother's Name",
      optional: false,
    },
    {
      id: "mothersPlaceOfBirth",
      label: "Mother's Place of Birth",
      type: "text",
      placeholder: "Mother's Place of Birth",
      optional: false,
    },
    {
      id: "mothersCompound",
      label: "Mother's Compound",
      type: "text",
      placeholder: "Mother's Compound",
      optional: false,
    },
    {
      id: "mothersHomeTown",
      label: "Mother's Home Town",
      type: "text",
      placeholder: "Mother's Home Town",
      optional: false,
    },
    {
      id: "mothersFatherName",
      label: "Mother's Father Name",
      type: "text",
      placeholder: "Mother's Father Name",
      optional: false,
    },

    {
      id: "mothersPhoneNumber",
      label: "Mother's Phone Number (Optional)",
      type: "number",
      placeholder: "Mother's Phone Number",
      optional: true,
    },
    {
      id: "indigeneByWho",
      label: "How are you an Offa Indigene?",
      type: "select",
      placeholder: "",
      options: [
        "By Father and Mother",
        "By Mother only",
        "By Father only",
        "By Adoption",
        "By Residence",
        "By Marriage",
      ],
      optional: false,
    },
  ];
  const isNextDisabled = formFields.some(
    (field) => !formData[field.id] && !field.optional
  );

  return (
    <div className="pt-[8rem]">
      <p className="font-[800] mb-[1rem] text-center">
        Indigene Enrollment Form
      </p>
      <div className="bg-white custom flex flex-col gap-y-[2rem] rounded-[1rem] mx-auto p-[2.5rem] w-[45rem] sm:w-auto">
        <FormGenerator
          fields={formFields}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Privacy Policy Agreement Section */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="termsAgreement"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 h-4 w-4 text-[#002E20] focus:ring-[#002E20] border-gray-300 rounded"
            />
            <label
              htmlFor="termsAgreement"
              className="text-[1.2rem] leading-relaxed"
            >
              By checking this box and clicking "Submit" to complete your
              registration, I agree to{" "}
              <Link
                href=""
                className="text-[#002E20] font-semibold hover:underline"
              >
                ọ́ffà-Nimi's Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href=""
                className="text-[#002E20] font-semibold hover:underline"
              >
                Privacy Policy.
              </Link>
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            className="bg-[#B0FFAB] px-[3.5rem] py-[2rem] rounded-[.5rem] text-[#002E20] hover:bg-[#002E20] hover:text-[#C8FFC4] font-[700]"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            Back
          </Button>

          <Progressbar text={"5 / 5"} percent={100} />

          <Button
            className="bg-[#002E20] px-[3.5rem] py-[2rem] hover:bg-[#B0FFAB] hover:text-[#002E20] rounded-[.5rem] text-[#C8FFC4] font-[700]"
            onClick={() =>
              CreateUser({
                ...formData,
                numOfCurrentDependants: +formData.numOfCurrentDependants,
                employmentStatus: formData.employmentStatus,
                nin: NIN,
              })
            }
            disabled={isNextDisabled || !agreedToTerms}
          >
            Submit
            {loading && (
              <Loader2 className="ml-[.5rem] animate-spin w-[1.5rem]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Success = ({ data }) => {
  const [textToCopy, setTextToCopy] = useState(`${data?.offaNimiId}`);
  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopySuccess("Copied!"); // Success
      },
      (err) => {
        setCopySuccess("Could not copy"); // Failure
      }
    );
  };
  return (
    <div className="pt-[10rem] border mx-auto w-[50rem] sm:w-auto">
      <div className="bg-[#013324] text-[#D6FFD3] px-[3rem] sm:px-[1.5rem] pb-[3rem] pt-[5rem] rounded-[1rem]">
        <p className="w-[28rem] mx-auto text-center">
          You Registration has been completed and is subject to review.
        </p>
        <svg
          width="218"
          height="218"
          className="mx-auto w-[20rem] mt-[2.5rem]"
          viewBox="0 0 218 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_496_2567)">
            <path
              d="M109.001 217.281C168.924 217.281 217.501 168.704 217.501 108.781C217.501 48.8584 168.924 0.28125 109.001 0.28125C49.0781 0.28125 0.500977 48.8584 0.500977 108.781C0.500977 168.704 49.0781 217.281 109.001 217.281Z"
              fill="#03BF87"
            />
            <path
              d="M81.2773 157.726L137.068 213.516C183.274 201.194 217.501 159.095 217.501 108.781C217.501 107.754 217.501 106.727 217.501 105.701L173.691 65.3125L81.2773 157.726Z"
              fill="#007E54"
            />
            <path
              className="checkmark-small"
              d="M111.739 133.084C116.531 137.876 116.531 146.091 111.739 150.882L101.814 160.808C97.0217 165.6 88.8072 165.6 84.0154 160.808L40.547 116.998C35.7552 112.206 35.7552 103.991 40.547 99.1994L50.4728 89.2735C55.2646 84.4817 63.4792 84.4817 68.2709 89.2735L111.739 133.084Z"
              fill="#A3FF9C"
              stroke="#A3FF9C"
              strokeWidth="5"
            />
            <path
              className="checkmark-large"
              d="M149.731 57.4415C154.523 52.6497 162.738 52.6497 167.53 57.4415L177.455 67.3674C182.247 72.1592 182.247 80.3737 177.455 85.1655L102.156 160.123C97.3639 164.915 89.1494 164.915 84.3576 160.123L74.4317 150.197C69.6399 145.405 69.6399 137.191 74.4317 132.399L149.731 57.4415Z"
              fill="#A3FF9C"
              stroke="#A3FF9C"
              strokeWidth="5"
            />
          </g>
          <defs>
            <clipPath id="clip0_496_2567">
              <rect
                width="217"
                height="217"
                fill="white"
                transform="translate(0.500977 0.28125)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="sm:mt-[5rem]">
          <p className="text-[1.5rem] sm:text-[1.3rem] mb-[.8rem]">
            Your Omo Offa Ni MiID
          </p>
          <div className="flex justify-between bg-[#FFFFFF4D] items-center rounded-[.4rem] px-[1.7rem] py-[1rem]  mb-[1rem]">
            <p className="text-[1.4rem] font-[600] text-white">{textToCopy}</p>
            <Button
              variant="ghost"
              onClick={copyToClipboard}
              className="text-[1.4rem] w-[7rem] hover:bg-transparent hover:text-default font-[700]"
            >
              {copySuccess ? copySuccess : "Copy"}
            </Button>
          </div>
        </div>
        <div className="mt-[2rem] sm:mt-[2.5rem] flex justify-between">
          <Button
            asChild
            className="rounded-[.3rem] px-[4.5rem] sm:px-[2rem] hover:bg-white py-[2rem] bg-[#B0FFAB] font-[700] text-[#003525]"
          >
            <Link href="/">Go Back Home</Link>
          </Button>
          <Button
            asChild
            className="rounded-[.3rem] px-[4.5rem] sm:px-[2rem] hover:bg-[#B0FFAB] py-[2rem] bg-white font-[700] text-[#003525]"
          >
            <Link href="/registration/tracking">Track Registration</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
