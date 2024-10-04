'use client';
import { useState } from "react";
import useFetchAPI from "./useFetch"; // Custom fetch hook

const useStates = () => {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(false);
    const { useFetch } = useFetchAPI();

    const fetchStates = async (country) => {
        setLoading(true);
        try {
            const response = await useFetch(`api/v1/location/states/${country}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            if (response.ok) {
                setStates(data.states); // Assuming the API returns an array of states
            } else {
                console.error("Failed to fetch states:", data);
            }
        } catch (error) {
            console.error("Error fetching states:", error);
        } finally {
            setLoading(false);
        }
    };

    return { fetchStates, states, loading };
};

export default useStates;
