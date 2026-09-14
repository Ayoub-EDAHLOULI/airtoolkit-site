import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — AirToolkit",
  description:
    "Why AirToolkit exists: built by a security engineer who needed offline dev tools for locked-down VMs, and couldn't find any that actually were.",
};

export default function AboutPage() {
  return <About />;
}
