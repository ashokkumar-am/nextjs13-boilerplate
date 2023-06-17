import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashok - Next JS - 13 BoilerPlate",
  description: "by Ashok",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
