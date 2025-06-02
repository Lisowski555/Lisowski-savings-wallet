import SavingsAccount, {type SavingsAccountProps} from "./SavingsAccount.tsx";
import type {SavingsAccount as Account} from "../../types/Wallet.ts";

interface SavingsAccountsSectionProps {
    accounts: SavingsAccountProps[];
    saveNewAccount: (account: Account) => void;
}

export default function SavingsAccountsSection({accounts, saveNewAccount}: SavingsAccountsSectionProps) {

    // TODO add modals to add account (see current implementation in Dashboard)

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