import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
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
                <BrowserRouter>
                    <div className={(darkTheme ? "app dark-theme" : "app")}>
                        <ThemeToggle isDark={darkTheme} onToggle={toggleTheme} />
                        {/* TODO IMPORTANT W CHUJ! WYPIERDOL SIDEBAR + fix styling of the page*/}
                        <Sidebar/>
                        <Routes>
                            <Route path="" element={<Dashboard/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
    );
}

export default App
