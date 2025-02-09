import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const Vazir = Vazirmatn({
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-vazir-sans",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Nestplus",
  description: "زندگی مدرن با انتخابی هوشمندانه",
};

const { accessToken } = await auth();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ThemeProvider>
        <AuthProvider accessToken={accessToken || ""}>
          <body className={`${Vazir.variable}`}>{children}</body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
