import {productList} from "../data";
import {useContext} from "react";
import {CartContext} from "../store/cart-context";

const Product = () => {
  const { handleItem } = useContext(CartContext);
  return (
    <div>
      <div>Product List</div>
      {
        productList.map(({ img, name }, index) => (
          <div key={index} className={ 'card' } onClick={() => handleItem(name)}>
            <img src={img} alt={name} style={{width: '100%'}} />
            <div className="container">
              <h4><b>{name}</b></h4>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Product