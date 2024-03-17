import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import FoodPage from "./pages/Food/FoodPage";
import RegisterPage from "./pages/Register/RegisterPage";
const AppRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/search/:searchTerm" element={<Homepage/>}/>
            <Route path="/tags/:tag" element={<Homepage />}/>
            <Route path="/food/:id" element={<FoodPage/>} />
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
            path="/track/:orderId"
            element={
            <AuthRoute>
             <OrderTrackPage />
            </AuthRoute>
            }
        />
            <Route
            path="/profile"
            element={
            <AuthRoute>
                <ProfilePage />
            </AuthRoute>
            }
            />
            <Route
            path="/orders/:filter?"
            element={
            <AuthRoute>
                <OrdersPage />
            </AuthRoute>
            }
            />
        </Routes>
    )
}

export default AppRoutes;