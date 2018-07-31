import React from "react";
// import ProductDetails from "./ProductDetails";
// import ReviewDetails from "./ReviewDetails";
import ProductShowPage from "./ProductShowPage";
import ProductIndexPage from "./ProductIndexPage";

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
        <main>
            <div>
                <ProductIndexPage products={productIndexData} />
                <hr/>
                <ProductShowPage product={productShowData} />
                
                {/* <ProductDetails product={ProductData}/>
                <ReviewDetails review={ReviewData}/> */}
            </div>
        </main>
    )
}

export default App;