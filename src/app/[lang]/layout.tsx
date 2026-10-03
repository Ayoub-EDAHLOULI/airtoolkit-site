import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BootScreen from "@/components/BootScreen";
import { LOCALES, isLocale, dirForLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

// TODO: swap /logo.png for a real 1200x630 og-image before launch — the
// square logo works as a stopgap but a proper OG image reads much better
// in link previews (Slack, Twitter, iMessage, etc.).
export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      type: "website",
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      images: ["/logo.png"],
    },
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
        <Script
          id="boot-guard"
          strategy="beforeInteractive"
          // Runs before paint so the first frame never flashes the site
          // behind the boot screen — kept in sync with BootScreen's own key.
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!sessionStorage.getItem('airtoolkit-booted')){document.documentElement.dataset.booting='true'}}catch(e){}",
          }}
        />
        <BootScreen dict={dict} />
        <div data-boot-target="" className="contents">
          <Header lang={lang} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} dict={dict} />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
