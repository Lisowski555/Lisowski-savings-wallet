import {toPercents} from "../../utils/formatters.ts";

export interface SavingsDepositProps {
    title: string,
    endDate: string,
    rate: number,
    amount: number,
}

export default function SavingsDeposit({title, endDate, rate, amount}: SavingsDepositProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>End date: {endDate}</p>
            <p>Rate: {toPercents(rate)}</p>
            <p className="display-amount">Amount: ${amount}</p>
        </div>
    )
}