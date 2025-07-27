// import './App.css'
// import Dashboard from "./components/Dashboard.tsx";
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import ThemeToggle from "./components/ThemeToggle.tsx";
// import {useState} from "react";
//
// const queryClient = new QueryClient();
//
// function App() {
//     const [darkTheme, setDarkTheme] = useState(false)
//
//     function toggleTheme() {
//         setDarkTheme(!darkTheme)
//     }
//
//     return (
//         <QueryClientProvider client={queryClient}>
//                 <div className={(darkTheme ? "app dark-theme" : "app")}>
//                     <ThemeToggle isDark={darkTheme} onToggle={toggleTheme}/>
//                     <Dashboard/>
//                 </div>
//         </QueryClientProvider>
//     );
// }
//
// export default App

import './App.css'
import Dashboard from "./components/Dashboard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ThemeToggle from "./components/ThemeToggle.tsx";
import {useState} from "react";
import LoginForm from "./components/LoginForm";

const queryClient = new QueryClient();

function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleTheme() {
        setDarkTheme(!darkTheme)
    }

    if (!isLoggedIn)
        return <LoginForm onLogin={() => setIsLoggedIn(true)}/>;

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