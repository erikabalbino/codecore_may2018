import React, { Component } from "react";
import Product from "../requests/product";

class ProductNewPage extends Component {
  constructor(props) {
    super(props);

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(event) {
    event.preventDefault();
    // console.log(event.currentTarget);

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Product.create({
      title: formData.get("title"),
      body: formData.get("body"),
      price: formData.get("price")
    // }).then(data => console.log(data));
    }).then(data => {
        const productId = data.id;

        this.props.history.push(`/products/${productId}`);
      });
  }

  render() {
    return (
      <main>
        <h2>New Product</h2>
        <form onSubmit={this.createProduct}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label> <br />
            <textarea name="body" id="body" cols="60" rows="4" />
          </div>

          <div>
            <label htmlFor="price">Price</label> <br />
            <textarea name="price" id="price" cols="10" rows="1" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    );
  }
}

export default ProductNewPage;