import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NodeJsIcon } from "../icons/NodeJsIcons";
import { ReactIcon } from "../icons/ReactIcons";
import { Code } from "./Code";
import { SymfonyIcon } from "../icons/SymfonyLogo";

export const Skills = () => {
  return (
    <Section className="flex items-start flex-col gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <SymfonyIcon size={42}></SymfonyIcon>
          <h3 className="text-2xl font-semibold tracking-tight ">Symfony</h3>
          <p className="text-sm text-muted-foreground ">
            Mon Framework Back-end de prédilection est <Code>Symfony</Code>{" "}
            <br />
            Je l&apos;utilise énormément en entreprise.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          ></ReactIcon>
          <h3 className="text-2xl font-semibold tracking-tight ">React</h3>
          <p className="text-sm text-muted-foreground ">
            Mon Framework front principal est <Code>React</Code> <br />
            J&apos;utilise aussi <Code>NextJs</Code> en tant que framework
            front-end et backend
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <NodeJsIcon size={42}></NodeJsIcon>
          <h3 className="text-2xl font-semibold tracking-tight ">NodeJs</h3>
          <p className="text-sm text-muted-foreground ">
            J&apos;aime beaucoup <Code>NodeJs</Code>par sa simplicité
            d&apos;écriture
          </p>
        </div>
      </div>
    </Section>
  );
};
