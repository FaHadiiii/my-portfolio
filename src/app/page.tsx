"use client";
import React, { useRef } from "react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import Dock from "@/components/Dock/Dock";
import RotatingText from "@/components/RotatingText/RotatingText";
import {
  VscHome,
  VscAccount,
  VscTerminal,
  VscGroupByRefType,
} from "react-icons/vsc";
import ImageSlider from "@/components/slider";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { FiBook, FiFileText } from "react-icons/fi";
import GlassIcons from "@/components/GlassIcons/GlassIcons";
import CountUp from "@/components/CountUp/CountUp";
import CustomAccordion from "@/components/work-accordion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import LetterGlitch from "@/components/LetterGlitch/LetterGlitch";
import { Button } from "@/components/ui/button";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const timelineRef = useRef<HTMLDivElement>(null!);
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
      label: "Timeline",
      onClick: () => scrollToSection(timelineRef),
    },
    {
      icon: <VscTerminal size={18} />,
      label: "Projects",
      onClick: () => scrollToSection(projectsRef),
    },
  ];

  const accordionItems = [
    {
      value: "item-1",
      title: "Hustl: Job Hunting Tracker",
      subtitle: "Mobile application developed for job seekers",
      content: "",
      image: "/logo/figma.svg",
    },
    {
      value: "item-2",
      title: "e-Portfolio",
      subtitle: "Personal portfolio website",
      content: "",
      image: "/logo/firebase.svg",
    },
    {
      value: "item-3",
      title: "Childcare Digital Book",
      subtitle: "Mobile application for childcare and infants checkup",
      content: "",
      image: "/logo/reactjs.svg",
    },
    {
      value: "item-4",
      title: "ARJirim",
      subtitle: "Science learning mobile application",
      content: "",
      image: "/logo/flutter.svg",
    },
  ];

  const icon1 = [
    { icon: <FiFileText className="text-lime-300" />, color: "lime" },
  ];

  const icon2 = [{ icon: <FiBook className="text-lime-300" />, color: "lime" }];

  const images = [
    "/logo/analytics.svg",
    "/logo/dart.svg",
    "/logo/figma.svg",
    "/logo/firebase.svg",
    "/logo/flutter.svg",
    "/logo/flutterflow.svg",
    "/logo/gcloud.svg",
    "/logo/github.svg",
    "/logo/gitlab.svg",
    "/logo/laravel.svg",
    "/logo/mysql.svg",
    "/logo/nextjs.svg",
    "/logo/nodejs.svg",
    "/logo/postman.svg",
    "/logo/reactjs.svg",
    "/logo/render.svg",
    "/logo/shadcnui.svg",
    "/logo/supabase.svg",
    "/logo/tailwindcss.svg",
    "/logo/typescript.svg",
    "/logo/vscode.svg",
    "/logo/wordpress.svg",
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
      <section
        ref={homeRef}
        className="min-h-screen flex flex-col items-center justify-around text-center max-w-4xl mx-auto"
      >
        <div></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 pt-4 w-max">
            <RotatingText
              texts={["I am", "I create", "I develop", "I deliver"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-max font-bold text-2xl sm:text-3xl md:text-4xl"
              staggerFrom={"first"}
              initial={{ y: "-120%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <RotatingText
              texts={["Fakhrul Hadi", "Design", "Code", "Product"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-lime-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-max font-bold text-2xl sm:text-3xl md:text-4xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          <p className="mt-4 text-lgl max-w-xl px-2">
            A passionate developer crafting innovative solutions at the
            intersection of design and technology.
          </p>
        </div>
        <div className="max-w-sm md:max-w-4xl">
          <ImageSlider images={images} width="150px" duration={40} />
        </div>
      </section>

      {/* About Me Section */}
      <section
        ref={aboutRef}
        className="flex items-start justify-center p-4 mt-8 sm:p-8 max-w-4xl mx-auto"
      >
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6"
            >
              About Me
            </ScrollFloat>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex justify-center">
              <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                containerHeight="100%"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            <div className="md:w-2/3 flex flex-col gap-8 md:gap-6  justify-between">
              <div className="text-center md:text-justify px-6 md:px-4 rounded-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 md:px-4">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(139, 250, 3, 0.25)"
                >
                  <div className="flex items-center justify-between w-full">
                    <GlassIcons items={icon1} className="custom-class" />
                    <div className="flex flex-col items-end">
                      <span className="text-neutral-600 text-xs">Awards</span>
                      <CountUp
                        from={0}
                        to={5}
                        separator=","
                        direction="up"
                        duration={0.3}
                        className="count-up-text font-bold text-2xl"
                      />
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(139, 250, 3, 0.25)"
                >
                  <div className="flex items-center justify-between w-full">
                    <GlassIcons items={icon2} className="custom-class" />
                    <div className="flex flex-col items-end">
                      <span className="text-neutral-600 text-xs">Projects</span>
                      <CountUp
                        from={0}
                        to={4}
                        separator=","
                        direction="up"
                        duration={0.3}
                        className="count-up-text font-bold text-2xl"
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
          <div className="h-0 md:h-16" />
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="min-h-screen flex items-start justify-center p-4 mt-16 md:mt-12 sm:p-8 max-w-4xl mx-auto"
      >
        <div className="flex justify-center mb-8">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6"
          >
            My Timeline
          </ScrollFloat>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="min-h-screen p-8 flex items-start justify-center max-w-4xl mx-auto"
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

      {/* Footer */}
      <section
        ref={footer}
        className="p-8 flex flex-col items-start justify-center max-w-4xl mx-auto pb-12"
      >
        <div className="w-full rounded-xl border-2 border-neutral-900 md:h-[35vh] h-[25vh] relative p-1 flex flex-col items-center justify-center">
          <div className="absolute flex flex-col items-center gap-y-1 z-10">
            <Button className="flex items-center space-x-1 px-6 rounded-full">
              <div className="w-2 h-2 bg-lime-300 rounded-full" />
              <span className="text-xs">Available for work</span>
            </Button>
            <p className="text-2xl text-neutral-200 pt-4 font-bold text-center">
              Lets create your idea, Together.
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
            © 2025 Fakhrul Hadi. All rights reserved.
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
    </ClickSpark>
  );
}
