import React, { ReactNode, forwardRef, memo, useEffect } from "react";
import "./ModalStandard.css";
import useModalStandard from "../../hooks/modals/useModalStandard";
interface ModalStandardProps {
  id?: string;
  children: ReactNode;
  onClose?: () => void;
  open?: boolean;
}

const ModalStandard = forwardRef(function (
  { children, id, onClose, open }: ModalStandardProps,
  ref
) {
  const { handleClose, isOpen } = useModalStandard({ open, onClose, ref });

  useEffect(() => {
    if (isOpen) {
      const htmlDOM = document.querySelector("html");
      htmlDOM?.classList.add("noscroll");
      return () => htmlDOM?.classList.remove("noscroll");
    }
  }, [isOpen]);

  return (
    <div
      id={id}
      role="dialog"
      aria-modal={true}
      tabIndex={-1}
      className={`modal-standard modal-scrim-blur ${
        isOpen ? "modal-open" : ""
      }`}
    >
      <button className="modal-overlay-backdrop" onClick={handleClose}></button>
      <div className="modal-overlay">
        <div className="modal-content-wrapper">{children}</div>
        <div className="modal-close-btn-wrapper">
          <button
            className="modal-close-button"
            aria-label="Close Modal"
            onClick={handleClose}
          >
            <span className="modal-close-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default memo(ModalStandard);
