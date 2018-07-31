import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";


class ProductShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: props.product
        }

        this.deleteReview = this.deleteReview.bind(this);
    }

    deleteReview(id){
        // console.log(typeof(id))
        const { product } = this.state;
        const { reviews = [] } = product;
        // console.log(product.reviews[0].id )
        this.setState({
            product: {
                ...product,
                reviews: reviews.filter(review => review.id !== id)
            }
        })
    }
    render() {
        const { product } = this.state
    
        return (
            <main>
                <ProductDetails product={product}/>
    
                <h2>Reviews</h2>
                <hr/>
                <ReviewList onReviewDeleteClick={this.deleteReview} reviews={product.reviews}/>
    
            </main>
        );
    }
};

export default ProductShowPage;