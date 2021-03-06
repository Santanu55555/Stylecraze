// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { CuteHeader } from "./pages/CuteHeader";
import { Footer } from "./components/Footer";
import { HairCare } from "./pages/HairCare";
import { Skin } from "./pages/Skin";
import { Bottom } from "./pages/Bottom";
import { Testimonials } from "./pages/Testimonials";
import { AllROutes } from "./pages/AllROutes";

function App() {
  return (
    <div className="App">
      <Navbar />
    <AllROutes/>
    </div>
  );
}

export default App;
