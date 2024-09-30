'use client';

const useFetchAPI = () => {
    const useFetch = async (endpoint, options) => {
        try {
            const response = await fetch(`https://octopus-app-8k2vt.ondigitalocean.app/${endpoint}`, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            
            return response;
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    return { useFetch };
};

export default useFetchAPI;
