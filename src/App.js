import React ,{useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import BuyProduct from './Components/BuyProduct';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function App() {

  const [products, setProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts(prevProducts=> {
      return [...prevProducts, newProduct];
    }) 
    
  }
  console.log("hii",products)
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Link to="/"><AddBusinessOutlinedIcon/>Add Product</Link>
          <Link to="/buy-product"><AddShoppingCartOutlinedIcon/>Buy Product</Link>
        </div>
        <div className="content">
          <Routes>
          <Route path="/" element={<AddProduct onAdd={addProduct} />} />
          <Route path="/Store" element={<AddProduct onAdd={addProduct} />} />
          <Route path="/buy-product" element={<BuyProduct products={products}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
