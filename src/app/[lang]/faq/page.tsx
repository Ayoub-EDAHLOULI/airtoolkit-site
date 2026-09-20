import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.faqTitle,
    description: dict.meta.faqDescription,
  };
}

export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Faq dict={dict} />;
}
