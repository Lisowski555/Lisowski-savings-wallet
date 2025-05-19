import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";

interface SavingsDepositsSectionProps {
    deposits: SavingsDepositProps[];
}

export default function SavingsDepositsSection({deposits}: SavingsDepositsSectionProps) {

    return (
        <div>
            <h2>Savings deposits</h2>
            <div className="card-group">
                {deposits.map(deposit => (<SavingsDeposit {...deposit}/>))}
            </div>
        </div>
    )
}