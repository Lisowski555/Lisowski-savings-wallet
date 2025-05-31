import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";

interface SavingsDepositsSectionProps {
    deposits: SavingsDepositProps[];
}

export default function SavingsDepositsSection({deposits}: SavingsDepositsSectionProps) {

    // TODO add modal to add savings deposit

    return (
        <div className="section">
            <h2>Savings deposits</h2>
            <div className="card-group">
                {deposits.map(deposit => (<SavingsDeposit {...deposit}/>))}
                <button className="card">+</button>
            </div>
        </div>
    )
}