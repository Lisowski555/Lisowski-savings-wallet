import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {saveWallet} from "../api/wallet.ts";
import type {SavingsAccount, Wallet} from "../types/Wallet.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

// import walletMock from "../assets/wallet-mock.json"; // NIE importuj JSONa, bo będzie tylko do odczytu

export default function AddAccountPage() {
    const queryClient = useQueryClient();

    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const mutation = useMutation({
        mutationFn: saveWallet,
        onSuccess: (newWallet: Wallet) => {
            queryClient.setQueryData<Wallet>(['wallet'], newWallet);
        }
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newSavingAccount = {
            title: "Nazwa konta nowa",
            rate: rate / 100,
            amount: amount
        } as SavingsAccount

        // mutation.mutate({
        //     ...wallet,
        //     savingsAccounts: [...(wallet.savingsAccounts), newSavingAccount]
        // })
    };

    return (
        <div>
            <h1>Dodaj nowe konto oszczędnościowe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Oprocentowanie:</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={e => setRate(Number(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Stan początkowy:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        required
                        min={0}
                    />
                </div>
                <button type="submit">Dodaj konto</button>
                <button type="button" onClick={() => navigate("/")}>Anuluj</button>
            </form>
        </div>
    );
};
