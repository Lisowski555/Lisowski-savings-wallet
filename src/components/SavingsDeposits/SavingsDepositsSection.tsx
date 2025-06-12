import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";
import {useState} from "react";
import type {SavingsDeposit as Deposit} from "../../types/Wallet.ts";
// import SavingsDeposit from "../SavingDeposits/SavingsDeposit.tsx";
import Modal from "../modals/Modal.tsx";
import SavingsDepositForm from "../modals/SavingsDepositForm.tsx";

interface SavingsDepositsSectionProps {
    deposits: SavingsDepositProps[];
    saveNewDeposit: (deposit: Deposit) => void;
}

export default function SavingsDepositsSection({deposits, saveNewDeposit}: SavingsDepositsSectionProps) {


    const [modalOpen, setModalOpen] = useState(false);

    function onSave(deposit: Deposit) {
        setModalOpen(false) //zamykanie modala

        saveNewDeposit(deposit)
    }

    return (
        <div className="section">
            <h2>Savings deposits</h2>
            <div className="card-group">
                {deposits.map(deposit => (
                    <SavingsDeposit title={deposit.title}
                                    endDate={deposit.endDate}
                                    rate={deposit.rate}
                                    amount={deposit.amount}/>
                ))}
                <button className="card" onClick={() => setModalOpen(true)}>➕</button>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <SavingsDepositForm onSave={onSave}/>
                </Modal>
            </div>
        </div>
    )
}