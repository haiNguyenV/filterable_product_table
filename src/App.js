import logo from './logo.svg';
import './App.css';

function ProductRow() {
  return(
    <></>
  )
}

function ProductCategoryRow() {
  return(
    <></>
  )
}

function ProductTable() {
  return(
    <></>
  )
}

function SearchBar() {
  return(
    <></>
  )
}

function FilterableProductTable() {
  return(
    <></>
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

  return (
    <div className="App">
      thinking in react
    </div>
  );
}

export default App;
