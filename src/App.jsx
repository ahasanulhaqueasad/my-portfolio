import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#080b16] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
