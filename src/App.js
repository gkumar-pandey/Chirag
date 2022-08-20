import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Activity from "./Pages/Activity/Activity";
import Gallery from "./Pages/Gallery/Gallery";
import Team from "./Pages/ Team/ Team";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Contribution from "./Pages/Contribution/Contribution";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div>
      <CssBaseline />
      <ParallaxProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contribution" element={<Contribution />} />
          </Routes>
          <Footer />
        </Router>
      </ParallaxProvider>
    </div>
  );
}
AOS.init();

export default App;
