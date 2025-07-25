import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyNoveltyVerify from "@/components/WhyNoveltyVerify";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WhyNoveltyVerify />
      <Team />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;