import { Esteban, Karla } from "next/font/google";
import Header from "@/components/Header";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

import "./globals.css";

export const metadata = {
  title: "Yash Portfolio",
  description: "",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white px-6 md:px-64 antialiased`}>
        {/* Header */}
        <div
          style={{ fontFamily: '"MS Reference Sans Serif", sans-serif' }}
          className="bg-white sticky top-0 z-50 py-10"
        >
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
