import SavingsAccounts from "./SavingAccounts/SavingsAccounts.tsx";
import SavingsDeposits from "./SavingsDeposits/SavingsDeposits.tsx";

function Dashboard() {
    // TODO - move Current Balance to separate component
    return (
        <div className="main">
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Overview</h2>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div className="card" style={{ backgroundColor: 'black', color: 'white' }}>
                    <h3>Current Balance</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$4,836.00</p>
                </div>
            </div>
            <SavingsAccounts />
            <SavingsDeposits />
        </div>
    );
}

export default Dashboard;
