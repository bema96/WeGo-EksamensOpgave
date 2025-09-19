"use client";

import { Comment     } from "./_DriverComments/comment";
import { Reviews     } from "./_Andmeldelse/anmeldelse";
import { TimeDate    } from "./_Time&Date/time&date";
import { Information } from "./_Information/information"; 


export const TripDetail = ({ trip, review }) => {

    
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
            review={review}
            />
        </div>

    </div>
  );
};

