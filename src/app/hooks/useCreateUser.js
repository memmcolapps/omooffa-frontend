'use client'
import { useState } from "react";
import useFetchAPI from "./useFetch";
const UseCreateUser = () => {
    const [loading, setLoading] = useState(false)
    const { useFetch } = useFetchAPI()

    const CreateUser = async (formData) => {
        setLoading(true)
        try {
            const response = await useFetch('api/v1/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userData: formData })
            });
            const data = await response.json();

            if (response.ok) {
                console.log("User Created successfully:", data);
            } else {
                console.error("User creation failed:", data);
            }
        } catch (error) {
            console.error("Error creating user:", error);
        } finally {
            setLoading(false);
        }
    }
    return { CreateUser, loading };
}

export default UseCreateUser;