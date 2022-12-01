import { useState } from "react";
import Modal from "./modal";

export default function Formulario({ children, textSubmit }) {
    const [modalOpened, setModalOpened] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const body = Object.fromEntries(formData.entries());
        setModalOpened(true);
        console.log(body);
    }

    return (
        <>
            <Modal opened={[modalOpened, setModalOpened]} />
            <form onSubmit={submitForm}>
                {children}
                <button>{textSubmit}</button>
            </form>
        </>
    );
}
