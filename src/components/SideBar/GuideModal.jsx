import PropTypes from "prop-types";

import Modal from "../Modal/Modal";

export default function GuideModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn={true}>
        <div className="w-full h-full flex justify-center items-center">
          <h1>가이드 모달 구현 예정</h1>
        </div>
      </Modal>
    </>
  );
}

GuideModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
