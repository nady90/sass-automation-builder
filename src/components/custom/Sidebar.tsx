"use client";

import { MENU_OPTIONS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { Home01Icon } from "@hugeicons/core-free-icons";

export default function Sidebar() {
  const pathname = usePathname();
  console.log("🚀 ~ Sidebar ~ pathname:", pathname);

  return (
    <div className="p-5 border-r border-gray-300">
      <ul className="flex flex-col items-center gap-y-8">
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/"}>
                <HugeiconsIcon className="text-blue-500" icon={Home01Icon} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>
        </li>
        {MENU_OPTIONS.map((option, index) => {
          return (
            <li key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={option.href}>
                    <HugeiconsIcon
                      className={cn(
                        pathname === option.href
                          ? "text-red-500"
                          : "text-blue-500",
                      )}
                      icon={option.icon}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{option.name}</TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
