import ThemeProvider from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const Vazir = Vazirmatn({
  variable: "--font-vazir-sans",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Nest PLUS",
  description: "خانه ای مدرن با انتخابی هوشمندانه",
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
