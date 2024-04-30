import Certifications from "./components/Certifications";
import HeroSect from "./components/HeroSect";
import Work from "./components/Work";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <HeroSect />
      <Work />
      <Certifications />
    </div>
  );
}

export default App;
