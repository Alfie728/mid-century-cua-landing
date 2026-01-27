import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Audience } from "@/components/landing/Audience";
import { Products } from "@/components/landing/Products";
import { Process } from "@/components/landing/Process";
import { Differentiators } from "@/components/landing/Differentiators";
import { UseCases } from "@/components/landing/UseCases";
import { ExampleCards } from "@/components/landing/ExampleCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
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
