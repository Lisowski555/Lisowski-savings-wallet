function Sidebar() {
    return (
        <div className="sidebar">
            <h1>finance</h1>
            <ul>
                <li style={{ color: 'lightgreen', fontWeight: 'bold' }}>Overview</li>
                <li>Transactions</li>
                <li>Budgets</li>
                <li>Pots</li>
                <li>Recurring Bills</li>
            </ul>
        </div>
    );
}

export default Sidebar;
