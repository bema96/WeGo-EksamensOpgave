// hooks/useBookATrip.js
"use client";
import { useState } from "react";

export const useBookATrip = () => {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);


  const book = async (formData) => {
    setLoading(true);
    setError(null);
    setData(null);

  
    const accessToken = (() => {
      try { return JSON.parse(sessionStorage.getItem("access_token") || "{}")?.accessToken || ""; }
      catch { return ""; }
    })();

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw { status: response.status, message: err.message || "Noget gik galt" };
      }

      const result = await response.json();
      setData(result);
      return result;

    } catch (err) {
      setError(err);
      return null;

    } finally {
      setLoading(false);
    }
  };

  return { book, data, loading, error };
};
