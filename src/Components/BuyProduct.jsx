import React, { useState } from 'react';

const BuyProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setErrorMessage('');
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setErrorMessage('');
  }

  const handleBuyProduct = () => {
    // Handle the product purchase logic here
  }

  return (
    <div className='main'>
      <h2>Buy Product</h2>
      <form action="">
      <div style={{width:"80%"}}>
        
        <select value={selectedProduct} onChange={handleProductChange} placeholder='Select Product'>
          <option value="">Select a product</option>
          
        </select>
      
        
        <input type="text" value={quantity} onChange={handleQuantityChange} placeholder='Quantity'/>
      </div>
      <button onClick={handleBuyProduct}>Submit</button>
      <p className="error-message">{errorMessage}</p>
      </form>
      
    </div>
  );
}

export default BuyProduct;
