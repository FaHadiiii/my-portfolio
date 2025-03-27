import { forwardRef } from "react";
import RotatingText from "./RotatingText/RotatingText";
import ImageSlider from "./slider";
import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { ForwardRefComponentNoProps } from "@/types/forward-ref";
export type ForwardRefComponentWithoutProps<T extends HTMLElement> =
  ForwardRefExoticComponent<PropsWithoutRef<{}> & RefAttributes<T>>;

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

const HomeSection: ForwardRefComponentNoProps<HTMLElement> = forwardRef(
  (props, ref) => {
    return (
      <section
        ref={ref}
        className="min-h-[80vh] md:min-h-screen flex flex-col items-center justify-around text-center max-w-4xl mx-auto"
      >
        <div></div>

        {/* Rotating Text Animation */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 pt-4 w-max">
            <RotatingText
              texts={["I am", "I create", "I develop", "I deliver"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-max font-bold text-2xl sm:text-3xl md:text-4xl"
              staggerFrom="first"
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
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          <p className="mt-4 text-lgl max-w-xl px-8 md:px-2">
            A passionate developer crafting innovative solutions at the
            intersection of design and technology.
          </p>
        </div>

        {/* Image Slider */}
        <div className="max-w-sm md:max-w-4xl">
          <ImageSlider images={images} width="150px" duration={40} />
        </div>
      </section>
    );
  }
);

HomeSection.displayName = "Home";

export default HomeSection;
