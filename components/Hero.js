import { ABOUT_MESSAGE_1, ABOUT_MESSAGE_2 } from "@/lib/staticContent";

export default function Hero() {
  return (
    <div
      style={{ fontFamily: "Esteban, serif" }}
      className="text-[48px] font-normal text-left mt-8 py-10"
    >
      <h2 className="">
        hey there , i am{" "}
        <span className=" text-[#671CAD]">yash karanjavkar. 💫</span>
      </h2>
      <span className="">{ABOUT_MESSAGE_1}</span>
      <br />
      <span className=" mt-4">{ABOUT_MESSAGE_2}</span>
    </div>
  );
}
