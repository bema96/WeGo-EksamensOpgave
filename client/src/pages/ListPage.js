"use client";

import { List }                       from "@/components/_tripList/list"
import { useState, useMemo }          from "react";
import { useTrips }                   from "@/hooks/useTrips";
import { useReview }                  from "@/hooks/useReview";
import { SortTrips }                  from "@/components/_sortTrips/sortTrips";
import { useBagsize }                 from "@/hooks/useBagsize";
import { SearchLift }                 from "@/components/_search/searchLift";
import { filterTrips }                from "@/utils/filterTrips";      
import { filteredTrips as filterBy }  from "@/utils/sortTrips";      
import { ErrorMessage }               from "@/components/UI/Error.../ErrorMessage";
import { LoadingWavyDots }            from "@/components/UI/Loading.../LoadingWavyDots";
import { useSearchParams, useRouter } from "next/navigation";

export default function ListPage({ className }) {
  const params = useSearchParams();
  const router = useRouter();

  // URL-init
  const [fromInput, setFromInput] = useState(() => params.get("from") || "");
  const [toInput,   setToInput]   = useState(() => params.get("to")   || "");

  // søge-state
  const [queryFrom, setQueryFrom] = useState(() => params.get("from") || "");
  const [queryTo,   setQueryTo]   = useState(() => params.get("to")   || "");

  // sidebar filter-state
  const [filters, setFilters] = useState({ seats: 1, bagSizeId: null, comfort: false, prefs: [] });

  // data
  const { data: tripData,    loading: tripLoading,    error: tripError }    = useTrips();
  const { data: reviewData,  loading: reviewLoading,  error: reviewError }  = useReview();
  const { data: bagSizeData, loading: bagSizeLoading, error: bagSizeError } = useBagsize();

  const trips    = Array.isArray(tripData)    ? tripData    : [];
  const reviews  = Array.isArray(reviewData)  ? reviewData  : [];
  const bagSizes = Array.isArray(bagSizeData) ? bagSizeData : [];


  const textResults = useMemo(
    () => filterTrips(trips, queryFrom, queryTo),
    [trips, queryFrom, queryTo]
  );


  const { seats = 1, bagSizeId = null, comfort = false, prefs = [] } = filters;

  const results = useMemo(() => {
    const active = [];

    if (seats > 1) active.push(`seats>=${seats}`);
    if (bagSizeId != null) active.push(`bag=${bagSizeId}`);
    if (comfort) active.push("comfort");
    for (const p of prefs) active.push(`pref:${p}`);

    return active.reduce((acc, f) => filterBy(acc, f), textResults);
  }, [textResults, seats, bagSizeId, comfort, prefs]);



  // submit + URL sync
  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryFrom(fromInput);
    setQueryTo(toInput);
    const p = new URLSearchParams({ from: fromInput, to: toInput });
    router.push(`/list?${p}`);
  };

  if (tripLoading || reviewLoading || bagSizeLoading) return <LoadingWavyDots text="" />;
  if (tripError || reviewError || bagSizeError)       return <ErrorMessage message="" />;

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 ${className || ""}`}>
      {/* Titel (kun mobil) */}
      <h1 className="font-bold text-3xl md:hidden mb-3">Find et lift</h1>

      {/* Søgning */}
      <SearchLift
        from={fromInput}
        to={toInput}
        onFrom={setFromInput}
        onTo={setToInput}
        onSubmit={handleSubmit}
        className="shadow-none w-full md:flex md:flex-row"
        departClassName="w-full"
        arrivalClassName="w-full"
        submitClassName="w-full py-4 md:max-w-50"
      />

      {/* Indhold */}
      <div className="mt-6 md:mt-10 md:flex md:items-start md:gap-8">
        {/* Filters */}
        <SortTrips
          value={filters}
          onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))}
          bagSizes={bagSizes}
          className="mt-4 md:mt-0 md:w-64 md:shrink-0 md:sticky md:top-24"
        />

        {/* Liste */}
        <div className="flex-1">
          <h2 className="font-bold text-3xl hidden md:block mb-4">Næste lift</h2>
          <div className="grid gap-3 sm:gap-4">
            <List result={results} review={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
