import {toPercents} from "../../utils/formatters.ts";

export interface SavingsAccountProps {
    title: string,
    rate: number,
    amount: number,
}

export default function SavingsAccount({title, rate, amount}: SavingsAccountProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Rate: {toPercents(rate)}</p>
            <p className="display-amount">Amount: ${amount}</p>
        </div>
    )
}