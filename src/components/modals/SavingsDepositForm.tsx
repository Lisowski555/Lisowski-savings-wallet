import {useState} from "react";
import type {SavingsDeposit} from "../../types/Wallet.ts";

interface Props {
    onSave: (account: SavingsDeposit) => void;
}

//TODO ogarnij closures w Reactcie


export default function SavingsDepositForm({onSave}: Props) {
    const [name, setName] = useState("");
    const [endDate, setEndDate] = useState("");
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newDeposit = {
            title: name,
            endDate,
            rate : rate/100,
            amount
        } as SavingsDeposit;
        onSave(newDeposit);
    }

    return (
        <form className="modal-form" onSubmit={handleSubmit}>
            <label>
                Account name:
                <input value={name} required={true}
                       onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Deposit end date:
                <input
                    type="date"
                    value={endDate}
                    required={true}
                    onChange={e => setEndDate(e.target.value)}
                />
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