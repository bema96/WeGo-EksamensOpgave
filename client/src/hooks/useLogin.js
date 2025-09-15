import { useState } from "react";

export const useLogin = () => {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const login = async (formData) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json()
        .catch(() => ({}));
        throw { status: response.status, message: err.message || "Noget gik galt" };
      }

      const result = await response.json();
      setData(result);
      return result;

    } catch (error) {
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, data, loading, error };
};
