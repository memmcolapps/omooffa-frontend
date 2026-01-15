import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormGenerator = ({ fields, setFormData, formData, onCountryChange }) => {
  // Handle indigeneByWho changes
  const handleIndigeneByWhoChange = (value) => {
    const isAdoption = value === "By Adoption";

    // Update form data with new value
    setFormData((prev) => ({
      ...prev,
      indigeneByWho: value,
    }));

    // Clear adoption fields if not "By Adoption"
    if (!isAdoption) {
      setFormData((prev) => ({
        ...prev,
        adoptedParentName: "",
        adoptedParentCompound: "",
        adoptedParentWard: "",
      }));
    }
  };

  // Get disabled status for adoption fields
  const isAdoptionFieldDisabled = (fieldId) => {
    const adoptionFields = [
      "adoptedParentName",
      "adoptedParentCompound",
      "adoptedParentWard",
    ];
    return (
      adoptionFields.includes(fieldId) &&
      formData.indigeneByWho !== "By Adoption"
    );
  };

  return (
    <>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <Label htmlFor={field.id} className="block mb-2 text-sm font-medium">
            {field.label}
          </Label>

          {/* Render input based on field type */}
          {field.type === "text" && (
            <Input
              id={field.id}
              value={formData[field.id] || ""}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [field.id]: e.target.value,
                }))
              }
              disabled={isAdoptionFieldDisabled(field.id)}
              className="h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "number" && (
            <Input
              id={field.id}
              type="number"
              value={formData[field.id] || ""}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [field.id]: e.target.value,
                }))
              }
              disabled={isAdoptionFieldDisabled(field.id)}
              className="h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "password" && (
            <Input
              id={field.id}
              type="password"
              value={formData[field.id] || ""}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [field.id]: e.target.value,
                }))
              }
              disabled={isAdoptionFieldDisabled(field.id)}
              className="h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "date" && (
            <Input
              id={field.id}
              type="date"
              value={formData[field.id] || ""}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  [field.id]: e.target.value,
                }))
              }
              disabled={isAdoptionFieldDisabled(field.id)}
              className="h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "select" && (
            <Select
              value={formData[field.id] || ""}
              onValueChange={(value) => {
                // Special handling for indigeneByWho field
                if (field.id === "indigeneByWho") {
                  handleIndigeneByWhoChange(value);
                } else {
                  // Normal handling for other select fields
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    [field.id]: value,
                  }));
                }

                // Handle country change if needed
                if (field.id === "countryOfResidence" && onCountryChange) {
                  onCountryChange(value);
                }
              }}
            >
              <SelectTrigger className="h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600]">
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((option, idx) => (
                  <SelectItem key={idx} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      ))}
    </>
  );
};

export default FormGenerator;
