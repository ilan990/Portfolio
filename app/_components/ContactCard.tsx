/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    MediumImage: string;
    name: string;
    description: string;
    url?: string;
    className?: string;
  }) => {
    return (
      <Link
        href={props.url}
        className="p-3 flex !flex-row hover:bg-[hsl(var(--accent))] transition-colors items-center w-full justify-between gap-3 group"
      >
        
        <div className="relative flex-shrink-0">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src={props.MediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        />
      
      </Link>
    );
  };
  