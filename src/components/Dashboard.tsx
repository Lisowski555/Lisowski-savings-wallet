import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {Wallet} from "../types/Wallet.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchWallet} from "../api/wallet.ts";
import SaveButton from "./SaveButton.tsx";

function Dashboard() {
    const { data, isLoading, isError } = useQuery<Wallet, Error>({
        queryKey: ["wallet"],
        queryFn: fetchWallet,
        staleTime: 30_000,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Oh no! Something went wrong!</div>;
    if (!data) return <div>No wallet found</div>;

    const wallet = data;

    return (
        <div className="main">
            <h2 style={{fontSize: '28px', marginBottom: '20px'}}>Dashboard</h2>
            <TotalBalance amount={calculateTotalBalance(wallet)}/>
            {/* TODO - improve styling -> Sections and account / deposit components looks ugly (play with flex and CSS to */}
            {/*make it look beautiful*/}
            {/* You may use some nice icons in Cards to make them look better - https://fontawesome.com/icons */}
            {/* or https://lineicons.com/ */}
            <SavingsAccountsSection accounts={wallet.savingsAccounts}/>
            <SavingsDepositsSection deposits={wallet.savingsDeposits}/>
            <SaveButton />
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
