import {productList} from "../data";

const Product = () => {
  return (
    <div>
      <div>Product List</div>
      {
        productList.map(({ img, name }, index) => (
          <div key={index} className={ 'card' }>
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