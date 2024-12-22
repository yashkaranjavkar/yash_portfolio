import Link from "next/link";
import { linkedIn, behance, instagram } from "@/lib/staticContent";

export default function Footer() {
  return (
    <div className="py-8">
      <div className="border-t border-black py-6 flex justify-between items-center">
        <Link href={"/"} className="text-4xl font-normal text-[#671CAD]">
          yk.
        </Link>
        <span
          style={{ fontFamily: "Karla, sans-serif" }}
          className="text-base text-black"
        >
          yash karanjavkar © 2024
        </span>
      </div>
      <div className="flex justify-between items-center mt-12 text-base text-black">
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
          send me memes on &gt;
          <a
            href={instagram}
            className="ml-1 underline"
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
