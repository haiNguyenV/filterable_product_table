import logo from './logo.svg';
import './App.css';

function ProductRow({product}) {
  const productName = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;

  return(
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductCategoryRow({category}) {
  return(
    <tr>
      <td colspan="2">{category}</td>
    </tr>
  )
}

function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;
  products.map((product) => {
    if(product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category}/>)
    }
    rows.push(<ProductRow product={product}/>)
    lastCategory = product.category;
  })

  return(
    <table>
        {rows}
    </table>
  )
}

function SearchBar() {
  return(
    <form>
      <input type='text' placeholder='type your text in here...' /><br/>
      <label>
        <input type='checkbox' />
        {' '}
        <span>Only show product in stock</span>
      </label>
    </form>
  )
}

function FilterableProductTable({products}) {
  return(
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  return <FilterableProductTable products={PRODUCTS} className='box'/>;
}

export default App;
