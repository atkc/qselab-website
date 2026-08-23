import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qselab.com"),
  title: {
    default: "Quantum Systems Engineering Group · NUS",
    template: "%s · QSE Group",
  },
  description:
    "The Quantum Systems Engineering Group at NUS studies quantum sensing, quantum materials, magnons, phonons and rare-earth quantum interfaces.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Quantum Systems Engineering Group",
    description: "Interfacing quantum systems with materials, signals and one another.",
    url: "https://qselab.com",
    siteName: "QSE Group",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Quantum Systems Engineering Group at NUS" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Systems Engineering Group",
    description: "Interfacing quantum systems with materials, signals and one another.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              name: "Quantum Systems Engineering Group",
              alternateName: "QSE Group",
              url: "https://qselab.com",
              parentOrganization: {
                "@type": "CollegeOrUniversity",
                name: "National University of Singapore",
                url: "https://nus.edu.sg",
              },
              email: "tan.anthony@nus.edu.sg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Singapore",
                addressCountry: "SG",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
