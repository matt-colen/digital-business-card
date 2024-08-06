import Info from "./components/Info/Info.jsx";
import About from "./components/About/About.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}

export default App;
