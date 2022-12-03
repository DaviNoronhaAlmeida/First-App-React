import React from "react";
import { Modalstyle, Outterstyle } from "./styles/modal";
import { Button } from "@mui/material";

export default function Modal({ opened }) {
    const [modalOpened, setModalOpened] = opened;

    if (!modalOpened) return <></>;

    return (
        <Outterstyle>
            <Modalstyle>
                <Button onClick={() => setModalOpened(false)}>X</Button>
                <h1>Modal</h1>
            </Modalstyle>
        </Outterstyle>
    );
}
