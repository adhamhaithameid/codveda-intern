import Header from "./components/Header";
import Datatabs from "./components/Datatabs";
import ForecastStripUI from "./components/ForecastStrip";
import Rain from "./components/Rain";
import Overview from "./components/overview";
import HeroCard from "./components/hero";
import Suggest from "./components/suggest";

function App() {
  return (
    <div className="min-h-screen w-full bg-background scroll-smooth">
      <Header />
      <Datatabs />
      <ForecastStripUI />
      <Rain />
      <Overview />
      <HeroCard />
      <Suggest />
    </div>
  );
}

export default App;
