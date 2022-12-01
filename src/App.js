import "./App.css";
import Formulario from "./components/form";

function App() {
    return (
        <div className="App">
            <header>
                <Formulario textSubmit="criar">
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="E-mail"
                    />
                    <input name="name" required placeholder="Name" />
                    <input
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
