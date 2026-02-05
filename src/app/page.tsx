import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Process } from "@/components/landing/Process";
import { Products } from "@/components/landing/Products";
import { SocialProof } from "@/components/landing/SocialProof";
import { Verticals } from "@/components/landing/Verticals";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 isolate overflow-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <section id="features">
        <Features />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="verticals">
        <Verticals />
      </section>
      <Footer />
    </main>
  );
}
