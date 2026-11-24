import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOCALES } from "@/i18n/config";

// Shared link-preview image for every page and language. Kept in English:
// the built-in OG font only covers Latin script.
export const alt = "AirToolkit: 38 developer tools in one offline workspace for Windows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Prerender one copy per locale at build time instead of on each request.
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f0f4fc",
          background:
            "radial-gradient(ellipse at 85% -10%, #2b62c8 0%, transparent 55%), radial-gradient(ellipse at 0% 120%, #1e3d78 0%, transparent 50%), #0b1018",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="" style={{ borderRadius: 14 }} />
          <span style={{ fontSize: 40, fontWeight: 700 }}>AirToolkit</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            38 developer tools.
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, color: "#83b6ff" }}>
            One offline workspace.
          </span>
          <span style={{ marginTop: 28, fontSize: 30, color: "#b1becf" }}>
            JSON, regex, JWT, certificates and more. Zero network calls of its own.
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#92a1b7" }}>
          <span>Free for Windows · Microsoft Store</span>
          <span>airtoolkit.ayoubedahlouli.com</span>
        </div>
      </div>
    ),
    size,
  );
}
