import { DownloadCTA } from "@/components/landing/DownloadCTA";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Products } from "@/components/landing/Products";
import { SocialProof } from "@/components/landing/SocialProof";
import { Verticals } from "@/components/landing/Verticals";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 isolate overflow-hidden">
      {/* Global background gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#3AAFFF]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] bg-[#0D8FD9]/8 rounded-full blur-[100px]" />
        <div className="absolute top-[35%] right-[5%] w-[600px] h-[400px] bg-[#3AAFFF]/6 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[10%] w-[450px] h-[450px] bg-emerald-500/6 rounded-full blur-[100px]" />
        <div className="absolute top-[65%] left-[50%] -translate-x-1/2 w-[700px] h-[500px] bg-[#3AAFFF]/8 rounded-full blur-[130px]" />
        <div className="absolute top-[75%] right-[15%] w-[350px] h-[350px] bg-cyan-500/6 rounded-full blur-[90px]" />
        <div className="absolute top-[90%] left-[5%] w-[400px] h-[400px] bg-rose-500/6 rounded-full blur-[100px]" />
        <div className="absolute top-[95%] right-[5%] w-[500px] h-[350px] bg-[#0D8FD9]/8 rounded-full blur-[110px]" />
      </div>

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
      <section id="download">
        <DownloadCTA />
      </section>
      <Footer />
    </main>
  );
}
