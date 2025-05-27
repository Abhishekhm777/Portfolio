import { useEffect } from "react";
import "./App.css";
import Footer from "./components/FooterSection/FooterSection";
import TopBar from "./components/TopBar/TopBar";
import LandingScreen from "./screens/LandingScreen";
import Firebase from "./firebase/firebase";

function App() {
  useEffect(() => {
    Firebase.initFirebase();
  }, []);
  return (
    <div className="App">
      <TopBar />
      <LandingScreen />
      <Footer />
    </div>
  );
}

export default App;
