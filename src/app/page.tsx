import { CourseHeros } from "@/components/CourseHeros";
import HeroSection from "@/components/HeroSection";
import { SecretCard } from "@/components/SecretCard";
import { WavyBackgroundDemo } from "@/components/WavyBg";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]">
    <HeroSection /> 
    <CourseHeros/>
    <SecretCard/>
    <WavyBackgroundDemo/>
   </main>
  );
}
