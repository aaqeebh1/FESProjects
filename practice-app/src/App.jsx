import './App.css';
import Product from './components/Products';
import productsData from './components/productsData'

function App() {
  const productsComponent = productsData.map((item) => <Product key={item.id} product={item}/>)
  
  
  return (
    <div className="App">
      {productsComponent}
    </div>
  );
}

export default App;
