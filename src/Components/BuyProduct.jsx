import React, { useState } from 'react';

const BuyProduct = ({products}) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setErrorMessage('');
    setSuccessMessage('');
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setErrorMessage('');
    setSuccessMessage('');
  }

  const handleBuyProduct = (e) => {
    const product = products.find((p) => p.name === selectedProduct);

    if (!product) {
      setErrorMessage('Product not found');
      e.preventDefault();
      return;
    }

    const selectedQuantity = parseInt(quantity, 10);
    if (selectedQuantity > product.quantity) {
      setErrorMessage('Not enough quantity in stock');
      e.preventDefault();
      return;
    }

    // Update the quantity of the selected product
    product.quantity -= selectedQuantity;
    setSuccessMessage(`Successfully purchased ${selectedQuantity} ${product.name}`);
    e.preventDefault();
  }

  return (
    <div className='main'>
      <div className="products">
        <h2>All Products</h2>
          <table className='product-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>

              </tr>
            </thead>
            <tbody>
              
                {products.map((product,index)=>(
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                </tr>
                ))}
              
            </tbody>
          </table>
      </div>
      
      <form action="">
      <h2>Buy Product</h2>
      <div style={{width:"80%"}}>
        
        <select value={selectedProduct} onChange={handleProductChange} placeholder='Select Product'>
          <option value="" disabled className='disabled'>Select a product</option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
              </option>
          ))}
        </select>
      
        
        <input type="text" value={quantity} onChange={handleQuantityChange} placeholder='Quantity'/>
      </div>
      <button onClick={handleBuyProduct}>Submit</button>
      <p className="error-message">{errorMessage}</p>
      <p className="success-message">{successMessage}</p>
      </form>
      
    </div>
  );
}

export default BuyProduct;
