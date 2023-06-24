import PRODUCTS from '../../products.jsx'
import Product from './Product.jsx';
import "./shop.css"
function Home() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>NurTech Shop</h1>
      </div>
      <div className="container">
      <div className="products">
        {PRODUCTS.map((product)=>(
          <Product key={product.id} data={product}/>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Home;
