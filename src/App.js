import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/login";
import Update from "./components/update";
import Register from "./components/register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Login />} path="/" />
                    <Route element={<Update />} path="/update" />
                    <Route element={<Register />} path="/register" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
