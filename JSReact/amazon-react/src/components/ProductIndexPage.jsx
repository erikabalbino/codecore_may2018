import React, { Component } from "react";

class ProductIndexPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: props.products || []
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(event) {
        const { currentTarget } = event;
        const productId = parseInt(currentTarget.dataset.id, 10);

        const { products } = this.state;
        this.setState(
            { products: products.filter(product => product.id !== productId) }
        )
    }

    render(){
        const { products } = this.state;

        return (
            <main>
                <h1>Product Index</h1>
                <ul style={{padding: 0, listStyle: "none"}}>
                    {products.map((product, index) => 
                        <li style={{ marginBottom: "1rem" }} key={product.id}>
                            {/* <span>{new Date(product.created_at).toLocaleDateString()}</span> •{" "} */}
                            <a href="#not-used">{product.title}</a><br/>
                            <span>Price: {product.price}</span><br/>
                            <span>Seller: {product.seller.full_name}</span><br/>
                            {/* <button onClick={e => console.log(e.target,"Was clicked!")} */}
                            <button data-id={product.id} onClick={this.deleteProduct}
                            >Delete</button>
                        </li>
                    )}
                </ul>
            </main>
        )
    }
};

export default ProductIndexPage;