import React, { ReactNode } from "react";
import PixelTransition from "./PixelTransition/PixelTransition";

interface PixelCardProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
}

const PixelCard: React.FC<PixelCardProps> = ({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = "#ffffff",
  animationStepDuration = 0.4,
  className = "custom-pixel-card",
}) => {
  return (
    <PixelTransition
      firstContent={firstContent}
      secondContent={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#111",
          }}
        >
          {secondContent}
        </div>
      }
      gridSize={gridSize}
      pixelColor={pixelColor}
      animationStepDuration={animationStepDuration}
      className={className}
    />
  );
};

export default PixelCard;
