import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import KeyFacts from "@/components/KeyFacts";
import Toolbox from "@/components/Toolbox";
import Spotlight from "@/components/Spotlight";
import WhyOffline from "@/components/WhyOffline";
import Proof from "@/components/Proof";
import HowItWorks from "@/components/HowItWorks";
import InstallOptions from "@/components/InstallOptions";
import FaqPreview from "@/components/FaqPreview";
import FinalCta from "@/components/FinalCta";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { REPO_URL, STORE_URL } from "@/lib/release";
import { SITE_NAME, SITE_URL, jsonLd, localizedUrl } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: lang,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        description: dict.meta.siteDescription,
        url: localizedUrl(lang, ""),
        image: `${SITE_URL}/logo.png`,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Windows 10 (1809+), Windows 11",
        installUrl: STORE_URL,
        downloadUrl: STORE_URL,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        license: "https://opensource.org/licenses/MIT",
        featureList: TOOLS.map((tool) => dict.toolsShowcase.tools[tool.key].label),
        author: { "@type": "Person", name: "Ayoub Edahlouli", url: "https://ayoubedahlouli.com" },
        sameAs: [STORE_URL, REPO_URL],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Hero lang={lang} dict={dict} />
      <KeyFacts dict={dict} />
      <Toolbox lang={lang} dict={dict} />
      <Spotlight lang={lang} dict={dict} />
      <WhyOffline lang={lang} dict={dict} />
      <Proof lang={lang} dict={dict} />
      <HowItWorks lang={lang} dict={dict} />
      <InstallOptions lang={lang} dict={dict} />
      <FaqPreview lang={lang} dict={dict} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
