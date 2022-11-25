import { Box, Button, Container,FormControl, InputLabel, Input, FormHelperText, TextField } from "@mui/material";
import { post } from "../../services";
const Login= () => {

    return (
        <Container>
          <h1>Login</h1>
        <FormControl>
            <div>
                <TextField
                required
                id="standard-required"
                label="Name"
                variant="standard"
                /><br/>
                <TextField
                required
                id="standard-required"
                label="Email Address"
                variant="standard"
                />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                <br/>
                <TextField
                 id="filled-password-input"
                 label="Password"
                 type="password"
                 autoComplete="current-password"
                 variant="standard"
                 />
            </div><br/>
            <Box>
                <Button variant="contained">Login</Button>
            </Box>
            <Box    
             display="flex"
             justifyContent="flex-start"
             alignItems="flex-start"
            >
                <div>
                    <Button 
                    size="small"
                    >Create Account</Button>
                </div>
            </Box>
        </FormControl>
        </Container>
    );
}

export default Login;