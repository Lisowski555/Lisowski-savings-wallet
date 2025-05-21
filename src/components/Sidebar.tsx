import {Link} from 'react-router-dom';


export default function Sidebar() {
    return (
        <nav className="sidebar">
            <Link to="">Dashboard</Link>
            <Link to="/add-account">Add new savings account</Link>
        </nav>
    );
}
