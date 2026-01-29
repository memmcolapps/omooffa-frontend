"use client";
import { useState, useCallback } from "react";

const useCompounds = () => {
  const [compounds, setCompounds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCompounds = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://octopus-app-8k2vt.ondigitalocean.app/api/v1/admin/compounds",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setCompounds(data.compounds);
      } else {
        console.error("Error fetching compounds:", data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { compounds, fetchCompounds, loading };
};

export default useCompounds;
