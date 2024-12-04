import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
    <div className="mx-auto min-h-screen max-w-2xl overflow-x-hidden px-3 py-9 sm:py-16 md:overflow-x-visible">
      <div className="flex justify-between items-center font-medium">
        <div className="text-lg">Yash</div>
        <Header />
      </div>
    </div>
      <div className="min-h-screen bg-cream px-6 md:px-12 lg:px-24 py-10 text-green">
        {/* Header */}
        <header className="flex justify-between items-center font-medium">
          <h1 className="text-lg">CRLCHU</h1>
          <nav className="space-x-6">
            <a href="#design" className="hover:underline">
              Design
            </a>
            <a href="#podcast" className="hover:underline">
              Podcast
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#resume" className="hover:underline">
              Resume
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mt-20 text-green">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            Aloe there, I’m Carol Chu.{" "}
            <span className="text-yellow-500">★</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl">
            <span className="inline-block">
              🌸 A designer who thrives in collaborative and playful spaces.
            </span>
            <span className="block mt-4">
              🌟 Growing human-centric tools, a community of budding designers,
              and a vibrant garden.
            </span>
          </p>
          <div className="mt-6 flex space-x-2 text-2xl">
            <span>✿</span>
            <span>✱</span>
            <span>✴</span>
            <span>✸</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-green">
          <p>Scroll to see recently potted work ↓</p>
        </footer>
      </div>
    </div>
  );
}
