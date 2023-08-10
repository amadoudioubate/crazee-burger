import LoginPage from "./Components/Pages/LoginPage/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderPage from "./Components/Pages/OrderPage/OrderPage"
function App() {
 

  // Display (render)
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/order/:firstname" element={<OrderPage />}/>
          </Routes>
        </BrowserRouter>
        {/*<LoginPage />*/}
    </div>
  )
}

export default App
