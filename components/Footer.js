import Link from "next/link";
import { email, linkedIn, behance, instagram } from "@/lib/staticContent";

export default function Footer() {
  return (
    <div className="py-8">
      <div
        style={{ fontFamily: "Esteban, serif" }}
        className="flex flex-col items-end mb-6"
      >
        <h2 className="text-4xl font-medium">what’s on your mind?</h2>
        <p className="text-4xl font-medium text-start">share with me</p>
        <Link
          style={{ fontFamily: "Karla, sans-serif" }}
          href={`mailto:${email}`}
          className="text-purple-600 text-xl mt-2 inline-block"
        >
          {">>> " + email}
        </Link>
      </div>
      <div className="border-t border-black py-6 flex justify-between items-center">
        <Link href={"/"} className="text-3xl text-purple-600">yk.</Link>
        <span
          style={{ fontFamily: "Karla, sans-serif" }}
          className="text-base text-black"
        >
          yash karanjavkar © 2024
        </span>
      </div>
      <div className="flex justify-between items-center mt-2 text-sm text-black">
        <div style={{ fontFamily: "Karla, sans-serif" }}>
          <Link
            href={linkedIn}
            className="mr-4 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
          <Link
            href={behance}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            behance
          </Link>
        </div>
        <div>
          share me memes on &gt;
          <a
            href={instagram}
            className="ml-1 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  );
}
