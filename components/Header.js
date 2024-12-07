"use client";
import { useState } from "react";
import AnimatedBackground from "@/components/motion-ui/AnimatedBackground";
import { TABS } from "@/lib/staticContent";
import Link from "next/link";

export default function Header() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="text-4xl font-normal text-[#671CAD]">
        yk.
      </Link>
      <div className="flex flex-row space-x-4 sm:space-x-6">
        {TABS.map((tab, index) => (
          <Link key={index} href={tab.href} className={``}>
            <AnimatedBackground
              defaultValue={TABS[0].page}
              onValueChange={(id) => setActiveTab(id)}
              className="rounded-lg dark:bg-zinc-800"
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
                className={`px-2 py-1 text-base font-normal hover:underline transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50 `}
              >
                {activeTab == tab.page ? (
                  <div className="text-[#671CAD] underline">{tab.page}</div>
                ) : (
                  <div className="text-black">{tab.page}</div>
                )}
              </button>
            </AnimatedBackground>
          </Link>
        ))}
      </div>
    </div>
  );
}
