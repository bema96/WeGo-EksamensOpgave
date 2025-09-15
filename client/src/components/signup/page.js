export const metadata = {
  title: "Opret bruger | Mit Next Projekt",
  description: "Opret en ny bruger og få adgang til alle funktioner på websitet.",
  keywords: ["signup", "opret bruger", "registrering", "konto", "nextjs"],
  robots: "index, follow",
  openGraph: {
    title: "Opret bruger | Mit Next Projekt",
    description: "Opret en ny bruger og få adgang til alle funktioner på websitet.",
    url: "https://ditdomæne.dk/signup",
    siteName: "Mit Next Projekt",
    images: [
      {
        url: "https://ditdomæne.dk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Opret bruger på Mit Next Projekt",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
};

import SignupPage from "@/pages/SignupPage";

export default function Page() {
  return (
    <>
    <SignupPage />
    </>
  );
}