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

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
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
                    <form onSubmit={handleSubmit} >
                        <TextField
                            sx={{ marginBottom: "18px" }}
                            label="Enter Email"
                            margin='normal'
                            size='meduim'
                            fullWidth
                            required
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
                            <OutlinedInput
                                sx={{ marginBottom: "20px" }}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                size='meduim'
                                margin='dense'
                                name='password'
                                fullWidth
                                required
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
                        <input style={{ backgroundColor: "blue", color: "white", width: "100%", height: "40px", borderRadius: "5px",fontWeight:"bold",cursor:"pointer"}} type="submit" value="Login" />
                    </form>
                    <Divider>or Login with</Divider>
                    <button style={{ border: "1px solid black", width: "298px", backgroundColor: "white",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"7px" }}>
                        <span style={{ width: "23px", height: "24px", marginRight:"6px"}}>
                            <img style={{ width: "100%", height: "100%" }} src="googleLogo.jpeg" alt="" />
                        </span>
                        Continue with Google
                    </button>
                    <p>Don't have an account?<a style={{ textDecoration: "underline" }} href="#">Sign up</a></p>

                </div>
        </>
    )
}
