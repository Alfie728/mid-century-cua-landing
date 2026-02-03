import { Differentiators } from "@/components/landing/Differentiators";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Products } from "@/components/landing/Products";
import { SocialProof } from "@/components/landing/SocialProof";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 isolate overflow-hidden">
      {/* Global Background Elements */}
      <Hero />
      <SocialProof />
      <Features />
      <Products />
      <Process />
      <Differentiators />
      <UseCases />
      <Footer />
    </main>
  );
}
