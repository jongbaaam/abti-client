import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import Button from "../common/Button";
import FormTextInput from "../common/FormTextInput";
import FormLabel from "../common/FormLabel";

export default function ProjectAddModal({ isOpen, onClose }) {
  return (
    <Modal
      title="프로젝트 추가"
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}>
      <div className="flex flex-col justify-between h-full">
        <form method="POST">
          <div className="flex flex-col justify-center">
            <FormLabel htmlFor="projectName" text="프로젝트 명" />
            <FormTextInput name="projectName" onChange={() => []} />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <FormLabel htmlFor="projectUrl" text="프로젝트 URL" />
            <div className="flex justify-between items-center">
              <FormTextInput
                name="projectUrl"
                className="mr-2 grow"
                onChange={() => {}}
              />
              <Button
                className="bg-color-blue px-4 py-2 rounded-lg text-white font-semibold w-fit transition hover:bg-color-blue-hover"
                onClick={() => {}}
                text="확인"
              />
            </div>
          </div>
        </form>
        <Button
          className="bg-color-blue px-4 py-2 rounded-lg text-white font-semibold w-full transition hover:bg-color-blue-hover"
          onClick={() => {}}
          text="추가"
        />
      </div>
    </Modal>
  );
}

ProjectAddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
