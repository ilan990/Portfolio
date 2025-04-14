import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({className, children, ...props}: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("bg-gray-500 text-gray-800 text-xs font-medium me-2 px-1.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300", className)} {...props}>{children}</span>
    );
}