import React from "react";
import { Modalstyle, Outterstyle } from "./styles/modal";
import { Button } from "@mui/material";

export default function Modal({ opened, text }) {
    const [modalOpened, setModalOpened] = opened;

    if (!modalOpened) return <></>;

    if (text === "Logado") {
        return (
            <Outterstyle>
                <Modalstyle>
                    <Button onClick={() => setModalOpened(false)}>X</Button>
                    <h1>{text}</h1>
                    <a href="/update">Atualizar</a>
                </Modalstyle>
            </Outterstyle>
        );
    }

    return (
        <Outterstyle>
            <Modalstyle>
                <Button onClick={() => setModalOpened(false)}>X</Button>
                <h1>{text}</h1>
            </Modalstyle>
        </Outterstyle>
    );
}
