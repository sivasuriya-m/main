import React from 'react';
import { useEffect } from 'react';
import Home from './scenes/home/Home.js';
import Checkout from './scenes/checkout/Checkout.jsx';
import Confirmation from './scenes/checkout/Confirmation.jsx';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu.js';
import{
  Routes,
  Route,
  useLocation,
  BrowserRouter
} from 'react-router-dom';
import Men from './scenes/global/Women.js'
import { Footer } from './scenes/global/Footer.js';
import { Slider } from './Components/Slider.js';
import Women from './scenes/global/Women.js';
import Kids from './scenes/global/Kids.js';
import Shoe from './scenes/global/Shoe.js';


const ScrolltoTop = () =>
{
    const {pathname} = useLocation();

    useEffect(() => {
      window.scrollTo(0,0);
    },[pathname])

    return null;

}
function App() {
  return (
    <div >
      <BrowserRouter>
          <Navbar/>
          <ScrolltoTop />
          <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/confirmation" element={<Confirmation/>}/>
            <Route path="/product/Women" element={<Women/>} />
            <Route path="/product/Kids" element={<Kids/>} />
            <Route path="/product/Shoe" element={<Shoe/>} />
            
          

          </Routes>
          <CartMenu/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
