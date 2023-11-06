import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import BuyProduct from './Components/BuyProduct';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Link to="/"><AddBusinessOutlinedIcon/>Add Product</Link>
          <Link to="/buy-product"><AddShoppingCartOutlinedIcon/>Buy Product</Link>
        </div>
        <div className="content">
          <Routes>
          <Route path="/" element={<AddProduct/>} />
          <Route path="/buy-product" element={<BuyProduct/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
