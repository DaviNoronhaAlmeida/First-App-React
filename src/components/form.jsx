import React from "react";
import Modal from "./modal";
import Form from "./styles/form";

export default function Formulario({ children, textSubmit }) {
    const [modalOpened, setModalOpened] = React.useState(false);

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
            <Form onSubmit={submitForm}>
                {children}
                <button>{textSubmit}</button>
            </Form>
        </>
    );
}
