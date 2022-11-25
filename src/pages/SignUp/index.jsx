import { Box, Button, Container, FormControl, InputLabel, Input, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
//import Swal from "sweetalert2";
import { post } from "../../services";

const SignUp= () => {
    const [values, setValues]= useState({
        name:"",
        email:"",
        password:""
    })
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await post("/users/signup", values)
        if (response.ok){
            Swal.fire({
                text:"Usuario creado correctamente",
                icon:"Success"
            })
        }else{
            Swal.fire({
                text:"Usuario creado correctamente",
                icon:"Success"
            })
        }
    }
    return (
        <Box onClick={handleSubmit}>
          <h1>SignUp</h1>
          <FormControl>
            <div>
                <TextField
                required
                id="standard-required"
                label="Name"
                variant="standard"
                value={values.name}
                onChange={handleInputChange}
                /><br/>
                <TextField
                 required
                id="standard-required"
                label="Email Address"
                variant="standard"
                type="email"
                value={values.email}
                onChange={handleInputChange}
                /><br/>
                <TextField
                 required
                 id="filled-password-input"
                 label="Password"
                 type="password"
                 autoComplete="current-password"
                 variant="standard"
                 value={values.password}
                 onChange={handleInputChange}
                />
            </div><br/>
            <Box>
                <Button variant="contained" type="submit">SignUp</Button>
            </Box>
        </FormControl>
        </Box>
    );
}

export default SignUp;