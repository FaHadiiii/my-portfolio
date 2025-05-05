import { forwardRef } from "react";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import PixelCard from "./pixel-card";
import { IconCode } from "@tabler/icons-react";

type Skill = {
  skill_name: string;
  skill_description: string;
  stack_pic: string[];
};

type Props = {
  skillsData: Skill[];
};

const SkillsSection = forwardRef<HTMLElement, Props>(({ skillsData }, ref) => {
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
          {skillsData.map((skill, index) => (
            <PixelCard
              key={index}
              firstContent={
                <div className="w-full h-full relative">
                  <img
                    src={
                      skill.skill_name.includes("Front")
                        ? "/fe.jpg"
                        : skill.skill_name.includes("Back")
                        ? "/be.jpg"
                        : "/mob.jpg"
                    }
                    className="w-full h-full object-cover"
                    alt={skill.skill_name}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center"></div>
                  <div className="absolute inset-0 bg-transparent opacity-100 flex items-center justify-center">
                    <p className="text-neutral-400 text-xs font-semibold text-center bg-neutral-900 px-5 py-3 rounded-sm mb-5 md:mb-0">
                      {skill.skill_name.split(" ").join(" ")}{" "}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-7 p-2 items-center mb-4">
                    {Object.values(skill.stack_pic).map((logo, i) => (
                      <img key={i} src={logo} className="h-5 object-cover" />
                    ))}
                  </div>
                </div>
              }
              secondContent={
                <div>
                  <div className="flex items-center justify-center pb-6">
                    <IconCode />
                  </div>
                  <p className="text-white text-sm font-bold text-center">
                    {skill.skill_name}
                  </p>
                  <p className="text-neutral-400 text-xs text-center px-6 mt-4">
                    {skill.skill_description}
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="h-[25vh] md:h-full !border-neutral-900"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
