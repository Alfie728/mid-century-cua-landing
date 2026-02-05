import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Products } from "@/components/landing/Products";
import { SocialProof } from "@/components/landing/SocialProof";
import { Verticals } from "@/components/landing/Verticals";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 isolate overflow-hidden">
      {/* Global Background Elements */}
      <Hero />
      <SocialProof />
      <Features />
      <Process />
      <Products />
      <Verticals />
      <Footer />
    </main>
  );
}
