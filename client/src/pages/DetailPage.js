"use client";

import { TripDetail } from "@/components/_tripDetail/tripDetail";
import { useTrips } from "@/hooks/useTrips";
import { useReview } from "@/hooks/useReview";
import { LoadingWavyDots } from "@/components/UI/Loading.../LoadingWavyDots";
import { ErrorMessage } from "@/components/UI/Error.../ErrorMessage";

export default function DetailPage({ id }) {
  // data
  const { data:tripData,    loading:tripLoading,    error:tripError    } = useTrips(id);
  const { data:reviewData,  loading:reviewLoading,  error:reviewError  } = useReview(id);

  const trips    = Array.isArray(tripData)    ? tripData[0]    : tripData;
  const reviews  = Array.isArray(reviewData)  ? reviewData  : [];
 
  
  if (tripLoading || reviewLoading ) return <LoadingWavyDots text="" />;
  if (tripError   || reviewError   ) return <ErrorMessage message="" />;

  return (
    <div>
        <TripDetail 
            trip={trips}
            review={reviews} 
        />
    </div>
  );
};
