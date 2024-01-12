import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navigation />
            {/* <HomePage /> */}
            {/* <Product /> */}
            {/* <ProductDetails /> */}
            {/* <Cart /> */}
            <Checkout />
            <Footer />
        </div>
    )
}

export default App