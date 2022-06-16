import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { CuteHeader } from "./pages/CuteHeader";
import { Footer } from "./components/Footer";
import { HairCare } from "./pages/HairCare";
import { Skin } from "./pages/Skin";
import { Bottom } from "./pages/Bottom";
import { Testimonials } from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CuteHeader />
      <HairCare/>
      <Skin/>
      <Bottom/>
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
