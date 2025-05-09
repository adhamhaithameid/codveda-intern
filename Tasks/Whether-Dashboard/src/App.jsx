import Header from "./components/Header";
import Datatabs from "./components/Datatabs";
import ForecastStripUI from "./components/ForecastStrip";
import Rain from "./components/Rain";
import Overview from "./components/overview";
import HeroCard from "./components/hero";

function App() {


  return (
    <div className="min-h-screen w-full bg-background scroll-smooth">
      <Header />
      <Datatabs />
      <ForecastStripUI />
      <Rain />
      <Overview />
      <HeroCard />
    </div>
  );
}

export default App;
