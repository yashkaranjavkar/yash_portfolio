import { Esteban, Karla } from "next/font/google";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
