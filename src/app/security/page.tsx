import type { Metadata } from "next";
import Verification from "@/components/Verification";

export const metadata: Metadata = {
  title: "Security & Verification — AirToolkit",
  description:
    "How AirToolkit's zero-network-calls claim is checked: a static code audit and an OS-level firewall/VM test, both reproducible yourself.",
};

export default function SecurityPage() {
  return <Verification />;
}
