import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-xl border rounded cursor-pointer">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top cursor-pointer"
                            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                            alt="Men Printed Pure Cotton Straight Kurta"
                        />
                        <div className="ml-5 space-y-2">
                            <p className="cursor-pointer">Men Printed Pure Cotton Straight Kurta</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon
                                className="mr-2 text-green-600 text-sm"
                                sx={{
                                    width: "15px",
                                    height: "15px",
                                }}
                            />
                            <span>Delivered On March 03</span>
                        </p>
                        <p className="text-xs">Your Item Has Been Delivered</p>
                    </div>}
                    {false && <p>
                        <span>Expected Delivery On Mar 03</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard