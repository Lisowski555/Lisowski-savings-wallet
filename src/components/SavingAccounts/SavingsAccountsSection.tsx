import SavingsAccount, {type SavingsAccountProps} from "./SavingsAccount.tsx";
import type {SavingsAccount as Account} from "../../types/Wallet.ts";
import Modal from "../modals/Modal.tsx";
import SavingsAccountForm from "../modals/SavingsAccountForm.tsx";
import {useState} from "react";

interface SavingsAccountsSectionProps {
    accounts: SavingsAccountProps[];
    saveNewAccount: (account: Account) => void;
    onEditAccount: (idx: number | null) => void;
    editAccountIndex: number | null;
    handleEditAccount: (idx: number, acc: Account) => void;
    onDeleteAccount: (idx: number) => void;
}

export default function SavingsAccountsSection({
                                                   accounts,
                                                   saveNewAccount,
                                                   onEditAccount,
                                                   editAccountIndex,
                                                   handleEditAccount,
                                                   onDeleteAccount
                                               }: SavingsAccountsSectionProps) {
    const [modalOpen, setModalOpen] = useState(false);

    function onSave(account: Account) {
        setModalOpen(false);
        saveNewAccount(account);
    }

    return (
        <div className="section">
            <h2>Savings accounts</h2>
            <div className="card-group">
                {accounts.map((account, idx) => (
                    <div key={account.title + idx} style={{position: 'relative'}}>
                        <div onClick={() => onEditAccount(idx)}>
                            <SavingsAccount {...account}/>
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
                                onDeleteAccount(idx);
                            }}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
                <button className="card" onClick={() => setModalOpen(true)}>➕</button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <SavingsAccountForm onSave={onSave}/>
            </Modal>
            <Modal isOpen={editAccountIndex !== null}
                   onClose={() => onEditAccount(null)}>
                {editAccountIndex !== null &&
                    <SavingsAccountForm
                        onSave={(acc) => handleEditAccount(editAccountIndex, acc)}
                        initial={accounts[editAccountIndex]}
                    />
                }
            </Modal>
        </div>
    )
}