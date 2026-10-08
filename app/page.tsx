import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <Header />
      <main className="text-sm">
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
