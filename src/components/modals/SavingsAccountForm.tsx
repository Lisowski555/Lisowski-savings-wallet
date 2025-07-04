import {useState} from "react";
import type {SavingsAccount} from "../../types/Wallet.ts";

interface Props {
    onSave: (account: SavingsAccount) => void;
}



export default function SavingsAccountForm({onSave}: Props) {
    const [name, setName] = useState("");
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newAccount = {
            title: name,
            rate : rate/100,
            amount: amount
        } as SavingsAccount;
        onSave(newAccount);
    }

    return (
        <form className="modal-form" onSubmit={handleSubmit}>
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
                    value={rate} required={true} min={0.01}
                    onChange={e => setRate(Number(e.target.value))}/>
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    step="0.1"
                    value={amount} min={0}
                    required={true}
                    onChange={e => setAmount(Number(e.target.value))}/>
            </label>
            <button type="submit">Save</button>
        </form>
    );
}