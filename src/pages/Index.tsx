import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import About from "../components/About";
import VisionMission from "../components/VisionMission";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Introduction />
      <Services />
      <About />
      <VisionMission />
      <Footer />
    </div>
  );
};

export default Index;
