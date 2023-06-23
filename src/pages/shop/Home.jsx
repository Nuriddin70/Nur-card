import PRODUCTS from '../../products.jsx'

function Home() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>NurTech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=>(
          <div key={product.id}>
            <img src={product.productImage} alt="/" />
            <p >{product.productName}</p>
            <span>{product.price}</span>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
