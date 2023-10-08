import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import OpenSection from "./components/OpenSection/OpenSection";
import FlowerSection from "./components/FlowerSection/FlowerSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
    </div>
  );
};

export default App;
