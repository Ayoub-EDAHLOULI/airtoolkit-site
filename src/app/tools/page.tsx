import type { Metadata } from "next";
import ToolsShowcase from "@/components/ToolsShowcase";

export const metadata: Metadata = {
  title: "Tools — AirToolkit",
  description:
    "Browse all 39 tools included in AirToolkit, from JSON formatting to certificate generation, organized by category.",
};

export default function ToolsPage() {
  return <ToolsShowcase />;
}
