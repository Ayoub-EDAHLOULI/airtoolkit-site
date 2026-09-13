import type { Metadata } from "next";
import ToolsShowcase from "@/components/ToolsShowcase";

export const metadata: Metadata = {
  title: "Tools — AirToolkit",
  description:
    "Placeholder description: browse all ~38 tools included in AirToolkit.",
};

export default function ToolsPage() {
  return <ToolsShowcase />;
}
