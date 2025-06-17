import { HeroSection } from "./components/HeroSection";
import { NavigationSection } from "./components/NavigationSection"; 
import { FormLeadsSection } from "./components/FormLeadsSection";

export default function Home() {
  return (
    <>
      <NavigationSection />
      <HeroSection/>
      <FormLeadsSection/>
    </>
  );
}
