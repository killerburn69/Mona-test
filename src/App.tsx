import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Wrapper from "./component/Wrapper";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./page/Homepage/Homepage";
import ListFligt from "./page/ListFlight/ListFligt";

function App() {
  const pathname = useLocation();
  return (
    <div>
      <div
        className={`${
          pathname.pathname === "/" ? "img_bg" : ""
        } max-h-[780px] h-screen`}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="flight" element={<ListFligt />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
