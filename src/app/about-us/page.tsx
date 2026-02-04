import { Footer } from "@/components/landing/Footer";
import { Narrative } from "@/components/landing/Narrative";
import { LightRays } from "@/components/ui/light-rays";

export default function AboutUs() {
  return (
    <main className="min-h-screen relative bg-slate-50 isolate overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-surface-hero via-70% to-surface-hero-end to-100% -z-20" />

      {/* Light Rays Effect */}
      <div className="absolute top-0 left-0 right-0 h-full w-full flex items-start justify-center overflow-hidden pointer-events-none -z-10">
        <LightRays color="#8ec5ff" blur={16} />
      </div>

      <div className="pt-32 pb-12 md:pt-48 md:pb-24 px-6 container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 font-display mb-6">
          About{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-indigo-500 to-blue-600">
            Us
          </span>
        </h1>
      </div>
      <Narrative />
      <Footer />
    </main>
  );
}
