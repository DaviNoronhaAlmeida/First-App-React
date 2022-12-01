export default function Modal({ opened }) {
    const modalstyle = {
        position: "relative",
        left: "550px",
        width: "250px",
        heigth: "200px",
        background: "white",
    };

    const outterstyle = {
        width: "100%",
        heigth: "100%",
        background: "rgba(0,0,0,.5)",
        position: "absolute",
    };

    const [modalOpened, setModalOpened] = opened;

    if (!modalOpened) return <></>;

    return (
        <div style={outterstyle}>
            <div style={modalstyle}>
                <button onClick={() => setModalOpened(false)}>X</button>
                <h1>Modal</h1>
            </div>
        </div>
    );
}
