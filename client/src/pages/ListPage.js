"use client";

import { List }                       from "@/components/_tripList/list"
import { useState }                   from "react";
import { useTrips }                   from "@/hooks/useTrips";
import { useReview }                  from "@/hooks/useReview";
import { SortTrips }                  from "@/components/_sortTrips/sortTrips";
import { sortTrips }                  from "@/utils/sortTrips";   
import { useBagsize }                 from "@/hooks/useBagsize";
import { SearchLift }                 from "@/components/_search/searchLift";
import { filterTrips }                from "@/utils/filterTrips"; 
import { useIsMobile }                from "@/utils/isMobile";
import { ErrorMessage }               from "@/components/UI/Error.../ErrorMessage";
import { LoadingWavyDots }            from "@/components/UI/Loading.../LoadingWavyDots";
import { useSearchParams, useRouter } from "next/navigation";

export default function ListPage({ className }) {
  const params = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();

  // URL-init
  const [ fromInput, setFromInput ] = useState(() => params.get("from") || "");
  const [ toInput,   setToInput   ] = useState(() => params.get("to")   || "");

  // søge-state
  const [ queryFrom, setQueryFrom ] = useState(() => params.get("from") || "");
  const [ queryTo,   setQueryTo   ] = useState(() => params.get("to")   || "");

  // sidebar filter-state  (VIGTIGT: bagSizeIds = array)
  const [ filters, setFilters     ] = useState({ seats: 1, bagSizeId: null, comfort: false, prefs: [] });

  // data
  const { data:tripData,    loading:tripLoading,    error:tripError    } = useTrips();
  const { data:reviewData,  loading:reviewLoading,  error:reviewError  } = useReview();
  const { data:bagSizeData, loading:bagSizeLoading, error:bagSizeError } = useBagsize();

  const trips    = Array.isArray(tripData)    ? tripData    : [];
  const reviews  = Array.isArray(reviewData)  ? reviewData  : [];
  const bagSizes = Array.isArray(bagSizeData) ? bagSizeData : [];

  const textResults = filterTrips(trips, queryFrom, queryTo);

  const results = sortTrips(textResults, {
    seats: filters.seats,
    bagSizeId: filters.bagSizeId,   
    comfort: filters.comfort,
    prefs: filters.prefs,
  }, bagSizes); 


  // submit + URL sync
  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryFrom(fromInput);
    setQueryTo(toInput);
    const p = new URLSearchParams({ from: fromInput, to: toInput });
    router.push(`/list?${p}`);
  };

  if (tripLoading || reviewLoading || bagSizeLoading) return <LoadingWavyDots text="" />;
  if (tripError   || reviewError   || bagSizeError  ) return <ErrorMessage message="" />;

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
      {/* Filters: under søgning på mobil, sticky sidebar på desktop */}
      <SortTrips
        value={filters}
        onChange={(patch) => setFilters(f => ({ ...f, ...patch }))}
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
