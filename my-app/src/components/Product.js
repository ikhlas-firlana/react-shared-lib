import {productList} from "../data";
import { useDispatch } from 'react-redux'
import { handleItem } from '../store/cart'

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>Product List</div>
      {
        productList.map(({ img, name }, index) => (
          <div key={index} className={ 'card' } onClick={() => dispatch(handleItem(name))}>
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