// interface Props {
//     isOpen: boolean;
//     onClose: () => void;
//     children: React.ReactNode;
// }
//
// const modalStyles: React.CSSProperties = {
//     position: "fixed",
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: "rgba(0,0,0,0.5)",
//     display: "flex",
//     alignItems: "left",
//     justifyContent: "center",
//     zIndex: 1000,
// };
//
// const modalContentStyles: React.CSSProperties = {
//     position: "absolute",
//     background: "#5900CE",
//     padding: "2rem",
//     borderRadius: "8px",
//     minWidth: "300px",
//     maxWidth: "90vw",
//     color: "#19DCB9"
// };
//
// // TODO IMPORTANT (II) -> fix styling move it to separate css use theme colors for example `var(--primary-color)`
//
// export default function Modal({isOpen, onClose, children}: Props) {
//     if (!isOpen) return null;
//
//     return (
//         <div style={modalStyles} onClick={onClose}>
//             <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
//                 <button style={{ float: "right" }} onClick={onClose}>X</button>
//                 {children}
//             </div>
//         </div>
//     );
// }

import "./Modal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">×</button>
                {children}
            </div>
        </div>
    );
}