import SavingsDeposit, {type SavingsDepositProps} from "./SavingsDeposit.tsx";
import {useState} from "react";
import type {SavingsDeposit as Deposit} from "../../types/Wallet.ts";
import Modal from "../modals/Modal.tsx";
import SavingsDepositForm from "../modals/SavingsDepositForm.tsx";

interface SavingsDepositsSectionProps {
    deposits: SavingsDepositProps[];
    saveNewDeposit: (deposit: Deposit) => void;
    onEditDeposit: (idx: number | null) => void;
    editDepositIndex: number | null;
    handleEditDeposit: (idx: number, dep: Deposit) => void;
    onDeleteDeposit: (idx: number) => void;
}

export default function SavingsDepositsSection({
                                                   deposits,
                                                   saveNewDeposit,
                                                   onEditDeposit,
                                                   editDepositIndex,
                                                   handleEditDeposit,
                                                   onDeleteDeposit
                                               }: SavingsDepositsSectionProps) {

    const [modalOpen, setModalOpen] = useState(false);

    function onSave(deposit: Deposit) {
        setModalOpen(false);
        saveNewDeposit(deposit);
    }

    return (
        <div className="section">
            <h2>Savings deposits</h2>
            <div className="card-group">
                {deposits.map((deposit, idx) => (
                    <div key={deposit.title + idx} style={{position: 'relative'}}>
                        <div onClick={() => onEditDeposit(idx)}>
                            <SavingsDeposit {...deposit}/>
                        </div>
                        <button
                            style={{
                                position: "absolute",
                                top: 6, right: 6,
                                background: "none",
                                color: "var(--error-color)",
                                border: "none",
                                fontSize: "1.1em",
                                cursor: "pointer",
                                zIndex: 2
                            }}
                            title="Delete"
                            onClick={e => {
                                e.stopPropagation();
                                onDeleteDeposit(idx);
                            }}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
                <button className="card" onClick={() => setModalOpen(true)}>➕</button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <SavingsDepositForm onSave={onSave}/>
            </Modal>
            <Modal isOpen={editDepositIndex !== null}
                   onClose={() => onEditDeposit(null)}>
                {editDepositIndex !== null &&
                    <SavingsDepositForm
                        onSave={(dep) => handleEditDeposit(editDepositIndex, dep)}
                        initial={deposits[editDepositIndex]}
                    />
                }
            </Modal>
        </div>
    )
}