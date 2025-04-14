import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (<main>
    <Header/>
    <Spacing size="md"></Spacing>
    <Hero/>
    <Spacing size="md"></Spacing>
    <Status/>
    <Spacing size="md"></Spacing>
    <Skills/>
    <Spacing size="md"></Spacing>
    <Contact/>
   
    <Footer/>
   
     </main>);
}
