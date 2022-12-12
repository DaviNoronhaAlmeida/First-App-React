import React from "react";
import Modal from "./modal";
import Form from "./styles/form";

export default function Formulario({ children, textSubmit, type, textModal }) {
    const [modalOpened, setModalOpened] = React.useState(false);

    async function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const body = Object.fromEntries(formData.entries());
        setModalOpened(true);
        console.log(body);

        // if (type === "login") {
        //     try {
        //         const data = await fetch("http://localhost:8000/login", {
        //             mode: "no-cors",
        //             method: "POST",
        //             headers: {
        //                 Accept: "application/json",
        //                 "Content-Type": "application/json",
        //             },
        //             body: body,
        //         });
        //         console.log(data);
        //         const info = React.createContext(body);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // } else if (type === "register") {
        //     try {
        //         const data = await fetch("http://localhost:8000/users", {
        //             mode: "no-cors",
        //             method: "POST",
        //             headers: {
        //                 Accept: "application/json",
        //                 "Content-Type": "application/json",
        //             },
        //             body: body,
        //         });
        //         console.log(data);
        //         const info = React.createContext(body);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // } else if (type === "update") {
        //     try {
        //         const data = await fetch("http://localhost:8000/users", {
        //             mode: "no-cors",
        //             method: "PATCH",
        //             headers: {
        //                 Accept: "application/json",
        //                 "Content-Type": "application/json",
        //             },
        //             body: body,
        //         });
        //         console.log(data);
        //         const info = React.createContext(body);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    }

    return (
        <>
            <Modal opened={[modalOpened, setModalOpened]} text={textModal} />
            <Form onSubmit={submitForm}>
                {children}
                <button>{textSubmit}</button>
            </Form>
        </>
    );
}
