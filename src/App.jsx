import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import OpenSection from "./components/OpenSection/OpenSection";
import FlowerSection from "./components/FlowerSection/FlowerSection";
import Cta from "./components/Cta/Cta";
import Pastries from "./components/Pastries/Pastries";
import Reservation from "./components/Reservation/Reservation";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
      <Cta />
      <Pastries />
      <Reservation />
    </div>
  );
};

export default App;
