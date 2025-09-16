export const metadata = {
  title: "Forside | Mit Webshop",
  description: "Velkommen til forsiden af Mit Webshop. Find de bedste produkter og tilbud.",
  keywords: ["forside", "webshop", "tilbud", "produkter", "handel"],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forside | Mit Webshop",
    description: "Velkommen til forsiden af Mit Webshop. Find de bedste produkter og tilbud.",
    url: "https://ditdomæne.dk/",
    siteName: "Mit Webshop",
    images: [
      {
        url: "https://ditdomæne.dk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forside af Mit Webshop",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
};


import FrontPage from "@/pages/FrontPage";

export default function Page() {
	
    return (
      <>
      <FrontPage />
      </>
    )
}
