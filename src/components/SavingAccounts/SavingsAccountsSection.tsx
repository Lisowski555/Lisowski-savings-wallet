import SavingsAccount, {type SavingsAccountProps} from "./SavingsAccount.tsx";

export default function SavingsAccountsSection(/*here comes argument (props)*/) {
    const accounts: SavingsAccountProps[] = [ // TODO this accounts should come from property (functions argument)
        {title: "Account 1", rate: 0.05, amount: 1000},
        {title: "Account 2", rate: 0.05, amount: 2000},
    ]

    return (
        <div>
            <h2>Savings accounts</h2>
            <div className="card-group">
                {accounts.map(account => (
                    <SavingsAccount title={account.title}
                                    rate={account.rate}
                                    amount={account.amount}/>
                ))}
            </div>
        </div>
    )
}