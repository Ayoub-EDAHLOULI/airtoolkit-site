import type { Metadata } from "next";
import Verification from "@/components/Verification";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/security">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  return pageMetadata({
    lang: locale,
    path: "security",
    title: dict.meta.securityTitle,
    description: dict.meta.securityDescription,
  });
}

export default async function SecurityPage({
  params,
}: PageProps<"/[lang]/security">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Verification dict={dict} />;
}
