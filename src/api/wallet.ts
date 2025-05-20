import walletData from '../assets/wallet-mock.json'
import type {Wallet} from "../types/Wallet.ts";

let wallet = walletData as Wallet;

export async function fetchWallet(): Promise<Wallet> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return wallet;
}

export async function saveWallet(newWallet: Wallet): Promise<Wallet> {
    console.log("Updating wallet!!!");
    await new Promise(resolve => setTimeout(resolve, 500));
    wallet = newWallet;
    return wallet;
}

/*
TODO: use special mocked API - https://jsonplaceholder.typicode.com/
Use /users resource add new api/users.ts file with corresponding fetch function (or add it here)
Create Component to display users (it can be rendered in Dashboard)
PS. Don't render everything (only few fields)
 */
