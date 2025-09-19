export const metadata = {
  title: "Køreture | Søg lifte",
  description: "Se ledige køreture og søg efter et lift fra A til B. Filtrér efter fra/til, dato og pris.",
  keywords: ["køreture", "samkørsel", "lift", "find lift", "søg køretur", "bilpool"],
  robots: "index, follow",
  alternates: {
    canonical: "/list",
  },
  openGraph: {
    title: "Køreture | Søg lifte",
    description: "Browse og søg efter køreture tæt på dig. Find et lift hurtigt og nemt.",
    url: "https://ditdomæne.dk/list",
    siteName: "Mit Webshop",
    images: [
      {
        url: "https://ditdomæne.dk/og-trips.jpg",
        width: 1200,
        height: 630,
        alt: "Liste og søgning af køreture",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
};



import ListPage from "@/pages/ListPage";

export default function Page() {
    
    return (
      <>
      <ListPage  />
      </>
    )
}
