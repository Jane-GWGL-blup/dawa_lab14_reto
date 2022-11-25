import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes"
import './App.css'
//https://http-nodejs-production-78a7.up.railway.app/api/v1
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
