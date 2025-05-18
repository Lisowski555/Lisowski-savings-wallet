import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
// import {SavingsAccountProps} from "./SavingAccounts/SavingsAccount.tsx";
// import type {SavingsDepositProps} from "./SavingsDeposits/SavingsDeposit.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {Wallet} from "../types/Wallet.ts";

function Dashboard() {
    // TODO - move Current Balance to separate component
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
            <SavingsAccountsSection accounts={wallet.savingsAccounts}/> {/* TODO pass savings accounts from wallet to display them dynamically: add property in SavingsAccountsSection */}
            <SavingsDepositsSection/> {/* TODO pass savings deposits from wallet to display them dynamically: add property in SavingsDepositsSection */}
        </div>
    );
}

function calculateTotalBalance(wallet: Wallet): number {
    const {savingsAccounts, savingsDeposits} = wallet;
    //TODO to na dole
    // if wallet savingsAccounts is not empty
    // -> for each savingsAccount add amount to total sum
    // uf wallet savingsDeposits is not empty
    // -> for each savingsDeposit add amount to total sum
    // return total sum
    return 0;
}

export default Dashboard;
