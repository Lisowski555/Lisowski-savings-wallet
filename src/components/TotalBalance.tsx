interface Props {
    amount: number,
}

export default function TotalBalance({amount}: Props) {
    return (
        <div className="main">
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div className="card" style={{ backgroundColor: 'black', color: 'white' }}>
                    <h3>Total Balance</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${amount}</p>
                </div>
            </div>
        </div>
    )
}
