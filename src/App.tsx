import './App.css'
import Dashboard from "./components/Dashboard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ThemeToggle from "./components/ThemeToggle.tsx";
import {useState} from "react";

const queryClient = new QueryClient();

function App() {
    const [darkTheme, setDarkTheme] = useState(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme)
    }

    return (
        <QueryClientProvider client={queryClient}>
                <div className={(darkTheme ? "app dark-theme" : "app")}>
                    <ThemeToggle isDark={darkTheme} onToggle={toggleTheme}/>
                    <Dashboard/>
                </div>
        </QueryClientProvider>
    );
}

export default App
