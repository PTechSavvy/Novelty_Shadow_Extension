import Header from "@/components/Header";
import WhyNoveltyVerify from "@/components/WhyNoveltyVerify";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <WhyNoveltyVerify />
      </div>
      <Footer />
    </div>
  );
};

export default About;