import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Router from "./routes"
import './App.css'
//https://http-nodejs-production-78a7.up.railway.app/api/v1
const App = () => {

  return (
    <Container >
      <Router />
    </Container>
  )
}

export default App;
