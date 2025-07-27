import {useState} from "react";
import "./LoginForm.css";

interface Props {
    onLogin: () => void;
}

export default function LoginForm({onLogin}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (username === "test" && password === "test123") {
            onLogin();
        } else {
            setError("Invalid credentials");
        }
    }

    return (
        <div className="login-page">
            <div className="login-panel">
                <span className="login-title">Login</span>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            required
                            autoFocus
                            autoComplete="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            required
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Log in</button>
                    {error && <div className="login-error">{error}</div>}
                </form>
            </div>
        </div>
    );
}