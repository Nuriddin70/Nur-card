import PRODUCTS from "../../products";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  let totalamount = 0
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            
            totalamount += cartItems[product.id] * product.price
            
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalamount > 0 ? <div className="checkout">
        <p>Subtotal $ {totalamount}</p>
        <button onClick={()=> navigate('/')}>Continue shopping</button>
        <button>Checkout</button>
      </div> : <><h1>Your Cart Is Empty </h1> <button onClick={()=> navigate('/')}>Continue shopping</button></>
      }
    </div>
  );
}

export default Cart;
