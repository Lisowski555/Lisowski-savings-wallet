import SavingsAccountsSection from "./SavingAccounts/SavingsAccountsSection.tsx";
import SavingsDepositsSection from "./SavingsDeposits/SavingsDepositsSection.tsx";
import TotalBalance from "./TotalBalance.tsx";
import type {SavingsAccount, Wallet} from "../types/Wallet.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchWallet, saveWallet} from "../api/wallet.ts";
// import SaveButton from "./SaveButton.tsx";
import Modal from "./modal/Modal.tsx";
import SavingsAccountForm from "./modal/SavingsAccountForm.tsx";
import {useState} from "react";
// import walletMock from "../assets/wallet-mock.json";

// function getWalletMock(){
//     const mockRaw = localStorage.getItem("wallet-mock");
//     if (mockRaw) {
//         return JSON.parse(mockRaw);
//     }
//     return walletMock
// }

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: saveWallet,
        onSuccess: (newWallet: Wallet) => {
            queryClient.setQueryData(['wallet'], newWallet);
        }
    })

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
        setModalOpen(false);
        mutation.mutate({
            ...wallet,
            savingsAccounts: [...(wallet.savingsAccounts), newSavingsAccount]
        });
    }

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

            <button onClick={() => setModalOpen(true)}>Add account</button>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <SavingsAccountForm onSave={handleSaveNewAccount} />
            </Modal>
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
