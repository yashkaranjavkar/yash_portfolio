import AnimatedBackground from "@/components/motion-ui/AnimatedBackground";
import { TABS } from "@/lib/staticContent";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row space-x-4 sm:space-x-6">
      {TABS.map((tab, index) => (
        <Link key={index} href={tab.href} className={``}>
          <AnimatedBackground
            defaultValue={TABS[0].page}
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
          >
            <button
              key={index}
              data-id={tab.page}
              type="button"
              className={`px-2 py-1 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-zinc-50`}
            >
              {tab.page}
            </button>
          </AnimatedBackground>
        </Link>
      ))}
    </div>
  );
}
