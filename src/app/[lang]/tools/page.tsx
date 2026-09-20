import type { Metadata } from "next";
import ToolsShowcase from "@/components/ToolsShowcase";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/tools">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.toolsTitle,
    description: dict.meta.toolsDescription,
  };
}

export default async function ToolsPage({ params }: PageProps<"/[lang]/tools">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <ToolsShowcase dict={dict} />;
}
