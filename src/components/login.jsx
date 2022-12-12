import React from "react";
import Formulario from "./form";
import Input from "./styles/input";

export default function Login() {
    return (
        <header>
            <h2>Entrar</h2>
            <Formulario textSubmit="Entrar" type="login" textModal="Logado">
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
            <a href="/register">Cadastrar</a>
        </header>
    );
}
