import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import FoodPage from "./pages/Food/FoodPage";

const AppRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/search/:searchTerm" element={<Homepage/>}/>
            <Route path="/tags/:tag" element={<Homepage />}/>
            <Route path="/food/:id" element={<FoodPage/>} />
        </Routes>
    )
}

export default AppRoutes;