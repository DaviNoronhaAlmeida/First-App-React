import React from "react";
import "./App.css";
import Formulario from "./components/form";
import Input from "./components/styles/input";

function App() {
    return (
        <div className="App">
            <header>
                <Formulario textSubmit="criar">
                    <Input
                        name="email"
                        type="email"
                        required
                        placeholder="E-mail"
                    />
                    <Input name="name" required placeholder="Name" />
                    <Input
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                    />
                </Formulario>
            </header>
        </div>
    );
}

export default App;
