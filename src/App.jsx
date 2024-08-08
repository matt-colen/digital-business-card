import Info from "./components/Info/Info.jsx";
import About from "./components/About/About.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}
