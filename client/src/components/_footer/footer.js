import Image from "next/image";
import FooterDesktop from "../../assets/images/footerdesktop.svg";
import FooterMobile from "../../assets/images/footermobile.svg";

export const Footer = () => {
  return (
    <footer
      className="
        relative w-full mt-10 overflow-visible z-99999
        h-[clamp(140px,28vh,260px)]
        sm:h-[clamp(160px,30vh,320px)]
        md:h-[clamp(180px,32vh,380px)]
        lg:h-[clamp(220px,36vh,460px)]
        xl:h-[clamp(260px,40vh,520px)]
      "
    >
      {/* BG image – mobil bundforankret, ingen beskæring */}
      <Image
        src={FooterMobile}
        alt=""
        fill
        priority
        aria-hidden
        className="object-contain object-bottom lg:hidden -z-10 realtive overflow-visible h-full"
      />
      {/* BG image – desktop dækker pænt */}
      <Image
        src={FooterDesktop}
        alt=""
        fill
        priority
        aria-hidden
        className="hidden lg:block object-cover [object-position:bottom] -z-10"
      />

      <div className="absolute bottom-[100px] left-2 lg:bottom-[150px] lg:left-6 xl:bottom-[200px] text-[var(--sky)]">
        <h1 className="text-xs lg:text-2xl">© 2025 WeGo ApS</h1>
        <p className="text-[10px] lg:text-lg">Fartstræde 12c, 2. sal, 9000 Aalborg</p>
      </div>
    </footer>
  );
};
