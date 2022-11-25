import { BrowserRouter, Route, Routes} from "react-router-dom"
import { HomeView, SignUp, Login} from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;