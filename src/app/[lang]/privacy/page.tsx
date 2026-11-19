import type { Metadata } from "next";
import Privacy from "@/components/Privacy";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Privacy dict={dict} />;
}
