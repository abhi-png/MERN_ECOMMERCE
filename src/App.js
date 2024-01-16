import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/*" element={<CustomerRouters />} />
            </Routes>


            {/* <Cart /> */}
            {/* <Checkout /> */}
            {/* <Order /> */}
            {/* <OrderDetails /> */}
        </div>
    )
}

export default App