import { Section } from "./Section";
import { GithubIcon } from "../icons/GithubIcons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedinIcon } from "../icons/LinkedinIcons";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Ilan Assouline</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/ilan990"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 "
            )}
          >
            <GithubIcon size={16} className="text-foreground">
              {" "}
            </GithubIcon>
          </Link>

          <Link
            href="https://linkedin.com/in/ilanassouline"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 "
            )}
          >
            <LinkedinIcon size={16} className="text-foreground ">
              {" "}
            </LinkedinIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
