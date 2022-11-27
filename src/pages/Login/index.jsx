import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import { post } from "../../services";
import Swal from "sweetalert2";
const Login= () => {

    const [values, setValues] = useState({
        password: "",
        email: ""
      })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await post("users/login", values);
    
        if (response.ok) {
            Swal.fire({
                text: "Usuario a iniciado sesión correctamente",
                icon: "success"
              })
              console.log(response)
        } else {
          Swal.fire({
              text: "Usuario o contraseña incorrecto",
            icon: "error"
          });
        }
      };

    return (
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
            boxShadow: 3 
            }}
            >
                <Box 
                p={4} component="form" onSubmit={handleSubmit} method="post">
                    <Box
                        component="img"
                        sx={{
                            height: 70,
                            width: 80,
                        }}
                        src="user-login.png"
                    />
                    <Typography 
                    sx={{
                        fontFamily: 'Arial'
                    }}
                    textAlign="center" 
                    variant="h4">
                    Login
                    </Typography>
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
                    <Box  
                    my={3}>
                        <Box>
                            <Button
                            sx={{ 
                                bgcolor: 'green', 
                                fontWeight: 'bold',
                                fontFamily:  'Helvetica', 
                            }}
                            variant="contained" 
                            fullWidth  
                            type="submit">Login</Button>
                        </Box>
                    </Box>
                    <Typography 
                    sx={{ 
                        fontSize:'small',
                        fontFamily:  'default', 
                        fontStyle: 'italic'
               
                    }}>
                    Do you already have an account?
                    </Typography>
                    <Box>
                        <Button>
                            <Link
                            style={{ textDecoration: 'none', color: 'blue'}}  
                            to="/signup"
                            >Create account</Link> 
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default Login;