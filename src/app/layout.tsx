import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { auth } from "@/lib/session";
import AuthProvider from "@/providers/AuthProvider";
import { CartStoreProvider } from "@/providers/CartProvider";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <html
      lang="fa"
      dir="rtl"
      style={{ colorScheme: "light" }}
      className="light"
    >
      <body className={`${Vazir.variable}`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <AuthProvider accessToken={accessToken || ""}>
            <CartStoreProvider>{children}</CartStoreProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
