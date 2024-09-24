import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import Button from "../common/Button";
import FormTextInput from "../common/FormTextInput";
import FormLabel from "../common/FormLabel";
import IcoInfo from "../../assets/icon/ico_info.svg?react";
import { createTestByProjectId } from "../../apis/testsApi";
import { useSelectedProjectStore, useUserStore } from "../../store/store";

export default function TestAddModal({ isOpen, onClose }) {
  const { userInfo } = useUserStore(state => state);
  const [isIcoInfoHover, setIcoInfoHover] = useState(false);
  const { selectedProject } = useSelectedProjectStore(state => state);
  const [testFormData, setTestFormData] = useState({
    title: null,
    description: null,
  });

  async function handleAddButtonClick() {
    const { userId } = userInfo;
    const { title, description } = testFormData;

    if (!title && !description) {
      return;
    }

    await createTestByProjectId({
      userId,
      projectId: selectedProject,
      testFormData,
    });

    onClose();
  }

  return (
    <Modal
      title="A/B 테스트 생성"
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}
      height="h-fit">
      <div className="flex flex-col justify-between h-full">
        <form method="POST">
          <div className="flex flex-col justify-center">
            <FormLabel htmlFor="title" text="태스트 명" />
            <FormTextInput
              name="title"
              onChange={e => {
                setTestFormData(state => {
                  return {
                    ...state,
                    title: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <div className="flex items-center">
              <FormLabel htmlFor="description" text="설명" />
              <div className="mb-2 ml-1 flex justify-center items-center">
                <IcoInfo
                  className="fill-text-color-gray-light w-4 h-4 p-0.5"
                  onMouseEnter={() => {
                    setIcoInfoHover(true);
                  }}
                  onMouseLeave={() => {
                    setIcoInfoHover(false);
                  }}
                />
                {isIcoInfoHover && (
                  <div className="text-sm ml-2 px-2 py-0.5 bg-color-blue-light text-color-blue rounded-lg">
                    EX) &#34;구매 버튼 UI에 따른 구매 전환율 비교 테스트&#34;
                  </div>
                )}
              </div>
            </div>
            <FormTextInput
              name="description"
              onChange={e => {
                setTestFormData(state => {
                  return {
                    ...state,
                    description: e.target.value,
                  };
                });
              }}
            />
          </div>
        </form>
        <Button
          className="bg-color-blue mt-6 px-4 py-2 rounded-lg text-white font-semibold w-full transition hover:bg-color-blue-hover"
          onClick={handleAddButtonClick}
          text="생성"
        />
      </div>
    </Modal>
  );
}

TestAddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
