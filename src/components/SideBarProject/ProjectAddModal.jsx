import { useState } from "react";
import PropTypes from "prop-types";

import { useUserStore } from "../../store/store";
import Modal from "../Modal/Modal";
import Button from "../common/Button";
import FormTextInput from "../common/FormTextInput";
import FormLabel from "../common/FormLabel";
import {
  registerProjectByUserId,
  validateProjectUrl,
} from "../../apis/projectApi";

export default function ProjectAddModal({ isOpen, onClose }) {
  const { userId } = useUserStore(state => state.userInfo);
  const [isPassValidation, setIsPassValidation] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const [projectFormData, setProjectFormData] = useState({
    projectName: null,
    projectUrl: null,
    userId: userId,
  });

  async function handleValidationButtonClick() {
    const { projectUrl } = projectFormData;

    const { result } = await validateProjectUrl(projectUrl);

    setIsPassValidation(result);
    setIsHidden(false);
  }

  async function handleAddButtonClick() {
    const { projectName, userId } = projectFormData;
    if (!isPassValidation && projectName && userId) {
      return;
    }

    await registerProjectByUserId(projectFormData);
    onClose();
  }

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
            <FormTextInput
              name="projectName"
              onChange={e => {
                setProjectFormData(state => {
                  return { ...state, projectName: e.target.value };
                });
              }}
            />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <FormLabel htmlFor="projectUrl" text="프로젝트 URL" />
            <div className="flex justify-between items-center">
              <FormTextInput
                name="projectUrl"
                className="mr-2 grow"
                onChange={e => {
                  setIsHidden(true);
                  setProjectFormData(state => {
                    return { ...state, projectUrl: e.target.value };
                  });
                }}
              />
              <Button
                className="bg-color-blue px-4 py-2 rounded-lg text-white font-semibold w-fit transition hover:bg-color-blue-hover"
                onClick={handleValidationButtonClick}
                text="확인"
              />
            </div>
            <div
              className={`${isHidden && "hidden"} mt-1 text-sm ${isPassValidation ? "text-color-green" : "text-color-red"}`}>
              {isPassValidation
                ? "유효한 URL 입니다."
                : "유효하지 않은 URL 입니다."}
            </div>
          </div>
        </form>
        <Button
          className="bg-color-blue px-4 py-2 rounded-lg text-white font-semibold w-full transition hover:bg-color-blue-hover"
          onClick={handleAddButtonClick}
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
