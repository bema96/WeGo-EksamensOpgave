// components/_nav/Navigation.jsx
"use client";

import { useAuth }           from "@/providers/auth.provider";
import { useIsMobile }       from "@/utils/isMobile";
import { MobileNavigation }  from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";
import { useState, useEffect } from "react";
import { Modal }             from "@/components/_modal/modal"; 

import "./hamburgerMenu.css";

export const Navigation = () => {
  const { loginData }           = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile                = useIsMobile();
  const [hydrated, setHydrated] = useState(false);

  // modal state
  const [open, setOpen] = useState(false);
  const openModal  = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  const username = loginData?.user?.firstname || "user";

  return (
    <>
      <nav className="bg-[var(--gray)] text-[var(--gral)] text-sm h-[120px] flex items-center py-4 px-6 shadow-md">
        {isMobile ? (
          <MobileNavigation
            loginData={loginData}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            username={username}
            onHowItWorks={openModal}   // <- åbn modal på mobil
          />
        ) : (
          <DesktopNavigation
            loginData={loginData}
            username={username}
            onHowItWorks={openModal}   // <- åbn modal på desktop
          />
        )}
      </nav>

      {/* Modal mountet her – styres af open/onClose */}
      <Modal open={open} onClose={closeModal} title="Sådan virker det">
        <p>Samkørsel: én kører, andre hopper med, og alle sparer tid og penge. Søg på fra/til og dato, vælg en tur, book et sæde, og bekræft mødested og tidspunkt i chatten (kom fem minutter før). </p>
        <br/>
        <p>Betalingen dækker brændstof og eventuelle bro- eller færgeomkostninger og fordeles fair mellem passagererne. Tjek detaljer som bagagestørrelse, kæledyr, rygepolitik, musik eller stillekørsel samt chaufførens rating. Aflys i god tid og giv en kort, ærlig anmeldelse efter turen. </p>
        <br/>
        <p>Vis almindelig pli: hold bilen pæn, spørg før mad, brug sele og respekter tempoet. Chaufføren har ansvar for bil og kørsel, platformen forbinder jer, og du kan forvente, at bilen er lovlig og forsikret. Klar kommunikation gør turen grønnere, billigere og mere chill fra A til B.</p>
      </Modal>
    </>
  );
};
