import SavingsAccount, {type SavingsAccountProps} from "./SavingsAccount.tsx";

interface SavingsAccountsSectionProps {
    accounts: SavingsAccountProps[];
}

export default function SavingsAccountsSection({accounts}: SavingsAccountsSectionProps) {

    // TODO add modal to add account

    return (
        <div className="section">
            <h2>Savings accounts</h2>
            <div className="card-group">
                {accounts.map(account => (
                    <SavingsAccount title={account.title}
                                    rate={account.rate}
                                    amount={account.amount}/>
                ))}
                <button className="card">+</button>
            </div>
        </div>
    )
}