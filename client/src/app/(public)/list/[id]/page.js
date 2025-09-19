// app/(public)/list/[id]/page.jsx
export async function generateMetadata({ params }) {
  const { id } = await params; 

  return {
    title: `Køretur ${id}`,
    description: `Detaljer for køretur ${id}`,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://ditdomæne.dk/list/${id}` },
    openGraph: {
      title: `Køretur ${id}`,
      description: `Se detaljer for køretur ${id}`,
      url: `https://ditdomæne.dk/list/${id}`,
      siteName: "Mit Webshop",
      images: [{ url: "https://ditdomæne.dk/og-trips.jpg", width: 1200, height: 630, alt: "Liste og søgning af køreture" }],
      locale: "da_DK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Køretur ${id}`,
      description: `Detaljer for køretur ${id}`,
      images: ["https://ditdomæne.dk/og-trips.jpg"],
    },
  };
}

import DetailPage from "@/pages/DetailPage";

export default function Page({ params }) {
  const { id } = params; 
  return <DetailPage id={id} />;
}
