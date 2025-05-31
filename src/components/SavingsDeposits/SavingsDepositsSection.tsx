import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";

interface SavingsDepositsSectionProps {
    deposits: SavingsDepositProps[];
}

export default function SavingsDepositsSection({deposits}: SavingsDepositsSectionProps) {

    // TODO IMPORTANT add modal to add savings deposit - follow the same steps as for Account + add add new SavingsDepositForm component

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