import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { toast } from "react-toastify";
import Cart from "./Components/Cart";

// import Cart from "./Components/Cart";

function App() {
  const [show, setShow] = useState(true);
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

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
    <>
      <Navbar size={cart.length} setShow={setShow}/>
      <Banner/>
      {
        show ? <Products handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange = {handleChange}/>
      }
      <Footer/>
      {
        warning && toast(<div>Item is already added to cart.</div>)
      }
    </>
  );
}

export default App;
