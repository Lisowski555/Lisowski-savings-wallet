interface Props {
    amount: number,
}

export default function TotalBalance({amount}: Props) {
    return (
        <div className="main">
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Overview</h2>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div className="card" style={{ backgroundColor: 'black', color: 'white' }}>
                    <h3>Current Balance</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${amount}</p>
                </div>
            </div>
        </div>
    )
}
