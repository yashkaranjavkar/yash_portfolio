import { Linkedin } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="py-8">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-8">
        <div className="text-xl font-bold">YASH</div>
        <div className="mt-4 sm:mt-0 text-center">
          <span className="text-gray-400">Lets work together.</span>
          <Link
            href="/contact"
            className="text-red-400 hover:text-red-500 ml-2 font-semibold"
          >
            Reach out
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
        <nav className="flex gap-6 text-lg">
          <Link href="/work" className="hover:underline">
            work
          </Link>
          <Link href="/about" className="hover:underline">
            about
          </Link>
          <Link href="/resume" className="hover:underline">
            resume
          </Link>
        </nav>
        <div className="mt-4 sm:mt-0">
          <Linkedin />
        </div>
      </div>
    </footer>
  );
}
