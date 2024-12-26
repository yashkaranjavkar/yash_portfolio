import { Esteban } from "next/font/google";
import { ABOUT_MESSAGE_1, ABOUT_MESSAGE_2 } from "@/lib/staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div
      className={`${esteban.className} text-[40px] leading-[1.3] font-normal text-left mt-8 py-8`}
    >
      <div className="">
        hey there , i am{" "}
        <span className=" text-[#671CAD]">yash karanjavkar.💫</span>
      </div>
      <div className="">{ABOUT_MESSAGE_1}</div>
      <div className="">{ABOUT_MESSAGE_2}</div>
    </div>
  );
}
