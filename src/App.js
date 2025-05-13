import "./App.css";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topBar/TopBar";
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
