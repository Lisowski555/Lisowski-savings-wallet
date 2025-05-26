import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function App() {
    // TODO - add grid layout - for later as it needs to work with mobiles dynamically
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className="app">
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
