import { useContext } from "react";
import { CartContext } from "../store/cart-context";

const Cart = () => {
  const {items} = useContext(CartContext);
  return (
    <div>
      <p>Cart</p>
      <div style={{margin: '0 auto', width: '300px'}}>
        <ul>
          {
            items.length > 0 ? items.map((value, index) => (
              <li key={index}>{value}</li>
            )) : null
          }
          {
            items.length === 0 ? <p>No items in cart!</p> : null
          }
        </ul>
      </div>
    </div>
  )
}

export default Cart;