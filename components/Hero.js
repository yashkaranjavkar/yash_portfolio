import { ABOUT_MESSAGE_1, ABOUT_MESSAGE_2 } from "@/lib/staticContent";

export default function Hero() {
  return (
    <div
      style={{ fontFamily: "Esteban, serif" }}
      className="text-[40px] leading-[1.3] font-normal text-left mt-8 py-8"
    >
      <div className="">
        hey there , i am{" "}
        <span className=" text-[#671CAD]">yash karanjavkar.💫</span>
      </div>
      <div className="w-[850px]">{ABOUT_MESSAGE_1}</div>
      <div className="">{ABOUT_MESSAGE_2}</div>
    </div>
  );
}
