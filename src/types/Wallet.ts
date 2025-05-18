export interface Wallet {
    savingsAccounts: SavingsAccount[],
    savingsDeposits: SavingsDeposit[],
}

export interface SavingsAccount {
    title: string,
    rate: number,
    amount: number
}

export interface SavingsDeposit {
    title: string,
    endDate: Date,
    rate: number,
    amount: number,
}