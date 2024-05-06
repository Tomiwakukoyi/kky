import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import HeroSect from "./components/HeroSect";
import Work from "./components/Work";

function App() {
  return (
    <div className="App overflow-x-hidden px-9 md:px-16">
      <HeroSect />
      <Work />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
