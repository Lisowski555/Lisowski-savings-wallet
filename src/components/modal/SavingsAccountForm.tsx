import {useState} from "react";
import type {SavingsAccount} from "../../types/Wallet.ts";

interface Props {
    onSave: (account: SavingsAccount) => void;
}

export default function SavingsAccountForm({onSave}: Props) {
    const [name, setName] = useState("");
    const [rate, setRate] = useState<number | undefined>(undefined);
    const [amount, setAmount] = useState(0);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newAccount = {
            title: name,
            rate,
            amount
        } as SavingsAccount;
        onSave(newAccount);
    }

    return (
        // TODO make it full form (it doesnt cover all of the account props) DONE
        <form onSubmit={handleSubmit}>
            <label>
                Account name:
                <input value={name} required={true}
                       onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Account Rate:
                <input
                    type="number"
                    step="0.01"
                    value={rate === undefined ? "" : rate} required={true}
                    onChange={e => setRate(e.target.value === "" ? undefined : Number(e.target.value))}/>
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    step="0.1"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}/>
            </label>
            <button type="submit">Save</button>
        </form>

    );
}