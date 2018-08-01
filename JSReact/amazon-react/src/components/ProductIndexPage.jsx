import React, { Component } from "react";
import Product from "../requests/product";
import { Link } from "react-router-dom";

class ProductIndexPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            // products: props.products || []
            loading: true,
            products: []
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        Product.all().then(products => {
        //   console.table(products);
        this.setState({ loading: false, products: products});
        })
        .catch(() => {
            this.setState({ loading:false });
        });
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
        const { loading, products } = this.state;

        if (loading) {
            return (
                <main>
                    <h1>Products</h1>
                    <h2>Loading ...</h2>
                </main>
            )
        }

        return (
            <main>
                <h1>Product Index</h1>
                <ul style={{padding: 0, listStyle: "none"}}>
                    {products.map((product, index) => 
                        <li style={{ marginBottom: "1rem" }} key={product.id}>
                            {/* <span>{new Date(product.created_at).toLocaleDateString()}</span> •{" "} */}
                            {/* <a href="#not-used">{product.title}</a><br/> */}
                            <Link to={`/products/${product.id}`}>{product.title}</Link> <br/>

                            <span>Price: {product.price}</span><br/>
                            {/* <span>Seller: {product.seller.full_name}</span><br/> */}
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