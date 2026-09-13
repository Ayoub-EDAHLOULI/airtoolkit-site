import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — AirToolkit",
  description:
    "Placeholder description: frequently asked questions about AirToolkit.",
};

export default function FaqPage() {
  return <Faq />;
}
