export const metadata = {
  title: "Mit Next Projekt",
  description: "Public og privat dashboard eksempel",
};


import "@/styles/index.css"

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
