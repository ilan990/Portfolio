/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code } from "lucide-react";
import { Client } from "get-pinned-repos";
import { Key } from "react";
import { ContactCard } from "./ContactCard";
import { SideProject } from "./SideProject";
import { Work, WORK } from "./work";
import { env } from "process";

Client.setToken(env.GITHUB_TOKEN);
const pinned = await Client.getPinnedRepos("ilan990");

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-6">
      <div className="flex-[3] flex flex-col gap-4 w-full">
        <Card className="p-4 bg-dark-gray flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground w-full">Fun projects</p>
          <div className="flex flex-col gap-2">
            {pinned.map(
              (
                project: { name: string; description: string; url: string },
                index: Key | null | undefined
              ) => (
                <SideProject
                  key={index}
                  logo={Code}
                  title={project.name}
                  description={project.description}
                  url={project.url}
                />
              )
            )}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground w-full">WORK</p>
          <div className="flex flex-col gap-2">
            {WORK.map((project, index) => (
              <Work
                key={index}
                Image={project.Image}
                title={project.title}
                role={project.role}
                date={project.date}
                url={project.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez moi</p>
          <ContactCard
            name="@Ilanassouline"
            image="https://media.licdn.com/dms/image/v2/D4E35AQFH3iIF5phsiw/profile-framedphoto-shrink_400_400/B4EZWQIPlyGgAc-/0/1741879835279?e=1744815600&v=beta&t=IPKD23_FF-gkk-L0sZw1oto8iMtxYhyYEo0PIJouuK0"
            MediumImage="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
            description="My linkedin account"
            url="https://www.linkedin.com/in/ilanassouline/"
          />
        </Card>
      </div>
    </Section>
  );
};

