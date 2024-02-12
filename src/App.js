import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbaar from './Component/Navbaar';
import Mechostory from './Component/Mechostory';
import Ourcompany from './Component/Ourcompany';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Production from './Component/Ourbusines/Production';
import Development from './Component/Ourbusines/Development';
import Web3technologies from './Component/Ourbusines/Web3technologies';
import Rd from './Component/Ourbusines/Rd';
import Animationandgraphics from './Component/Ourbusines/Animationandgraphics';
import Innovation from './Component/Innovation/Innovation';
import Reseachdev from './Component/Innovation/Reseachdev';
import About from './Component/About';
import Founderceo from './Component/Founderceo';
import Boardofdirector from './Component/Boardofdirector';
import Softwaredevelopment from './Component/Softwaredevelopment';
import Mobileapplicationdevelopment from './Component/Mobileapplicationdevelopment';
import Websitedevelopment from './Component/Websitedevelopment';
import Productdevelopment from './Component/Productdevelopment';

function App() {
  return (
    <>
    <Router>
    <Navbaar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/mechostory" element={<Mechostory/>} />
          <Route path="/production" element={<Production/>} />
          <Route path="/development" element={<Development/>} />
          <Route path="/web3technologies" element={<Web3technologies/>} />
          <Route path="/rd" element={<Rd/>} />
          <Route path="/animationandgraphics" element={<Animationandgraphics/>} />
          <Route path="/innovation" element={<Innovation/>} />
          <Route path="/reseachdev" element={<Reseachdev/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/founderceo" element={<Founderceo/>} />
          <Route path="/boardofdirector" element={<Boardofdirector/>} />
          <Route path="/softwaredevelopment" element={<Softwaredevelopment/>} />
          <Route path="/mobileapplicationdevelopment" element={<Mobileapplicationdevelopment/>} />
          <Route path="/websitedevelopment" element={<Websitedevelopment/>} />
          <Route path="/productdevelopment" element={<Productdevelopment/>} />
      </Routes>
    <Footer/>
    </Router> 
    {/* <Production/> */}
    </>
  );
}

export default App;
