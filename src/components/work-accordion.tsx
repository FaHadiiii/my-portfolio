import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the type for accordion items
interface AccordionItemProps {
  value: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  image?: string;
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
          className="w-full rounded-xl border-2 border-neutral-800 px-6 py-2"
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
                    <span className="text-sm text-neutral-600">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;
