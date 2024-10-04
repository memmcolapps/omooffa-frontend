'use client';
import { useState } from "react";
import useFetchAPI from "./useFetch";
import { toast } from "react-toastify";

const useValidation = () => {
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState(null)
    const { useFetch } = useFetchAPI();

    const validateNIN = async (nin) => {
        setLoading(true);  

        try {
            const response = await useFetch('api/v1/user/verify-user-nin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nin })
            });

            const data = await response.json(); 

            if (response.ok) {
                console.log("Validation successful:", data);
                toast.success('NIN validaton sucessfull')
                setRes(data)
            } else {
                console.error("Validation failed:", data);
            }
        } catch (error) {
            toast.error('NIN validation failed')
            console.error("Error validating NIN:", error);
        } finally {
            setLoading(false);  
        }
    };

    return { validateNIN, loading, res };
};

export default useValidation;
