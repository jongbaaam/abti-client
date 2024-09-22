import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import Button from "../common/Button";
import FormTextInput from "../common/FormTextInput";
import FormLabel from "../common/FormLabel";
import IcoInfo from "../../assets/icon/ico_info.svg?react";

export default function TestAddModal({ isOpen, onClose }) {
  const [isIcoInfoHover, setIcoInfoHover] = useState(false);

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
            <FormTextInput name="title" onChange={() => []} />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <FormLabel htmlFor="description" text="설명" />
            <FormTextInput name="projectUrl" onChange={() => []} />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <div className="flex items-center">
              <FormLabel htmlFor="mde" text="MDE" />
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
                    A/B 테스트의 유의미한 결과를 판단하기 위한 최소 전환 차이 값
                    입니다.
                  </div>
                )}
              </div>
            </div>
            <FormTextInput name="mde" onChange={() => []} />
          </div>
        </form>
        <Button
          className="bg-color-blue mt-6 px-4 py-2 rounded-lg text-white font-semibold w-full transition hover:bg-color-blue-hover"
          onClick={() => {}}
          text="추가"
        />
      </div>
    </Modal>
  );
}

TestAddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
