import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56, height:56, bgcolor: "#9155fd"}}>A</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                            <p className="font-semibold text-lg">Abinash</p>
                            <p className="opacity-50 text-sm">April 5, 2023</p>
                        </div>
                    </div>
                    <Rating name="half-rating" value={4.5} precision={0.5} readOnly />
                    <p>Nice product, I love this dress</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard