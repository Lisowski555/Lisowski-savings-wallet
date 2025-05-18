import {toPercents} from "../../utils/formatters.ts";

export interface SavingsDepositProps {
    title: string,
    endDate: Date,
    rate: number,
    amount: number,
}

export default function SavingsDeposit({title, endDate, rate, amount}: SavingsDepositProps) {
    return (
        <div>
            <h3>{title}</h3>
            <p>End date: {endDate.toLocaleDateString()}</p>
            <p>Rate: {toPercents(rate)}</p>
            <p>Amount: ${amount}</p>
        </div>
    )
}