import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../common/Button";
import TestDeleteButton from "./TestDeleteButton";
import TestIdCopyButton from "./TestIdCopyButton";
import TestStatus from "./TestStatus";
import IcoArrowR from "../../assets/icon/ico_arrow_r.svg?react";
import { getToLocaleDateString } from "../../utils/dateUtil";

export default function TestItem({ data }) {
  const [isShowButton, setIsShowButton] = useState(false);
  const { progressStatus, createdAt, title, _id } = data;

  async function handleIdCopyButtonClick() {
    await navigator.clipboard.writeText(_id);
  }

  return (
    <li className="flex items-center border-b-2 cursor-pointer">
      <div
        onClick={() => {}}
        className="flex items-center grow p-4 transition hover:bg-color-blue-light">
        <div className="flex justify-between items-center grow mr-2">
          <div>
            <div className="text-xl font-semibold mb-1">{title}</div>
            <div className="text-xs">
              {`Created on ${getToLocaleDateString(createdAt)}`}
            </div>
          </div>
          <TestStatus status={progressStatus} />
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
};
