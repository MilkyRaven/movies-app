import { createPortal } from "react-dom";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root");

function Modal({ isOpen, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot!
  );
}

export default Modal;
