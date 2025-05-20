import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {Wallet} from "../types/Wallet.ts";

function Dashboard() {
    // TODO -> zaczytac go (wallet) korzystajc z React Query (npm install -s react-query (czy cos -to jednak teraz Tanstack query))
    const wallet: Wallet = {
        savingsAccounts: [
            {title: "Account 1", rate: 0.05, amount: 100},
            {title: "Account 2", rate: 0.05, amount: 200},
        ],
        savingsDeposits: [
            {title: "Deposit 1", endDate: new Date(), rate: 0.04, amount: 1000},
            {title: "Deposit 2", endDate: new Date(), rate: 0.045, amount: 2000},
        ],
    };

    return (
        <div className="main">
            <h2 style={{fontSize: '28px', marginBottom: '20px'}}>Overview</h2>
            <TotalBalance amount={calculateTotalBalance(wallet)}/>
            {/* TODO - improve styling -> Sections and account / deposit components looks ugly (play with flex and CSS to */}
            {/*make it look beautiful*/}
            {/* You may use some nice icons in Cards to make them look better - https://fontawesome.com/icons */}
            {/* or https://lineicons.com/ */}
            <SavingsAccountsSection accounts={wallet.savingsAccounts}/>
            <SavingsDepositsSection deposits={wallet.savingsDeposits}/>
        </div>
    );
}

function calculateTotalBalance(wallet: Wallet): number {
    const {savingsAccounts, savingsDeposits} = wallet;

    let totalBalance = 0;

    for (let i = 0; i < savingsAccounts.length; i++) {
        const account = savingsAccounts[i];
        const money = account.amount;
        totalBalance = totalBalance + money;
    }

    for (let i = 0; i < savingsDeposits.length; i++) {
        const deposits = savingsDeposits[i];
        const money = deposits.amount;
        totalBalance = totalBalance + money;
    }

    return totalBalance;
}

export default Dashboard;
