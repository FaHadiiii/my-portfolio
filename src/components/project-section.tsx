import { forwardRef, useEffect } from "react";
import CustomAccordion from "./work-accordion";
import ScrollFloat from "./ScrollFloat/ScrollFloat";

type Projects = {
  project_name: string;
  project_short_desc: string;
  tech_stack: string[];
  project_desc: string;
  project_links: {
    github: string;
    demo: string;
  };
  project_type: string;
  project_pic: string;
};

type Props = {
  projectsData: Projects[];
};

const ProjectsSection = forwardRef<HTMLElement, Props>(
  ({ projectsData }, ref) => {
    useEffect(() => {
      console.log(projectsData);
    }, [projectsData]);

    const accordionItems = projectsData.map((project, index) => ({
      value: `item-${index + 1}`,
      title: project.project_name,
      subtitle: project.project_short_desc,
      content: project.project_desc,
      image: project.project_pic,
      techstack: Object.values(project.tech_stack),
      githubLink: project.project_links?.github ?? null,
      demoLink: project.project_links?.demo ?? null,
    }));

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
