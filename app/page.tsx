import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Testimonial } from "@/components/Testimonial";
import { BlogPreview } from "@/components/BlogPreview";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <About />
      <Stats />
      <Pricing />
      <Testimonial />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}
