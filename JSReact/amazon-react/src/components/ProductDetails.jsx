import React from "react";

const ProductDetails = props => {
    // console.log(props);

    const { product } = props;
    
    return (
        <div>
            <h1>Product</h1>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            
            <small>By: {product.seller.full_name}</small> • <small>{product.created_at}</small>
        </div>
    )
};

export default ProductDetails;