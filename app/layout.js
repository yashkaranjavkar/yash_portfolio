import Header from "@/components/Header";
import Footer from "@/components/Footer";


import "./globals.css";

export const metadata = {
  title: "Yash Karanjavkar",
  description:
    "Professional portfolio of Yash Karanjavkar showcasing Unique Designs, Art and Engineering",
  keywords:
    "Yash, Yash Karanjavkar, portfolio, Designer, Interactive Designer, IIT Bombay, M. Des",
  icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "Yash Karanjavkr" }],
  openGraph: {
    title: "Yash Karanjavkar",
    description:
      "Professional portfolio of Yash Karanjavkar showcasing Unique Designs, Art and Engineering",
    url: "https://yashgk.com",
    siteName: "Yash Karanjavkar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Karanjavkar",
    description:
      "Professional portfolio of Yash Karanjavkar showcasing Unique Designs, Art and Engineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yash",
              url: "https://yashgk.com",
              jobTitle: "Designer",
            }),
          }}
        />
      </head>
      <body className={`bg-white px-6 md:px-64 antialiased`}>
        <header
          style={{ fontFamily: '"MS Reference Sans Serif", sans-serif' }}
          className="bg-white sticky top-0 z-50 py-10"
        >
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

// maintain same spacing between components
// Level photo in about
