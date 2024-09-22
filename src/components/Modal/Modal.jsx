import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "../common/Button";
import CloseIcon from "../../assets/icon/ico_close.svg";

export default function Modal({
  isOpen,
  onClose,
  hasCloseBtn,
  children,
  title,
  width = "w-modal-default-width",
  height = "h-modal-default-height",
}) {
  const [isShowModal, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isShowModal) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isShowModal]);

  function handleCloseModal() {
    if (onClose) {
      onClose();
    }

    setModalOpen(false);
  }

  function handleKeyDownEsc(e) {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  }

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDownEsc}
      className={`${width} ${height} drop-shadow rounded-lg p-6`}>
      <div className="flex flex-col item-center w-full h-full">
        <div className="h-[32px] flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          {hasCloseBtn && (
            <Button
              className="p-1 transition hover:bg-color-black-5 rounded-lg"
              onClick={handleCloseModal}>
              <img src={CloseIcon} alt="Close Icon" width={24} />
            </Button>
          )}
        </div>
        <div className="h-modal-content-height">{children}</div>
      </div>
    </dialog>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  hasCloseBtn: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
