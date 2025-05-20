import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    // TODO - add grid layout - for later as it needs to work with mobiles dynamically
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <Sidebar/>
                <Dashboard/>
            </div>
        </QueryClientProvider>
    );
}

export default App
