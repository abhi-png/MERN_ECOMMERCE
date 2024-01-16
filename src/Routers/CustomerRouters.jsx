import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "../customer/components/Navigation/Navigation"
import Footer from "../customer/components/Footer/Footer"
import Cart from "../customer/components/Cart/Cart"
import HomePage from "../customer/pages/HomePage/HomePage"
import Product from "../customer/components/Product/Product"
import ProductDetails from "../customer/components/ProductDetails/ProductDetails"
import Checkout from "../customer/components/Checkout/Checkout"
import Order from "../customer/components/Order/Order"
import OrderDetails from "../customer/components/Order/OrderDetails"

const CustomerRouters = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:id" element={<OrderDetails />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default CustomerRouters