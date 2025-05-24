import "./App.css";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <TopBar />
      <LandingScreen />
      <Footer />
    </div>
  );
}

export default App;
