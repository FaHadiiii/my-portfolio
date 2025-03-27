import { forwardRef } from "react";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import PixelCard from "./pixel-card";
import { IconCode } from "@tabler/icons-react";

const SkillsSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex items-start justify-center p-4 mt-16 md:mt-12 sm:p-8 max-w-4xl mx-auto"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6"
        >
          My Skills
        </ScrollFloat>
        <div className="flex flex-col md:flex-row gap-6 mt-10 max-w-4xl px-9">
          <PixelCard
            firstContent={
              <div className="w-full h-full relative">
                <img
                  src="/fe.jpg"
                  className="w-full h-full object-cover"
                  alt="Front End Development"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-neutral-400 text-xs font-semibold text-center bg-neutral-900 px-5 py-3 rounded-sm">
                    Front End <br />
                    Development
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 items-center gap-4 mb-4">
                  <img src="/logo/reactjs.svg" className="h-5 object-cover" />
                  <img src="/logo/nextjs.svg" className="h-2 object-cover" />
                  <img src="/logo/shadcnui.svg" className="h-5 object-cover" />
                </div>
              </div>
            }
            secondContent={
              <div>
                <div className="flex items-center justify-center pb-6">
                  <IconCode />
                </div>
                <p className="text-white text-sm font-bold text-center">
                  Front End Development
                </p>
                <p className="text-neutral-400 text-xs text-center px-6 mt-4">
                  I just started learning front-end development, currently
                  studying Next.js and React.js.
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="h-[30vh] md:h-full !border-neutral-900"
          />
          <PixelCard
            firstContent={
              <div className="w-full h-full">
                <img
                  src="/be.jpg"
                  className="w-full h-full object-cover"
                  alt="Back End Development"
                />
                <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center"></div>
                <div className="absolute inset-0 bg-transparent opacity-100 flex items-center justify-center">
                  <p className="text-neutral-400 text-xs font-semibold text-center bg-neutral-900 px-5 py-3 rounded-sm">
                    Back End <br />
                    Development
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 items-center gap-6 mb-4">
                  <img src="/logo/nodejs.svg" className="h-5 object-cover" />
                  <img src="/logo/gcloud.svg" className="h-3.5 object-cover " />
                  <img src="/logo/mysql.svg" className="h-5 object-cover" />
                </div>
              </div>
            }
            secondContent={
              <div>
                <div className="flex items-center justify-center pb-6">
                  <IconCode />
                </div>
                <p className="text-white text-sm font-bold text-center">
                  Back End Development
                </p>
                <p className="text-neutral-400 text-xs text-center px-6 mt-4">
                  I just started learning back-end development, currently
                  learning Node.js and Express.js.
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="h-[30vh] md:h-full !border-neutral-900"
          />
          <PixelCard
            firstContent={
              <div className="w-full h-full">
                <img
                  src="/mob.jpg"
                  className="w-full h-full object-cover"
                  alt="Mobile Development"
                />
                <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center"></div>
                <div className="absolute inset-0 bg-transparent opacity-100 flex items-center justify-center">
                  <p className="text-neutral-400 text-xs font-semibold text-center bg-neutral-900 px-5 py-3 rounded-sm">
                    Mobile <br />
                    Development
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-2 items-center gap-6 mb-4">
                  <img src="/logo/flutter.svg" className="h-5 object-cover" />
                  <img src="/logo/dart.svg" className="h-3.5 object-cover " />
                  <img src="/logo/firebase.svg" className="h-5 object-cover" />
                </div>
              </div>
            }
            secondContent={
              <div>
                <div className="flex items-center justify-center pb-6">
                  <IconCode />
                </div>
                <p className="text-white text-sm font-bold text-center">
                  Mobile Development
                </p>
                <p className="text-neutral-400 text-xs text-center px-6 mt-4">
                  I have experience working with Flutter, Firebase, and REST
                  APIs.
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="h-[30vh] md:h-full !border-neutral-900"
          />
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
