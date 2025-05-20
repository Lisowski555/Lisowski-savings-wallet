import type {Wallet} from "../types/Wallet.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saveWallet} from "../api/wallet.ts";
import * as React from "react";

export default function SaveButton() {
    const queryClient = useQueryClient();

    // THIS IS IMPORTANT!!!!!!!!!!!!!!
    // TODO -> add forms / components / modals to update wallet for example add new savingsAccount / edit existing one
    const mutation = useMutation({
        mutationFn: saveWallet,
        onSuccess: (newWallet: Wallet) => {
            queryClient.setQueryData<Wallet>(['wallet'], newWallet);
        }
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        mutation.mutate({
            savingsAccounts: [{title: "new one!", rate: 0,amount: 0}],
            savingsDeposits: [],
        });
    }

    return (
        <button onClick={handleClick}>Save</button>
    )
}