import React from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";


const ProductShowPage = props => {

    const { product } = props

    return (
        <main>
            <ProductDetails product={product}/>

            <h2>Reviews</h2>
            <hr/>
            <ReviewList reviews={product.reviews}/>

        </main>
    );
};

export default ProductShowPage;