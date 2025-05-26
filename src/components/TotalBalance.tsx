import "./TotalBalance.css"

interface Props {
    amount: number,
}

export default function TotalBalance({amount}: Props) {
    return (
        <div>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div className="card totalBalance">
                    <div className="totalBalanceContent">
                        <h3>Total Balance</h3>
                        <p>${amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
