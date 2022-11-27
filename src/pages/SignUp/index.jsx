import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import Swal from "sweetalert2"
import { post } from "../../services";

const SignUp= () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await post("users/signup", values)
        if (response.ok){
            Swal.fire({
                text:"Usuario creado correctamente",
                icon:"success"
            })
            console.log(response)
        }else{
            Swal.fire({
                text:"Usuario ya existente",
                icon:"error"
            })
        }
    }
    return  (
        <Box
        display="flex"
        height="90vh"
        alignItems="center"
        justifyContent="center">
            <Paper
            sx={{
                width: 300,
                border: 1,
                borderColor:'skyblue',
                borderRadius: '16px',
                boxShadow: 5 
            }}
            >
                <Box p={4} component="form" onSubmit={handleSubmit} method="post">
                    <Box
                        component="img"
                        sx={{
                            height: 70,
                            width: 80,
                        }}
                        src="user-login.png"
                    />
                    <Typography textAlign="center" variant="h4">
                    Sign Up
                    </Typography>
                    <Box  my={3}>
                            <TextField
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            label="Name"
                            variant="standard"
                            fullWidth
                            required
                            />
                    </Box>
                    <Box  my={3}>
                            <TextField
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            type="email"
                            label="Email"
                            variant="standard"
                            fullWidth
                            required
                            />
                    </Box>
                    <Box  my={3}>
                            <TextField
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            type="password"
                            label="Password"
                            variant="standard"
                            fullWidth
                            required
                            />
                    </Box>
                    <Box  my={3}>
                        <Box>
                            <Button 
                            sx={{ 
                                bgcolor: 'green', 
                                fontWeight: 'bold',
                                fontFamily:  'Helvetica', 
                            }}
                            variant="contained" 
                            fullWidth  
                            type="submit">Sign Up</Button>
                        </Box>
                    </Box>
                    <Box>
                    <Typography 
                    sx={{ 
                        fontSize:'small',
                        fontFamily:  'default', 
                        fontStyle: 'italic'
                    }}>
                    Don't have an account yet?
                    </Typography>
                        <Button>
                            <Link
                            style={{ textDecoration: 'none', color: 'blue'}}  
                            to="/login"
                            >Login</Link> 
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default SignUp;