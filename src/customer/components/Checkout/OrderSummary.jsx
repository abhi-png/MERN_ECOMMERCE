import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cartitem from "../Cart/Cartitem";
import { Button } from "@mui/material";

const OrderSummary = () => {
    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard />
            </div>
            <div className="lg:grid grid-cols-3 mt-10 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map(() => <Cartitem />)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border rounded p-5">
                        <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-8">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>₹4697</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Discount</span>
                                <span className="text-green-600">- ₹3419</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between pt-3 font-bold">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹1278</span>
                            </div>
                        </div>

                        <Button
                            className="w-full"
                            variant="contained"
                            sx={{
                                px: "2.5rem",
                                py: "0.7rem",
                                bgcolor: "#9155fd",
                                fontWeight: "bold",
                                '&:hover': {
                                    bgcolor: "#6932a3",
                                }
                            }}
                        >
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary