import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import About from './component/About';
import Doctor from './component/Doctor';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctor />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
