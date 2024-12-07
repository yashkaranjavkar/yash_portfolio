import localFont from "next/font/local";
import { Esteban, Karla } from "next/font/google";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

import "./globals.css";

export const metadata = {
  title: "Yash Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
