
//IDK if this is necessary and I don't know where to put it, it is a rough draft

import React, { useState } from 'react';

const CreateProduct = () => {
    const [product, setProduct] = useState({
        product_name: '',
        artist_id: '',
    product_description: '',
    category: '',
    price: 0,
    stock: 0,
    image: null, // Image input
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', product.image);
    formData.append('product_name', product.product_name);
    formData.append('artist_id', product.artist_id);
    formData.append('product_description', product.product_description);
    formData.append('category', product.category);
    formData.append('price', product.price);
    formData.append('stock', product.stock);

    // Send formData to the backend to create a new product
    // Use a fetch or Axios request here

    // Clear the form after submission
setProduct({
    product_name: '',
    artist_id: '',
    product_description: '',
    category: '',
    price: 0,
    stock: 0,
    image: null,
    });
  };

  return (
    <div>
      <h1>Create a New Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={product.product_name}
          onChange={handleInputChange}
        />
        <input
  type="text"
  name="artist_id"
  placeholder="Artist ID"
  value={product.artist_id}
  onChange={handleInputChange}
/>

<input
  type="text"
  name="product_description"
  placeholder="Product Description"
  value={product.product_description}
  onChange={handleInputChange}
/>

<input
  type="text"
  name="category"
  placeholder="Category"
  value={product.category}
  onChange={handleInputChange}
/>

<input
  type="number"
  name="price"
  placeholder="Price"
  value={product.price}
  onChange={handleInputChange}
/>

<input
  type="number"
  name="stock"
  placeholder="Stock"
  value={product.stock}
  onChange={handleInputChange}
/>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
