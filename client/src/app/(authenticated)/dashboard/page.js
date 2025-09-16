export const metadata = {
  title: "Dashboard | Mit Next Projekt",
  description: "Se dit personlige dashboard og få overblik over din konto og aktiviteter.",
  keywords: ["dashboard", "konto", "overblik", "aktiviteter", "nextjs"],
  robots: "index, follow",
  openGraph: {
    title: "Dashboard | Mit Next Projekt",
    description: "Se dit personlige dashboard og få overblik over din konto og aktiviteter.",
    url: "https://ditdomæne.dk/dashboard",
    siteName: "Mit Next Projekt",
    images: [
      {
        url: "https://ditdomæne.dk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dashboard for Mit Next Projekt",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
};



import DashboardPage from "@/pages/_private/dashboardPage";

export default function Page() {
  return (
    <>
    <DashboardPage />
    </>
  );
}