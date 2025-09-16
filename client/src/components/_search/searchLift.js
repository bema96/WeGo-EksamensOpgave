"use client";

import { Button } from "../UI/UniversalButton/button";
import { Pin } from "@/assets/icons/pin";

export const SearchLift = ({
  text = "",
  from = "",
  to = "",
  onFrom = () => {},
  onTo = () => {},
  onSubmit = (e) => e.preventDefault(),
}) => {
    
  return (
    <form onSubmit={onSubmit} className="bg-red-200 flex flex-col px-3 py-5 rounded-xl gap-3">
      <h1 className="font-bold text-lg">{text}</h1>

      <div className="relative">
        <input
          name="from"
          placeholder="Hvor fra?"
          value={from}
          onChange={(e) => onFrom(e.target.value)}
          className="border border-[var(--gray)] rounded-2xl p-4 w-full pl-10"
        />
        <Pin className="absolute top-[20px] left-3" />
      </div>

      <div className="relative">
        <input
          name="to"
          placeholder="Hvor til?"
          value={to}
          onChange={(e) => onTo(e.target.value)}
          className="border border-[var(--gray)] rounded-2xl p-4 w-full pl-10"
        />
        <Pin className="absolute top-[20px] left-3" />
      </div>

      <Button type="submit" variant="primary">Søg lift</Button>
    </form>
  );
};
