import { PrefsFilter   } from "@/components/_sortTrips/_prefsFilter/preference";
import { SeatsFilter   } from "@/components/_sortTrips/_seatsFilter/seats";
import { ComfortFilter } from "@/components/_sortTrips/_comfortFilter/comfort";
import { BaggageFilter } from "@/components/_sortTrips/_bagageFilter/bagage";

export const SortTrips = ({ value = { seats: 1, bagSizeId: null, comfort: false, prefs: [] }, onChange, bagSizes, className }) => {

  return (
    <div className={`bg-white px-5 rounded-2xl flex flex-col gap-4 ${className}`}>
      <SeatsFilter
        value={value.seats}
        onChange={(seats) => onChange?.({ seats })}
      />

      <BaggageFilter
        options={bagSizes}
        value={value.bagSizeId}
        onChange={(bagSizeId) => onChange?.({ bagSizeId })}
      />

      <ComfortFilter
        value={value.comfort}
        onChange={(comfort) => onChange?.({ comfort })}
      />

      <PrefsFilter
        value={value.prefs}
        onChange={(prefs) => onChange?.({ prefs })}
      />
    </div>
  );
};
