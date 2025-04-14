/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import {Code} from "./Code"



export const Hero = () =>{
    return <Section className="flex max-md:flex-col items-center gap-6">
        <div className="flex-[3] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl mb-4">Ilan Assouline</h2>
            <h3 className="text-3xl font-caption">Developpeur Web & créateur de sourire</h3>
            <p className="text-base">
                Passionné par le développement de solutions web robustes et élégantes, je conçois des applications performantes avec <Code>Symfony</Code> et <Code>React</Code>. 
                Mon expertise s'étend de l'architecture backend à l'optimisation des interfaces utilisateur, 
                en passant par l'amélioration de la visibilité en ligne des entreprises.
            </p>
            <p className="text-base">
                En dehors du code, je m'exprime à travers la <Code>photographie</Code>, capturant des moments 
                comme je capture des solutions techniques - avec précision et créativité.
            </p>
        </div>
        <div className="flex-[2] flex justify-center">
            <img src="/img/profile.png" className="w-full h-auto max-w-xs max-md:w-56" alt="Ilan Assouline Picture" />
        </div>
    </Section>
}