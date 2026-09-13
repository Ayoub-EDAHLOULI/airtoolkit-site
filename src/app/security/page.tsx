import type { Metadata } from "next";
import Verification from "@/components/Verification";

export const metadata: Metadata = {
  title: "Security & Verification — AirToolkit",
  description:
    "Placeholder description: how AirToolkit's zero-network-calls claim is verified.",
};

export default function SecurityPage() {
  return <Verification />;
}
