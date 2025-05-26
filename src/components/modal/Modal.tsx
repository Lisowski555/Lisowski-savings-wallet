interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const modalStyles: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalContentStyles: React.CSSProperties = {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    minWidth: "300px",
    maxWidth: "90vw",
};

export default function Modal({isOpen, onClose, children}: Props) {
    if (!isOpen) return null;

    return (
        <div style={modalStyles} onClick={onClose}>
            <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
                <button className="kutas" style={{ float: "right" }} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}