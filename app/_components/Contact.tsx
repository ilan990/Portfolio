/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-2 ">
      <Badge variant={"outline"}>Contactez moi</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tighter">
        Je serai ravi de travailler avec vous
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <Card className="p-3 flex !flex-row hover:bg-[hsl(var(--accent))] transition-colors items-center w-full justify-between gap-3 group">
          <ContactCard
            name="@Ilanassouline"
            image="https://ilanassouline.vercel.app/_next/image?url=%2Fimg%2FProfile.png&w=384&q=75"
            MediumImage="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
            description="My linkedin account"
            url="https://www.linkedin.com/in/ilanassouline/"
          />
        </Card>
        <Card className="p-3 flex !flex-row hover:bg-[hsl(var(--accent))] transition-colors items-center w-full justify-between gap-3 group">
          <ContactCard
            name="ilanassoulinepro@gmail.com"
            image="https://lh3.googleusercontent.com/a/ACg8ocLmcrdaxNRRZkSF0AOoKMUZAAqHB5IO1MglnDsqgAFK-AH_Dz4=s192-c-rg-br100"
            MediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
            description="My Gmail account"
            url="mailto:ilanassoulinepro@gmail.com"
          />
        </Card>
      </div>
    </Section>
  );
};
