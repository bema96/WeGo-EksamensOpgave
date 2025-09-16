"use client"

import { useState, useEffect } from "react";

export const useFetch = (endpoint, options = {}) => {

  const [ data, setData ]       = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ]     = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(endpoint, {
          method: options.method || "GET",
          headers: { "Content-Type": "application/json" },
          body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
          const error = await response.json()
          .catch(() => ({}));
          throw { status: response.status, message: error.message || "Noget gik galt" }
        }

        const data = await response.json();
        setData(data);        
      } catch ( error ) {
        setError( error )
      } finally {
        setLoading(false);
      };
    }
      fetchData();
    }, [endpoint, JSON.stringify(options)])

    return { data, loading, error };
  }