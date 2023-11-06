import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='main'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td><label>Name</label></td>
            <td>:</td>
            <td><input type="text" name="name" value={product.name} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><label>Price</label></td>
            <td>:</td>
            <td><input type="text" name="price" value={product.price} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><label>Quantity</label></td>
            <td>:</td>
            <td><input type="text" name="quantity" value={product.quantity} onChange={handleInputChange} /></td>
          </tr>
        </table>
        
        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default AddProduct;
