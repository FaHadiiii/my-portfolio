import { forwardRef } from "react";
import CustomAccordion from "./work-accordion";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import { ForwardRefComponentNoProps } from "@/types/forward-ref";

const accordionItems = [
  {
    value: "item-1",
    title: "Hustl: Job Hunting Tracker",
    subtitle: "Mobile application developed for job seekers",
    content:
      "Hustl is a mobile application developed with Flutter. The objective is to help job seekers to organize their job applications and enhance thir experience with AI Insights.",
    image: "/logo/figma.svg",
    techstack: [
      "/logo/figma.svg",
      "/logo/flutter.svg",
      "/logo/firebase.svg",
      "/logo/gcloud.svg",
    ],
  },
  {
    value: "item-2",
    title: "e-Portfolio",
    subtitle: "Personal portfolio website",
    content:
      "Website developed witth Next.js as a personal portfolio to showcase my skills and projects.",
    image: "/logo/firebase.svg",
    techstack: [
      "/logo/figma.svg",
      "/logo/flutter.svg",
      "/logo/firebase.svg",
      "/logo/gcloud.svg",
    ],
  },
  {
    value: "item-3",
    title: "Childcare Digital Book",
    subtitle: "Mobile application for childcare and infants checkup",
    content:
      "Childcare digital book is a mobile application developed as my bachelor's final year project. Developed using Flutter aims to help digitalize childcare and infants checkup.",
    image: "/logo/reactjs.svg",
    techstack: [
      "/logo/figma.svg",
      "/logo/flutter.svg",
      "/logo/firebase.svg",
      "/logo/gcloud.svg",
    ],
  },
  {
    value: "item-4",
    title: "ARJirim",
    subtitle: "Science learning mobile application",
    content:
      "ARJIrim is a mobile application developed as my diplomas's final year project. Developed using Unity 3D aims to help standard fourth graders to learn matter topic interactively.",
    image: "/logo/flutter.svg",
    techstack: [
      "/logo/figma.svg",
      "/logo/flutter.svg",
      "/logo/firebase.svg",
      "/logo/gcloud.svg",
    ],
  },
];

const ProjectsSection: ForwardRefComponentNoProps<HTMLElement> = forwardRef(
  (props, ref) => {
    return (
      <section
        ref={ref}
        className="min-h-screen p-8 flex items-start justify-center max-w-4xl mx-auto mt-16 md:mt-30"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-16"
          >
            My Works
          </ScrollFloat>

          <div className="flex flex-col gap-4 w-full">
            <CustomAccordion items={accordionItems} defaultOpen="item-1" />
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
