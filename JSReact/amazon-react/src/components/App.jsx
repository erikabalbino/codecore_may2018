import React from "react";
// import ProductDetails from "./ProductDetails";
// import ReviewDetails from "./ReviewDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import ProductIndexPage from "./ProductIndexPage";
import ProductShowPage from "./ProductShowPage";
import ProductNewPage from "./ProductNewPage";
import WelcomePage from "./WelcomePage";


import productShowData from "../data/product-show";
import productIndexData from "../data/product-index";

// const ProductData = {
//     "title": "Nice title",
//     "description": "Bla",
//     "price": "22",
//     "created_at": "09/10/2017",
//     "seller": "Erika"
// }

// const ReviewData = {
//     "rating": "5",
//     "body": "This is a body!",
//     "created_at": "09/10/2017",
//     "reviewer": "Maria Eliza"
// }

const App = props => {
    return(
        <Router>
            <main>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />

                        {/* <ProductIndexPage products={productIndexData} /> */}
                        <Route path="/products" exact component={ProductIndexPage} />
                        {/* <hr/> */}

                        <Route path="/products/new" exact component={ProductNewPage} />

                        {/* <ProductShowPage product={productShowData} /> */}
                        <Route path="/products/:id" exact component={ProductShowPage} />

                        {/* <ProductDetails product={ProductData}/>
                        <ReviewDetails review={ReviewData}/> */}
                    </Switch>
                </div>
            </main>
        </Router>
    )
}

export default App;