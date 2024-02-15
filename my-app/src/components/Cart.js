import {useSelector} from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <div>
      <p>Cart</p>
      <div style={{margin: '0 auto', width: '300px'}}>
        <ul>
          {
            cart.map((value, index) => (
              <li key={index}>{value}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Cart;