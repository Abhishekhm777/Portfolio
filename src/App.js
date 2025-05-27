import { useEffect } from "react";
import "./App.css";
import Footer from "./components/FooterSection/FooterSection";
import TopBar from "./components/TopBar/TopBar";
import LandingScreen from "./screens/LandingScreen";
import Firebase from "./firebase/firebase";
import Canvas from "./components/CursorTracker/CursorTracker";

function App() {
  useEffect(() => {
    Firebase.initFirebase();
  }, []);
  return (
    <div className="App">
      <TopBar />
      <LandingScreen />
      <Footer />
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
