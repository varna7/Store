import React, { useState } from "react";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProduct((product) => {
      return {
        ...product,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    props.onAdd(product); // Call the addProduct function from the parent component
    setProduct({
      name: "",
      price: "",
      quantity: "",
    });
    e.preventDefault();
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <div className="inputs" >
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            placeholder=" Product Name"
          />
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            placeholder="  Price"
          />
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            placeholder="  Quantity"
          />
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default AddProduct;
