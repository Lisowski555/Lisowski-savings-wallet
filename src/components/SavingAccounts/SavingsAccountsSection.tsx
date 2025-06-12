import SavingsAccount, {type SavingsAccountProps} from "./SavingsAccount.tsx";
import type {SavingsAccount as Account} from "../../types/Wallet.ts";
import Modal from "../modals/Modal.tsx";
import SavingsAccountForm from "../modals/SavingsAccountForm.tsx";
import {useState} from "react";

interface SavingsAccountsSectionProps {
    accounts: SavingsAccountProps[];
    saveNewAccount: (account: Account) => void;
}

export default function SavingsAccountsSection({accounts, saveNewAccount}: SavingsAccountsSectionProps) {

    const [modalOpen, setModalOpen] = useState(false);

    function onSave(account: Account) {
        setModalOpen(false) //zamykanie modala

        saveNewAccount(account)
    }

    return (
        <div className="section">
            <h2>Savings accounts</h2>
            <div className="card-group">
                {accounts.map(account => (
                    <SavingsAccount title={account.title}
                                    rate={account.rate}
                                    amount={account.amount}/>
                ))}
                <button className="card" onClick={() => setModalOpen(true)}>➕</button>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <SavingsAccountForm onSave={onSave}/>
                </Modal>
            </div>
        </div>
    )
}