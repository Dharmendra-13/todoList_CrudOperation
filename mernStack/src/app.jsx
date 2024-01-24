
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./auth/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";

export function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      
    </BrowserRouter>
    </>
  )
}
