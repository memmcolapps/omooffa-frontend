'use client'
import useFetchAPI from "./useFetch"
import { useState } from "react"

const useUserInfo = () => {
    const { useFetch } = useFetchAPI()

    const [data, setData] = useState({})
    const [loading, setloading] = useState(false)

    const getUserInfo = async (trackingId, password) => {
        console.log(`received trackingId: ${trackingId}, password: ${password}`); // Corrected console log

        try {
            setloading(true)
            const response = await useFetch('api/v1/user/get-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ offaNimiId: trackingId, password })
            })

            const data = await response.json()

            if (response.ok) {
                setloading(false)
                console.log(`data:`, data); // Log fetched data
                setData(data)
            } else {
                console.log(`Error: ${data.message || "Something went wrong"}`); // Error from response
            }
        } catch (error) {
            setloading(false)
            console.log(`Error: ${error.message}`); // Catch and log fetch errors
        }
    }

    return { getUserInfo, data, loading }
}

export default useUserInfo;
