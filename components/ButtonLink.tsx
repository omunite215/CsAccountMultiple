import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
type Props = {
  href: string;
  toolTipContent: string;
};
const ButtonLink = ({ href, toolTipContent }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <a href={href} download>
              <Download/>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{toolTipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonLink;
