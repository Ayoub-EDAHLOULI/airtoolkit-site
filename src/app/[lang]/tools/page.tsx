import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolsShowcase from "@/components/ToolsShowcase";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/tools">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  return pageMetadata({
    lang: locale,
    path: "tools",
    title: dict.meta.toolsTitle,
    description: dict.meta.toolsDescription,
  });
}

export default async function ToolsPage({ params }: PageProps<"/[lang]/tools">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return <ToolsShowcase lang={lang} dict={dict} />;
}
