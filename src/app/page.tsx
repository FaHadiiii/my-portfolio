"use client";
import React, { useRef } from "react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import Dock from "@/components/Dock/Dock";
import {
  VscHome,
  VscAccount,
  VscTerminal,
  VscGroupByRefType,
} from "react-icons/vsc";
import Footer from "@/components/custom-footer";
import SkillsSection from "@/components/skill-section";
import ProjectsSection from "@/components/project-section";
import AboutSection from "@/components/about-section";
import HomeSection from "@/components/home-section";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const skillsref = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const footer = useRef<HTMLDivElement>(null!);

  //Scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    if (ref.current) {
      const offset = 140;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => scrollToSection(homeRef),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: () => scrollToSection(aboutRef),
    },
    {
      icon: <VscGroupByRefType size={18} />,
      label: "My Skills",
      onClick: () => scrollToSection(skillsref),
    },
    {
      icon: <VscTerminal size={18} />,
      label: "My Works",
      onClick: () => scrollToSection(projectsRef),
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Top Dock Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={65}
        />
      </div>

      {/* Home Section */}
      <HomeSection ref={homeRef} />

      {/* About Me Section */}
      <AboutSection ref={aboutRef} />

      {/* Skills Section */}
      <SkillsSection ref={skillsref} />

      {/* Projects Section */}
      <ProjectsSection ref={projectsRef} />

      {/* Footer */}
      <Footer ref={footer} />
    </ClickSpark>
  );
}
