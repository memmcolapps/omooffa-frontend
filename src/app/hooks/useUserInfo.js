"use client";
import useFetchAPI from "./useFetch";
import { useState } from "react";
import { toast } from "react-toastify";
const useUserInfo = () => {
  const { useFetch } = useFetchAPI();

  const [data, setData] = useState({});
  const [loading, setloading] = useState(false);

  const getUserInfo = async (trackingId, password) => {
    try {
      setloading(true);
      const response = await useFetch("api/v1/user/get-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offaNimiId: trackingId, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setloading(false);
        console.log(`data:`, data); // Log fetched data
        setData(data);
      }
    } catch (error) {
      setloading(false);
      const networkError = error.message || "Network error";
      toast.error(networkError);
      console.error("Network Error:", networkError);
    } finally {
      setloading(false);
    }
  };

  return { getUserInfo, data, loading };
};

export default useUserInfo;
