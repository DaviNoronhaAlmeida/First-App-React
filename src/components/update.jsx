import React from "react";
import Formulario from "./form";
import Input from "./styles/input";

export default function Update() {
    return (
        <header>
            <h2>Atualizar</h2>
            <Formulario
                textSubmit="Atualizar"
                type="update"
                textModal="Atualizado"
            >
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
            <a href="/">Sair</a>
        </header>
    );
}
