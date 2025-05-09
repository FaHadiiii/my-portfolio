import { forwardRef } from "react";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import TiltedCard from "./TiltedCard/TiltedCard";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import GlassIcons from "./GlassIcons/GlassIcons";
import CountUp from "./CountUp/CountUp";
import { FiBook, FiFileText } from "react-icons/fi";
import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
export type ForwardRefComponentWithoutProps<T extends HTMLElement> =
  ForwardRefExoticComponent<PropsWithoutRef<{}> & RefAttributes<T>>;

const icon1 = [
  { icon: <FiFileText className="text-lime-300" />, color: "lime" },
];

const icon2 = [{ icon: <FiBook className="text-lime-300" />, color: "lime" }];

type AboutMeData = {
  description: string;
  pic_url: string;
};

type CertificationsData = {
  cert_name: string;
  issuer: string;
  year: string;
}[];

type ProjectsData = {
  project_name: string;
  project_short_desc: string;
}[];

type Props = {
  aboutMeData: AboutMeData;
  certificationsData: CertificationsData;
  projectsData: ProjectsData;
};

const AboutSection = forwardRef<HTMLElement, Props>(
  ({ aboutMeData, certificationsData, projectsData }, ref) => {
    // useEffect(() => {
    //   console.log(aboutMeData);
    //   console.log(certificationsData);
    // }, []);

    return (
      <section
        ref={ref}
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
            {/* Profile Image Card */}
            <div className="md:w-1/3 flex justify-center md:ml-4">
              <TiltedCard
                imageSrc={aboutMeData.pic_url}
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

            {/* About Me Text + Stats */}
            <div className="md:w-2/3 flex flex-col gap-8 md:gap-6 justify-between">
              <div className="text-center md:text-justify px-6 md:px-4 rounded-lg">
                {aboutMeData.description}
                <br />
                <br />
                Let’s connect, create, and build something amazing together!
              </div>

              {/* Spotlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 md:px-4">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(139, 250, 3, 0.25)"
                >
                  <div className="flex items-center justify-between w-full">
                    <GlassIcons items={icon1} className="custom-class" />
                    <div className="flex flex-col items-end">
                      <span className="text-neutral-600 text-xs">
                        Certifications
                      </span>
                      <CountUp
                        from={0}
                        to={certificationsData.length}
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
                        to={projectsData.length}
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
    );
  }
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
