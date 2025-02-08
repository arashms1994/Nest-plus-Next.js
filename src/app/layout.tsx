import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const Vazir = Vazirmatn({
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-vazir-sans",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Nest PLUS",
  description: "زندگی مدرن با انتخابی هوشمندانه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ThemeProvider>
        <body className={`${Vazir.variable}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
