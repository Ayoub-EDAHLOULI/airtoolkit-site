import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { DEFAULT_LOCALE, LOCALES, isLocale, dirForLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_NAME, SITE_URL, pageMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// Defaults for every page (and the full metadata for the home page). Each
// subpage overrides title/description/canonical via pageMetadata(). The
// social preview image comes from ./opengraph-image.tsx.
export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: "Ayoub Edahlouli", url: "https://ayoubedahlouli.com" }],
    creator: "Ayoub Edahlouli",
    ...pageMetadata({
      lang: locale,
      path: "",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
    }),
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dirForLocale(lang)}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <ScrollToTop />
      </body>
    </html>
  );
}
