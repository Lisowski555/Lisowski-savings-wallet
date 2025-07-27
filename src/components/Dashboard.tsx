import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {SavingsAccount, SavingsDeposit, Wallet} from "../types/Wallet.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchWallet, saveWallet} from "../api/wallet.ts";
import {useState} from "react";

function Dashboard() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: saveWallet,
        onSuccess: (newWallet: Wallet) => {
            queryClient.setQueryData(['wallet'], newWallet);
        }
    });

    const {data, isLoading, isError} = useQuery<Wallet, Error>({
        queryKey: ["wallet"],
        queryFn: fetchWallet,
        staleTime: 30_000,
        refetchOnWindowFocus: false,
    });

    const [editAccountIndex, setEditAccountIndex] = useState<number | null>(null);
    const [editDepositIndex, setEditDepositIndex] = useState<number | null>(null);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Oh no! Something went wrong!</div>;
    if (!data) return <div>No wallet found</div>;
    const wallet = data;

    function handleSaveNewAccount(newAccount: SavingsAccount) {
        mutation.mutate({
            ...wallet,
            savingsAccounts: [...wallet.savingsAccounts, newAccount]
        });
    }

    function handleSaveNewDeposit(newDeposit: SavingsDeposit) {
        mutation.mutate({
            ...wallet,
            savingsDeposits: [...wallet.savingsDeposits, newDeposit]
        });
    }

    function handleEditAccount(index: number, updatedAccount: SavingsAccount) {
        const updatedAccounts = wallet.savingsAccounts.map((acc, i) =>
            i === index ? updatedAccount : acc
        );
        mutation.mutate({...wallet, savingsAccounts: updatedAccounts});
        setEditAccountIndex(null);
    }

    function handleEditDeposit(index: number, updatedDeposit: SavingsDeposit) {
        const updatedDeposits = wallet.savingsDeposits.map((dep, i) =>
            i === index ? updatedDeposit : dep
        );
        mutation.mutate({...wallet, savingsDeposits: updatedDeposits});
        setEditDepositIndex(null);
    }

    // USUWANIE:
    function handleDeleteAccount(index: number) {
        if (window.confirm("Are you sure you want to delete this account?")) {
            const updatedAccounts = wallet.savingsAccounts.filter((_, i) => i !== index);
            mutation.mutate({...wallet, savingsAccounts: updatedAccounts});
        }
    }

    function handleDeleteDeposit(index: number) {
        if (window.confirm("Are you sure you want to delete this deposit?")) {
            const updatedDeposits = wallet.savingsDeposits.filter((_, i) => i !== index);
            mutation.mutate({...wallet, savingsDeposits: updatedDeposits});
        }
    }

    return (
        <div className="main">
            <h2 style={{fontSize: '28px', marginBottom: '20px'}}>Dashboard</h2>
            <TotalBalance amount={calculateTotalBalance(wallet)}/>
            <SavingsAccountsSection
                accounts={wallet.savingsAccounts}
                saveNewAccount={handleSaveNewAccount}
                onEditAccount={setEditAccountIndex}
                editAccountIndex={editAccountIndex}
                handleEditAccount={handleEditAccount}
                onDeleteAccount={handleDeleteAccount}
            />
            <SavingsDepositsSection
                deposits={wallet.savingsDeposits}
                saveNewDeposit={handleSaveNewDeposit}
                onEditDeposit={setEditDepositIndex}
                editDepositIndex={editDepositIndex}
                handleEditDeposit={handleEditDeposit}
                onDeleteDeposit={handleDeleteDeposit}
            />
        </div>
    );
}

function calculateTotalBalance(wallet: Wallet): number {
    const {savingsAccounts, savingsDeposits} = wallet;
    let totalBalance = 0;
    for (const account of savingsAccounts) totalBalance += account.amount;
    for (const deposit of savingsDeposits) totalBalance += deposit.amount;
    return totalBalance;
}

export default Dashboard;