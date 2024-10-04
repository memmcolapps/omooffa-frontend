import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FormGenerator = ({ fields, setFormData, formData, onCountryChange }) => {
    return (
        <>
            {fields.map((field, index) => (
                <div key={index} className="grid w-full items-center gap-1.5">
                    {/* Label for the form field */}
                    <Label htmlFor={field.id} className='text-[1.3rem] font-500 text-[#515E59]'>
                        {field.label}
                    </Label>

                    {/* Render input based on field type */}
                    {field.type === 'text' && (
                        <Input
                            type="text"
                            id={field.id}
                            value={formData[field.id] || ""}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, [field.id]: e.target.value }))}
                            className='h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]'
                            placeholder={field.placeholder}
                        />
                    )}

                    {field.type === 'number' && (
                        <Input
                            type="number"
                            id={field.id}
                            value={formData[field.id] || ""}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, [field.id]: e.target.value }))}
                            className='h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]'
                            placeholder={field.placeholder}
                        />
                    )}

                    {field.type === 'password' && (
                        <Input
                            type="password"
                            id={field.id}
                            value={formData[field.id] || ""}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, [field.id]: e.target.value }))}
                            className='h-[3.8rem] text-[1.2rem] text-[#07200B] font-[600] placeholder:font-[400] placeholder:text-[#B6B9B8]'
                            placeholder={field.placeholder}
                        />
                    )}

                    {field.type === 'select' && (
                        <Select
                            value={formData[field.id] || ""}
                            onValueChange={(value) => {
                                setFormData(prevFormData => ({ ...prevFormData, [field.id]: value }));
                                if (field.id === 'countryOfResidence' && onCountryChange) {
                                    onCountryChange(value); // Trigger country change if relevant
                                }
                            }}
                        >
                            <SelectTrigger className="w-auto h-[3.8rem] pr-[1.5rem] text-[1.2rem]">
                                <SelectValue placeholder={field.placeholder} className='pr-[3rem]' />
                            </SelectTrigger>
                            <SelectContent>
                                {field.options.map((option, idx) => (
                                    <SelectItem key={idx} className='text-[1.2rem] capitalize font-[500]' value={option}>
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
