import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormControl } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = useState("")



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
    } = useForm()

    const onSubmit = async ( data) => {
        setError("")
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data}),
            credentials:"include"
        })
        const info = await response.json();
        if (!info.message) {
            setError("")
        }
        else {
            setError(info.message)
            setEmail("")
            setPassword("")
        }
        if(response.status==200){
            window.location.href="/"
        }
    };

    return (
        <>
            <h3>Log in into your account</h3>
            <div style={{ height: "350px", width: "300px" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "45px", height: "62px" }}>
                        <img src="lmsLogo.png" alt="no image" width="100%" height="100%" />
                    </div>
                </div>
                    {
                        error && (
                            <div style={{ marginBottom: "4px", borderRadius: "4px", backgroundColor: "rgb(255,221,223)", color: "rgb(#F9DCE0)", height: "43px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {error}
                            </div>
                        )
                    }
                <form onSubmit={handleSubmit(onSubmit)} >

                    <TextField
                        {...register("email", {
                            required: { value: true, message: "Email is required" }, pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address"
                            }
                        })}

                        sx={{ marginBottom: "18px" }}
                        label="Enter Email"
                        margin='normal'
                        size='meduim'
                        fullWidth
                        type='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    {errors.email&& <span style={{color:"red"}}>{errors.email.message}</span>}
                    
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
                        <OutlinedInput
                            {...register("password", { required: { value: true, message: "Password is required" },minLength: { value: 8, message: "Password must have atleast 8 characters" }, maxLength: { value: 64, message: "Password must not be above 64 characters" } })}

                            sx={{ marginBottom: "17px" }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            size='meduim'
                            margin='dense'
                            fullWidth
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Enter Password"
                        />
                    </FormControl>
                    {errors.password&& <span style={{color:"red"}}>{errors.password.message}</span>}

                    <input style={{ backgroundColor: "blue", color: "white", width: "100%", height: "40px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }} disabled={isSubmitting} type="submit" value="Login" />
                </form>
                <Divider>or Login with</Divider>
                <button style={{ border: "1px solid black", width: "298px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "7px" }}>
                    <span style={{ width: "23px", height: "24px", marginRight: "6px" }}>
                        <img style={{ width: "100%", height: "100%" }} src="googleLogo.jpeg" alt="" />
                    </span>
                    Continue with Google
                </button>
                <p>Don't have an account?<NavLink style={{ textDecoration: "underline" }} to="/signup">Sign up</NavLink></p>

            </div>
        </>
    )
}
