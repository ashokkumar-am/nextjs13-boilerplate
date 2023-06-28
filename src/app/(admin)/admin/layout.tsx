import "../../(site)/globals.css";

import AdminFooter from "@/components/admin/Footer/AdminFooter";
import AdminNavbar from "@/components/admin/Navbar/AdminNavbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin - Next JS - 13 BoilerPlate",
  description: "by Ashok",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminNavbar/>
        {children}
        <AdminFooter/>
        </body>
    </html>
  );
}
