import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Placed", "Order Confirmed", "Shipped", "Out For Delivery", "Delivered"];

const OrderTracker = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((lable) =>
                    <Step>
                        <StepLabel sx={{color: "#9155FD", fontSize: "44px"}}>{lable}</StepLabel>
                    </Step>
                )}
            </Stepper>
        </div>
    )
}

export default OrderTracker