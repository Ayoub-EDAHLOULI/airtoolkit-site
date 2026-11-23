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

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
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
