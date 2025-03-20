import Contact from "@/components/ui/section/Contact";
import { Dock } from "@/components/ui/section/FloatingDock";
import { Footer } from "@/components/ui/section/FooterSection";
import HeroSection from "@/components/ui/section/HeroSection";
import { Projects } from "@/components/ui/section/ProjectsSection";
import { Resume } from "@/components/ui/section/ResumeSection";
import { Services } from "@/components/ui/section/ServiceSection";
import { Testimonials } from "@/components/ui/section/TestimonialSection";


export default function Home() {
  return (
<>
<HeroSection />
<Services/>
<Projects />
<Resume />
<Testimonials />
<Contact />
<Footer />
<Dock />
</>
  );
}
