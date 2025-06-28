import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import SkillsBanner from "@/components/SkillsBanner";


export default function Home() {
  return (
    <div> 
      <Hero />
      <Banner />
      <SkillsBanner />
      <Project />
    </div>
  );
}
