import { useState } from 'react';

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
      <td colSpan="2" style={{fontWeight: 'bold', textAlign: 'center'}}>{category}</td>
    </tr>
  )
}

function ProductTable({products, inputText, isChecked}) {
  const rows = [];
  let lastCategory = null;
  products.map((product) => {
    if(isChecked && !product.stocked) {
      return;
    }
    if(product.name.toLowerCase().indexOf(inputText.toLowerCase()) === -1) {
      return;
    }
    if(product.category !== lastCategory) {
      rows.push(<ProductCategoryRow 
        category={product.category}
        key = {product.category}
      />)
    }
    rows.push(<ProductRow 
      product={product}
      key = {product.name}  />)
     
    lastCategory = product.category;
  })

  return(
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function SearchBar({inputText, setInputText, isChecked, setIsChecked}) {

  console.log('inputtext: ', inputText + ' is checked: ', isChecked)

  return(
    <form>
      <input type='text' placeholder='type your text in here...' value={inputText} onChange={e => setInputText(e.target.value)} /><br/>
      <label>
        <input type='checkbox' value={isChecked} onChange={e => {setIsChecked(e.target.checked)}}/>
        {' '}
        <span>Only show product in stock</span>
      </label>
    </form>
  )
}

function FilterableProductTable({products}) {
  const [inputText, setInputText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return(
    <div className='filter_table-box'>
      <SearchBar 
        inputText = {inputText}
        setInputText = {setInputText}
        isChecked = {isChecked}
        setIsChecked = {setIsChecked}
      />
      <ProductTable 
        products={products}
        inputText = {inputText}
        isChecked = {isChecked} />
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
