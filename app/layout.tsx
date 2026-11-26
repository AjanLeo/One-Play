import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONE PLAY — Your people. Your play.",
  description: "Sesli odalar, arkadaşlar ve çok oyunculu oyunlar. Tek bir dünyada buluş.",
  applicationName: "ONE PLAY",
  appleWebApp: { capable: true, title: "ONE PLAY", statusBarStyle: "black-translucent" }
};
export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 1, themeColor: "#090909"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}