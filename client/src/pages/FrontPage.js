"use client";

import { useState }        from "react";
import { useRouter }       from "next/navigation";
import { useSlides }       from "@/hooks/useSlides";
import { Slideshow }       from "@/components/_slides/slides";
import { SearchLift }      from "@/components/_search/searchLift";
import { ErrorMessage }    from "@/components/UI/Error.../ErrorMessage";
import { LoadingWavyDots } from "@/components/UI/Loading.../LoadingWavyDots";

export default function FrontPage({ className }) { 

  // Data
  const { data, loading, error } = useSlides();
  const slides = Array.isArray(data) ? data : [];
  
  // States
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Roter
  const router = useRouter();

  // Funktion
  // Håndter søgningen med indtastet values
  // URLSearchParams en metode der håndterer params (det indtastede value) 
  // og toString gør at web kan læse den og sætter den i URL'en 
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ from, to });
    router.push(`/list?${params}`);
  };

  if (loading) return <div><LoadingWavyDots text={""} /></div>
  if (error)   return <div><ErrorMessage message={""} /></div>


  return (
    <div className="relative">
      <div className="relative">
        <Slideshow
          slides={slides}
        />

        <SearchLift
          text="Find et lift"
          from={from}
          to={to}
          onFrom={setFrom}
          onTo={setTo}
          onSubmit={handleSubmit}
          className={`absolute left-1/2 top-20 -translate-x-1/2 w-[90%] max-w-[800px] ${className}`}
        />
      </div>

      <div>

      </div>
    </div>
  );
}
