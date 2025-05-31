import {useState} from "react";
import type {SavingsAccount} from "../../types/Wallet.ts";

interface Props {
    onSave: (account: SavingsAccount) => void;
}

export default function SavingsAccountForm({ onSave } : Props) {
    const [name, setName] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newAccount = {
            title: name,
            rate: 0.01,
            amount: 100
        } as SavingsAccount;
        onSave(newAccount);
    }

    return (
        // TODO make it full form (it doesnt cover all of the account props)
        <form onSubmit={handleSubmit}>
            <label>
                Account name:
                <input value={name} required={true}
                        onChange={e=> setName(e.target.value)} />
            </label>
            <button type="submit">Save</button>
        </form>

    );
}