import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SideProjectProps = {
    url: string;
    logo: LucideIcon;
    title: string;
    description: string;
  };
  
  export const SideProject = (props: SideProjectProps) => {
    return (
      <Link
        href={props.url || "/"}
        className="inline-flex items-center gap-2 hover:bg-[hsl(var(--accent))] transition-colors p-1 rounded duration-200"
      >
        <span className="bg-[hsl(var(--accent))] text-accent-foreground p-4 rounded-md">
          <props.logo size={16} className="h-5 w-5" />
        </span>
        <div className=" w-full p-2 rounded-md">
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </Link>
    );
  };