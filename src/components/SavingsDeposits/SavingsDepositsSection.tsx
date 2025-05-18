import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";

export default function SavingsDepositsSection() {
    const deposits: SavingsDepositProps[] = [
        {title: "Deposit 1", endDate: new Date(), rate: 0.04, amount: 1000},
        {title: "Deposit 2", endDate: new Date(), rate: 0.045, amount: 2000},
    ]

    return (
        <div>
            <h2>Savings deposits</h2>
            <div className="card-group">
                {deposits.map(deposit => (<SavingsDeposit {...deposit}/>))}
            </div>
        </div>
    )
}