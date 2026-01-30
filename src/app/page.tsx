import { Audience } from "@/components/landing/Audience";
import { Differentiators } from "@/components/landing/Differentiators";
import { ExampleCards } from "@/components/landing/ExampleCards";
import { Features } from "@/components/landing/Features";
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
      <Audience />
      <Products />
      <Process />
      <Differentiators />
      <UseCases />
      <ExampleCards />
    </main>
  );
}
