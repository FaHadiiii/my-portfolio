import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  customClass?: string;
  color?: string; // New optional color prop
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  return (
    <div className={`grid overflow-visible ${className || ""}`}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`relative bg-transparent outline-none w-[3em] h-[3em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
            item.customClass || ""
          }`}
        >
          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[0.8em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[3em] h-[3em] flex items-center justify-center"
              aria-hidden="true"
              style={{ color: item.color }}
            >
              {item.icon}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
