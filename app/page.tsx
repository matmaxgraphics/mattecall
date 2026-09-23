import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ChatDemo } from "@/components/ChatDemo";
import { HandlesMore } from "@/components/HandlesMore";
import { ProcessFlow } from "@/components/ProcessFlow";
import { SetupSteps } from "@/components/SetupSteps";
import { BuiltAround } from "@/components/BuiltAround";
import { Pricing } from "@/components/Pricing";
import { KeepControl } from "@/components/KeepControl";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <ChatDemo />
        <HandlesMore />
        <ProcessFlow />
        <SetupSteps />
        <BuiltAround />
        <Pricing />
        <KeepControl />
        <WhoIsThisFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
