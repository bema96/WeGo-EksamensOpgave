export const metadata = {
  title: "Login | Mit Next Projekt",
  description: "Log ind på din konto og få adgang til alle funktioner på websitet.",
  keywords: ["login", "log ind", "konto", "adgang", "nextjs"],
  robots: "index, follow",
  openGraph: {
    title: "Login | Mit Next Projekt",
    description: "Log ind på din konto og få adgang til alle funktioner på websitet.",
    url: "https://ditdomæne.dk/login",
    siteName: "Mit Next Projekt",
    images: [
      {
        url: "https://ditdomæne.dk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Login til Mit Next Projekt",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
};

import LoginPage from "@/pages/LoginPage";

export default function Page() {
  return (
    <>
    <LoginPage />
    </>
  );
}