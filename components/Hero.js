import {
  HELLO_MESSAGE,
  ABOUT_MESSAGE_1,
  ABOUT_MESSAGE_2,
} from "@/lib/staticContent";

export default function Hero() {
  return (
    <div className="">
      <div className="mt-28 text-4xl sm:text-5xl lg:text-6xl ">
        <h2 className="leading-tight">
          {HELLO_MESSAGE}
          <span className="">⭐</span>
        </h2>
        <p className="mt-6">
          <span className="block">{ABOUT_MESSAGE_1}</span>
          <span className="block mt-4">{ABOUT_MESSAGE_2}</span>
        </p>
        <div className="mt-6 flex space-x-2">
          <span className="text-yellow-500">❊</span>
          <span className=" text-purple-500">⋆</span>
          <span className=" text-orange-500">✽</span>
          <span className=" text-blue-600">⋆</span>
          <span className="text-purple-500">✷</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <div>Scroll to see recently potted work ↓</div>
      </div>
    </div>
  );
}
