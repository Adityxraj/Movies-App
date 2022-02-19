import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favorites from "./Components/Favorites";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <Banner />
              <Movies /> 
            </>
          }/>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <Banner/>  */}
      {/* <Movies/> */}
      {/* <Favorites/> */}
    </Router>
  );
}

export default App;
