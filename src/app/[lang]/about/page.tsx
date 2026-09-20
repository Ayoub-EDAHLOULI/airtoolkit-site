import type { Metadata } from "next";
import About from "@/components/About";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <About dict={dict} />;
}
