import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
    return (
        // TODO - add grid layout - for later as it needs to work with mobiles dynamically
        <div className="app">
            <Sidebar/>
            <Dashboard/>
        </div>
    );
}

export default App