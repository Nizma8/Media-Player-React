import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import WatchHistory from "./Pages/WatchHistory";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/watch-history" element={<WatchHistory />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
