import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Placeholder metadata — replace with final copy and a real og-image before launch.
export const metadata: Metadata = {
  title: "AirToolkit — Offline Developer Toolbox",
  description:
    "Placeholder description: AirToolkit is an offline-first developer toolbox with zero network calls, built for air-gapped and locked-down machines.",
  openGraph: {
    title: "AirToolkit — Offline Developer Toolbox",
    description:
      "Placeholder description: AirToolkit is an offline-first developer toolbox with zero network calls, built for air-gapped and locked-down machines.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirToolkit — Offline Developer Toolbox",
    description:
      "Placeholder description: AirToolkit is an offline-first developer toolbox with zero network calls, built for air-gapped and locked-down machines.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
