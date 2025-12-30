import Product from './Product'

function ProductList() {
    const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 }
    ];

    return(
        <div>
            {
                products.map((product) => <Product title={product.title} price={product.price} key={product.id}></Product>)

            }
        </div>
    );
}

export default ProductList