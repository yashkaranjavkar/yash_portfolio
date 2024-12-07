"use client";
import { useRef, useState } from "react";
import { Cursor } from "@/components/motion-ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { MoveUpRight } from "lucide-react";
import { Projects, behance } from "@/lib/staticContent";

export default function Project() {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef(null);

  const handlePositionChange = (x, y) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <div style={{ fontFamily: "Karla, sans-serif" }} className="py-8">
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className="flex items-center justify-center rounded-[20px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex w-full items-center justify-center"
              >
                <div className="inline-flex items-center text-sm text-white dark:text-black">
                  More <MoveUpRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <div className="grid grid-cols-2 gap-x-4 pb-2 text-black">
        <h3 className="font-semibold text-xl">projects</h3>
        <h3 className="font-semibold text-xl">details</h3>
      </div>
      <Separator className="my-2 bg-black" />
      <div ref={targetRef} className="mt-4">
        {Projects.map((project) => (
          <div key={project.key}>
            <div
              onClick={() => window.open(project.link, "_blank")}
              className="grid grid-cols-2 items-center gap-x-4 py-6"
            >
              <h4 className="font-bold indent-3 text-purple-700 text-2xl">
                {project.title}
              </h4>
              <div className="text-gray-700 text-sm space-y-1">
                {project.details}
              </div>
            </div>
            <Separator className="my-1 bg-neutral-700" />
          </div>
        ))}
      </div>
      <div
        onClick={() => window.open(behance, "_blank")}
        className="mt-12 text-center underline"
      >
        see more
      </div>
    </div>
  );
}
