import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {SavingsAccount, SavingsDeposit, Wallet} from "../types/Wallet.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchWallet, saveWallet} from "../api/wallet.ts";

//TODO raczej important, dalej wypadałoby dodać jakąć edycję kont i depozytów (chociażby poprzez delete)
//TODO IMPORTANT ZRÓB LOGIN SCREEN I OGARNIJ LOGOWANIE DO STRONY! (istotne przy hybryddowej)
//TODO IMPORTANT ogarnąć plik co zrobi z tego prawdziwe PWA (https://web.dev/learn/pwa/web-app-manifest?hl=pl) PLIK MANIFESTU


function Dashboard() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: saveWallet,
        onSuccess: (newWallet: Wallet) => {
            queryClient.setQueryData(['wallet'], newWallet);
        }
    });

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

    function handleSaveNewAccount(newSavingsAccount: SavingsAccount) {
        mutation.mutate({
            ...wallet,
            savingsAccounts: [...(wallet.savingsAccounts), newSavingsAccount]
        });
    }

    function handleSaveNewDeposit(newSavingsDeposit: SavingsDeposit) {
        mutation.mutate({
            ...wallet,
            savingsDeposits: [...(wallet.savingsDeposits), newSavingsDeposit]
        });
    }

    return (
        <div className="main">
            <h2 style={{fontSize: '28px', marginBottom: '20px'}}>Dashboard</h2>
            <TotalBalance amount={calculateTotalBalance(wallet)}/>
            {/* TODO - improve styling */}
            {/* You may use some nice icons in Cards to make them look better - https://fontawesome.com/icons */}
            {/* or https://lineicons.com/ */}

            <SavingsAccountsSection accounts={wallet.savingsAccounts} saveNewAccount={handleSaveNewAccount}/>
            <SavingsDepositsSection deposits={wallet.savingsDeposits} saveNewDeposit={handleSaveNewDeposit}/>

            {/* TODO NOT IMPORTANT - dodaj sobie przycisk add account który nie działa */}

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
