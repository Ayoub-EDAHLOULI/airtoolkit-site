import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — AirToolkit",
  description:
    "Answers about AirToolkit's offline guarantee, supported platforms, and open-source availability.",
};

export default function FaqPage() {
  return <Faq />;
}
