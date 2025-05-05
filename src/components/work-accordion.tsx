import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconLink, IconBrandGithub } from "@tabler/icons-react";
import { Button } from "./ui/button";

// Define the type for accordion items
interface AccordionItemProps {
  value: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  image?: string;
  techstack: string[];
  githubLink?: string;
  demoLink?: string;
  project_type: string;
}

// Define the component props
interface CustomAccordionProps {
  items: AccordionItemProps[];
  defaultOpen?: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items,
  defaultOpen,
}) => {
  const [openItem, setOpenItem] = useState<string | undefined>(defaultOpen);

  return (
    <div className="w-full space-y-2">
      {items.map((item) => (
        <Accordion
          key={item.value}
          type="single"
          collapsible
          value={openItem === item.value ? item.value : undefined}
          onValueChange={(value) => setOpenItem(value)}
          className="w-full rounded-xl border-2 border-neutral-900 px-6 py-2"
        >
          <AccordionItem value={item.value}>
            <AccordionTrigger className="flex items-center space-x-4 justify-between w-full hover:no-underline focus:no-underline">
              <div className="flex items-start space-x-6">
                {item.image && (
                  <img src={item.image} alt={item.title} className="h-8 w-8" />
                )}
                <div>
                  <span className="font-bold block text-neutral-300">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="text-sm text-neutral-600 block truncate w-[180px] md:w-full">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <span className="text-neutral-200 text-sm">{item.content}</span>
              <div className="h-6"></div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.techstack.map((tech, index) => (
                    <img
                      src={tech}
                      alt={item.title}
                      className="h-4 w-4 mr-2"
                      key={index}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    className="h-8 px-3 flex items-center space-x-2 bg-neutral-900 text-neutral-400 hover:text-white"
                    onClick={() => {
                      if (item.demoLink) {
                        window.open(item.demoLink, "_blank");
                      }
                    }}
                    disabled={!item.demoLink}
                    title={item.demoLink ? "View Demo" : "Link not available"}
                  >
                    <IconLink className="w-4 h-4" />
                    <span className="text-xs">Live Demo</span>
                  </Button>

                  <Button
                    className="w-8 h-8 space-x-2 flex items-center bg-neutral-900 text-neutral-400 hover:text-white"
                    onClick={() => {
                      if (item.githubLink) {
                        window.open(item.githubLink, "_blank");
                      }
                    }}
                    disabled={!item.githubLink}
                    title={
                      item.githubLink
                        ? "View on GitHub"
                        : "GitHub link not available"
                    }
                  >
                    <IconBrandGithub className="text-neutral-400 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;
