import Engagements from "@/app/components/Engagements";
import Footer from "@/app/components/Footer";
import Fleet from "@/app/components/Fleet";
import HeroSection from "@/app/components/HeroSection";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <HeroSection />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <Engagements />
        <Fleet />
        <Services />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
