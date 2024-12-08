import Image from "next/image";
import { TextLoop } from "@/components/motion-ui/TextLoop";

export default function About() {
  return (
    <div style={{ fontFamily: "Karla, sans-serif" }} className="text-black">
      <h1 className="font-medium text-4xl">
        <TextLoop>
          <span>नमस्कार! 🙏</span>
          <span>hello! 👋</span>
          <span>what up! 🤜</span>
          <span>kya bolte! 🤟</span>
        </TextLoop>
        what up! kya bolte!
      </h1>

      <div className="flex items-start gap-6">
        <div className="font-thin text-lg" style={{ flex: 2 }}>
          <div className="mt-5">
            Student of Masters in Interaction Design at IDC School of Design,
            IIT Bombay. It has been a roller coaster ride to shift my discipline
            from learning mechanical engineering to now getting into interaction
            design. I have used my engineering logic and designer imagination in
            executing diverse projects while doing my Masters at IDC.
          </div>
          <div className="mt-5">
            From interface design to user studies, from AI in design to
            interactive installations, designing tangible user interfaces to
            human factors. Currently, I am interested in the playful field of
            designing tabletop games. In 2024, I am designing 3 games, of which
            2 won international awards.
          </div>
          <div className="mt-5">
            Completed Mechanical Engineering under Mumbai University (2023) and
            have worked on a few design engineering projects.
          </div>
          <div className="mt-5">
            Interested in listening and making songs. I write lyrics and compose
            songs on my guitar. I love to tell stories. I also write poems in
            Hindi, English, and Marathi.
          </div>
          <div className="mt-5">
            I am a physics enthusiast. I love to read almost all kinds of books
            and like to be updated on social media. I love to watch, make, and
            share memes.
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Image
            src="/yash.png"
            alt="Profile"
            width={300}
            height={300}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
