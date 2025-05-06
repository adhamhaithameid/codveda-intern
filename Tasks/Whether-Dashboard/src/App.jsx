import Header from "./components/Header";
import Datatabs from "./components/Datatabs";
import ForecastStripUI from "./components/ForecastStrip";

function App() {
  return (
    <div className="h-screen w-screen bg-background scroll-smooth">
      <Header />
      <Datatabs />
      <ForecastStripUI />
    </div>
  );
}

export default App;
