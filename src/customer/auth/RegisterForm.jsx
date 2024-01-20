import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }

        console.log("userdata", userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl uppercase pb-5 font-semibold text-gray-700">Register</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="given-email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className="w-full"
                            variant="contained"
                            type="submit"
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
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="py-3 flex items-center justify-center">
                <p>if you have already account ?</p>
                <p className="text-indigo-700 font-medium cursor-pointer ml-2" onClick={() => navigate("/login")}>Login</p>
            </div>
        </div>
    )
}

export default RegisterForm