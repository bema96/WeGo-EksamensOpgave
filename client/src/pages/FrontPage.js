"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchLift } from "@/components/_search/searchLift";

export default function FrontPage() {
  
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


  return (
    <div className="p-4">
      <SearchLift
        text="Find et lift"
        from={from}
        to={to}
        onFrom={setFrom}
        onTo={setTo}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
