"use client";

import { Comment     } from "./_DriverComments/comment";
import { Reviews     } from "./_Andmeldelse/anmeldelse";
import { TimeDate    } from "./_Time&Date/time&date";
import { Information } from "./_Information/information"; 
import { Button      } from "../UI/UniversalButton/button";
import { useRouter   } from "next/navigation";


export const TripDetail = ({ trip, review }) => {

  const router = useRouter();

    
  if (!trip) return <div>Kunne ikke finde turen</div>; 

  return (
    <div className="">

        <div>
            <TimeDate
            trip={trip} 
            />
        </div>

        <div>
            <Information
            trip={trip} 
            />
        </div>

        <div>
            <Comment
            trip={trip} 
            />
        </div>

        <div>
            <Reviews 
            trip={trip}
            review={review}s
            />
        </div>

        <Button
            onClick={() => router.push(`/booking/${trip.id}`)}
            variant="primary"
        >
            Book plads
        </Button>

    </div>
  );
};

