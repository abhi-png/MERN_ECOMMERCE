import React from "react"
import Navigation from "./customer/components/Navigation/Navigation"
import HomePage from "./customer/pages/HomePage/HomePage"
import Footer from "./customer/components/Footer/Footer"
import Product from "./customer/components/Product/Product"
import ProductDetails from "./customer/components/ProductDetails/ProductDetails"

const App = () => {
    return (
        <div>
            <Navigation />
            {/* <HomePage /> */}
            {/* <Product /> */}
            <ProductDetails />
            <Footer />
        </div>
    )
}

export default App