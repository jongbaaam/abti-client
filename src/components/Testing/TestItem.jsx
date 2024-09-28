import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import Button from "../common/Button";
import TestDeleteButton from "./TestDeleteButton";
import TestIdCopyButton from "./TestIdCopyButton";
import IcoArrowR from "../../assets/icon/ico_arrow_r.svg?react";
import { getToLocaleDateString } from "../../utils/dateUtil";
import { useTestStore } from "../../store/store";

export default function TestItem({ data, onClick }) {
  const { setSelectedTest } = useTestStore(state => state);
  const [isShowButton, setIsShowButton] = useState(false);
  const { createdAt, title, _id } = data;

  async function handleIdCopyButtonClick() {
    try {
      await navigator.clipboard.writeText(_id);
      console.log("실행");

      toast.success("테스트 ID가 복사 되었습니다!");
    } catch (error) {
      toast.error("복사 과정에서 에러가 발생하였습니다.");
    }
  }

  async function handleTestItemClick() {
    setSelectedTest(data);
    onClick();
  }

  return (
    <li className="flex items-center border-b-2 cursor-pointer">
      <div className="flex items-center grow p-4 transition hover:bg-color-blue-light">
        <div
          onClick={handleTestItemClick}
          className="flex justify-between items-center grow mr-2">
          <div>
            <div className="text-xl font-semibold mb-1">{title}</div>
            <div className="text-xs">
              {`Created on ${getToLocaleDateString(createdAt)}`}
            </div>
          </div>
        </div>
        <div className="w-12 flex justify-center items-center">
          <Button
            className="p-1 hover:bg-color-black-5 rounded-lg"
            onClick={() => {
              setIsShowButton(isShowButton => !isShowButton);
            }}>
            <div className="flex justify-center items-center">
              <IcoArrowR className="fill-text-color-gray-light" />
            </div>
          </Button>
        </div>
      </div>
      <div
        className={`${isShowButton ? "flex" : "hidden"} justify-center items-center transition`}>
        <TestIdCopyButton onClick={handleIdCopyButtonClick} />
        <TestDeleteButton />
      </div>
    </li>
  );
}

TestItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
