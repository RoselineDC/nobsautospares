import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import PopularParts from "@/components/PopularParts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-slate-50">
        <Hero />
        <InfoCards />
        <PopularParts />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}