/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-6">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl mb-4">Ilan Assouline</h2>
        <h3 className="text-3xl font-caption">
          Developpeur Web & créateur de sourire
        </h3>
        <p className="text-base">
          Passionné par le développement de solutions web robustes et élégantes,
          je conçois des applications performantes avec <Code>Symfony</Code> et{" "}
          <Code>React</Code>. Mon expertise s&apos;étend de l&apos;architecture
          backend à l&apos;optimisation des interfaces utilisateur, en passant
          par l&apos;amélioration de la visibilité en ligne des entreprises.
        </p>
        <p className="text-base">
          En dehors du code, je m&apos;exprime à travers la{" "}
          <Code>photographie</Code>, capturant des moments comme je capture des
          solutions techniques - avec précision et créativité.
        </p>
      </div>
      <div className="flex-[2] flex justify-center">
        <Image
          src="/img/profile.png"
          width={300}
          height={300}
          alt="Ilan Assouline Picture"
          className="w-full h-auto max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
