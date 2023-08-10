import LoginPage from "./Components/Pages/LoginPage/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderPage from "./Components/Pages/OrderPage/OrderPage"
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage"
function App() {
 

  // Display (render)
  return (
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/order/:firstname" element={<OrderPage />}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>     
  )
}

export default App
