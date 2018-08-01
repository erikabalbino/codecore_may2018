import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import Product from "../requests/product";


class ProductShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            // product: props.product
            product: [ ]
        }

        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount(){
        // console.log(this.props);

        const productId = this.props.match.params.id;

        Product.one(productId).then(product => {
            // console.log(product);
            this.setState({loading: false, product: product});
        })
        .catch(() => {
            this.setState({loading: false});
        });
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
        const { loading, product } = this.state

        if (loading){
            return (
                <main>
                    <h1>Product</h1>
                    <h2>Loading ...</h2>
                </main>
            )
        }

        if (!product){
            return (
                <main>
                    <h2>Product doesn't exit</h2>
                </main>
            );
        }
    
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