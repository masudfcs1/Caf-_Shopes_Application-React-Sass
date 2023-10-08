import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import OpenSection from "./components/OpenSection/OpenSection";
import FlowerSection from "./components/FlowerSection/FlowerSection";
import Cta from "./components/Cta/Cta";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
      <Cta />
    </div>
  );
};

export default App;
