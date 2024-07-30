import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { toast } from "react-toastify";


// import Cart from "./Components/Cart";

function App() {
  const [show, setShow] = useState(0);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) =>{
    let isPresent = false;
    {
      cart.forEach((product)=>{
        if(item.id == product.id){
          isPresent = true;
        }
      })

      if(isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false)
        }, 2000)
        return;
      }

      setCart([...cart, item]);
    }
  }

  return (
    <>
      <Navbar size={cart.length}/>
      <Banner/>
      <Products/>
      <Footer/>
      {
        warning && toast(<div>Item is already added to cart.</div>)
      }
    </>
  );
}

export default App;
