import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import LetterGlitch from "./LetterGlitch/LetterGlitch";

const Footer = forwardRef<HTMLElement, Record<string, never>>((props, ref) => {
  return (
    <section
      ref={ref}
      className="p-8 flex flex-col items-start justify-center max-w-4xl mx-auto pb-12"
    >
      <div className="w-full rounded-xl border-2 border-neutral-900 md:h-[35vh] h-[25vh] relative p-1 flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center gap-y-1 z-10">
          <Button className="flex items-center space-x-1 px-6 rounded-full">
            <div className="relative">
              <div className="absolute w-2 h-2 bg-lime-300 rounded-full animate-ping" />
              <div className="w-2 h-2 bg-lime-300 rounded-full relative" />
            </div>
            <span className="text-xs">Available for work</span>
          </Button>

          <p className="text-2xl text-neutral-200 pt-4 font-bold text-center">
            Let&apos;s create your idea, Together.
          </p>
        </div>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#0a0a0a", "#27272a", "#18181b"]}
        />
      </div>

      <div className="flex w-full flex-col md:flex-row md:justify-between my-4 items-center md:items-start space-y-4 md:space-y-0">
        <span className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Fakhrul Hadi. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/fakhrulhadi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
          </a>
          <a
            href="https://github.com/FaHadiiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
          </a>
          <a href="mailto:hadiayo39@gmail.com">
            <IconMail className="w-5 h-5 text-neutral-600 hover:text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
});

Footer.displayName = "Footer";

export default Footer;
