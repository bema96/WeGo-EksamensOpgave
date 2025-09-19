// app/(public)/booking/[id]/page.jsx
export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Køreture | Book lift #${id}`,
    description: `Book lift for tur ${id}`,
    alternates: { canonical: `https://ditdomæne.dk/booking/${id}` },
    openGraph: {
      title: `Køreture | Book lift #${id}`,
      description: `Book valgte lift`,
      url: `https://ditdomæne.dk/booking/${id}`,
      images: [{ url: "https://ditdomæne.dk/og-trips.jpg", width: 1200, height: 630, alt: "Booking af valgt køretur" }],
      locale: "da_DK",
      type: "website",
    },
  };
}

import BookingPage from "@/pages/BookingPage";

export default async function Page({ params }) {
  const { id } = await params; 
  
  return <BookingPage id={id} />;
}
