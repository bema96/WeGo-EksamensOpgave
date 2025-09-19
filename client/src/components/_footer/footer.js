// components/_footer/Footer.jsx
"use client";

import { usePathname } from "next/navigation";
import { FooterDesktop } from "@/assets/images/footerdesktop";
import { FooterMobile }  from "@/assets/images/footermobile";

export const Footer = () => {
  const path = usePathname();
  const isFrontpage = path === "/";

  return (
    <footer className="w-full">
      
      {/* Mobil */}
      <div className="block lg:hidden">
        <FooterMobile className="w-full h-auto" />
      </div>

      {/* Desktop */}
      {!isFrontpage && (
        <div className="hidden lg:block overflow-visible">
          <FooterDesktop className="w-full h-auto lg:-mt-12" />
        </div>
      )}
    </footer>
  );
};
