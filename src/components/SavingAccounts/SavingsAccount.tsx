import {toPercents} from "../../utils/formatters.ts";

export interface SavingsAccountProps {
    title: string,
    rate: number,
    amount: number,
}

export default function SavingsAccount({title, rate, amount}: SavingsAccountProps) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Rate: {toPercents(rate)}</p>
            <p>Amount: ${amount}</p>
        </div>
    )
}