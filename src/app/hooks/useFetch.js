"use client";

const useFetchAPI = () => {
  const useFetch = async (endpoint, options) => {
    try {
      const response = await fetch(
        `https://octopus-app-8k2vt.ondigitalocean.app/${endpoint}`,
        options
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        const errorMessage =
          error.error ||
          error.message ||
          error.errors?.map((item) => item.message).join(", ") ||
          "Request failed";
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
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
