import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";
import Navigationbar from "@/components/ui/navigationbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import ShoppingBag from "@/components/ui/shoppingbag";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zwelihle Ecommerce Store",
  description: "E-Commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigationbar />
          <ModalProvider/>
          <ToastProvider/>
          {children}
          <ShoppingBag/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
